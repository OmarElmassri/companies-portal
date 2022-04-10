import React, { useEffect, useState } from "react";
import HeadTextField from "../common/fields/headTextField";
import TextItem from "../common/text/TextItem";
import { useLocation, useParams } from "react-router-dom";
import {
  HandleApiHook,
  useFetchCountries,
  useFetchIndustryTypes,
} from "../../utils/hooks";
import {
  createCompany,
  getCompany,
  updateCompany,
} from "../../services/company";
import { ICompany } from "../../interfaces/company.interface";
import SelectField from "../common/fields/selectField";
import { ISelectOptions } from "../../utils/interfaces";
import TextAreaField from "../common/fields/textAreaField";
import FormButtons from "../common/buttons/formButtons";
import history from "../../utils/history";
import { ICountry } from "../../interfaces/country.interface";
import { ICity } from "../../interfaces/city.interface";
import CompanyFormSkeleton from "./helpers/companyFormSkeleton";

const CompanyForm: React.FunctionComponent = () => {
  // Hooks
  const { code } = useParams<any>();
  const location = useLocation();
  const { loading: fetchCompanyLoading, submit: submitFetchCompany } =
    HandleApiHook(true);
  const { loading, getErrorItem, submit } = HandleApiHook();
  const { industryTypesLoading, industryTypes } = useFetchIndustryTypes();
  const { countryLoading, countries, originalCountries } = useFetchCountries();
  const [isEditing, setIsEditing] = useState<boolean>(
    code && location.pathname.includes("edit")
  );
  const [cities, setCities] = useState<ISelectOptions[]>();
  const [name, setName] = useState<string>("");
  const [industryTypeId, setIndustryTypeId] = useState<number>();
  const [countryId, setCountryId] = useState<number>();
  const [cityId, setCityId] = useState<number>();
  const [description, setDescription] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  // Fetch company data in Edit mode
  useEffect(() => {
    if (isEditing) {
      fetchCompany();
    }
  }, []);

  // Fill cities
  useEffect(() => {
    if (countryId) fillAvailableCities(countryId);
  }, [countryId, originalCountries]);

  // Fetch company
  const fetchCompany = async () => {
    submitFetchCompany({
      service: getCompany,
      urlParam: code,
      onSuccess: (companyResult: ICompany) => {
        const {
          name,
          industry_type_id,
          country_id,
          city_id,
          description,
          address,
        } = companyResult;
        setName(name);
        setIndustryTypeId(industry_type_id);
        setCountryId(country_id);
        setCityId(city_id);
        setDescription(description);
        setAddress(address);
      },
    });
  };

  // Add cities
  const fillAvailableCities = (countryId: number) => {
    let selectedCountry = originalCountries?.find(
      (country: ICountry) => country.id === countryId
    );
    setCities(
      selectedCountry?.Cities?.map((city: ICity) => {
        const { id, name } = city;
        return {
          value: id,
          label: name,
        } as ISelectOptions;
      })
    );
  };

  // Submit company
  const submitCompany = (e: any) => {
    e.preventDefault();
    submit({
      service: isEditing ? updateCompany : createCompany,
      urlParam: isEditing ? code : "",
      body: {
        name,
        industry_type_id: industryTypeId,
        country_id: countryId,
        city_id: cityId,
        description,
        address,
      },
      onSuccess: () => history.goBack(),
      successMessage: isEditing ? "company-updated" : "company-created",
    });
  };

  return (
    <form onSubmit={submitCompany} className="bottom-extend top-extend-fill">
      <div className="single-grid grid-high-gap white-back all-med-padd shadow">
        <TextItem content="company-data" classes="label-hev brand text-upper" />
        {isEditing && fetchCompanyLoading ? (
          <CompanyFormSkeleton />
        ) : (
          <>
            <div className="double-grid grid-high-gap">
              <HeadTextField
                place="company.name"
                value={name}
                onChange={setName}
                innerPlace="company.enter-name"
                error={getErrorItem("name")}
              />
              <SelectField
                place="company.industry-type"
                innerPlace="company.select-industry"
                options={industryTypes as ISelectOptions[]}
                onChange={setIndustryTypeId}
                value={industryTypeId as number}
                disabled={industryTypesLoading}
                error={getErrorItem("industry_type_id")}
              />
              <SelectField
                place="company.country"
                innerPlace="company.select-country"
                options={countries as ISelectOptions[]}
                onChange={setCountryId}
                value={countryId as number}
                disabled={countryLoading}
                error={getErrorItem("country_id")}
              />
              <SelectField
                place="company.city"
                innerPlace="company.select-city"
                options={cities as ISelectOptions[]}
                onChange={setCityId}
                value={cityId as number}
                disabled={!countryId || cities?.length === 0}
                error={getErrorItem("city_id")}
              />
              <TextAreaField
                place="company.description"
                innerPlace="company.enter-desc"
                rows={3}
                onChange={setDescription}
                value={description}
                error={getErrorItem("description")}
              />
              <TextAreaField
                place="company.address"
                innerPlace="company.enter-address"
                rows={3}
                onChange={setAddress}
                value={address}
                error={getErrorItem("address")}
              />
            </div>
            <FormButtons
              submitContent="action.save"
              icon="save"
              onCancel={() => history.goBack()}
              disabled={loading}
            />
          </>
        )}
      </div>
    </form>
  );
};

export default CompanyForm;
