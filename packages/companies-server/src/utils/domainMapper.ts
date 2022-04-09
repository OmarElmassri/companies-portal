import * as Lodash from 'lodash';

// NOTE: domain mapper solve problem of prisma models(types) and map it to our app dtos

export class DomainMapper {

    // map single (model, type, interface, class) to another DTO or (model, type, interface, class) 
    public static domainToDTO<T, U>(model: U): T {
        const mappedDTO = {} as T;
        if (!Lodash.isEmpty(model) && !Array.isArray(model)) {
            Object.keys(model).forEach((key: string) => {
                mappedDTO[key] = model[key];
            });
        }
        return mappedDTO;
    }


    // map array (model, type, interface, class) to another DTO or (model, type, interface, class) 
    public static arrayOfDomainToArrayOfDTO<T, U>(arrayModels: U[]): T[] {
        const mappedArrayOfDTO = [];
        if (arrayModels.length > 0 && Array.isArray(arrayModels)) {
            for (const model of arrayModels) {
                mappedArrayOfDTO.push(DomainMapper.domainToDTO(model));
            }
        }
        return mappedArrayOfDTO;
    }
}
