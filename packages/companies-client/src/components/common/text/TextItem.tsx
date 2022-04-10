import React, { useState, useEffect } from "react";
// Helpers
import { LanguageHook } from "../../../utils/hooks";

interface TextItemProps {
  content: string;
  classes?: string;
  onClick?: () => void;
  params?: { [key: string]: string };
  children?: JSX.Element;
  span?: boolean;
  style?: { [key: string]: string };
  normal?: boolean;
}

const TextItem = ({
  content,
  classes,
  onClick,
  params,
  children,
  span,
  style,
  normal,
}: TextItemProps) => {
  // Hooks
  const { t, language } = LanguageHook();
  const [TextValue, setTextValue] = useState<string>("");

  // Set text item values with arabic check
  useEffect(() => {
    const translatedParams: { [key: string]: string } = {};
    if (!normal && params) {
      const paramsKeys: string[] = Object.keys(params);
      paramsKeys.forEach((paramKey: string) => {
        translatedParams[paramKey] = t(params[paramKey]);
      });
    }
    setTextValue(normal ? content : t(content, { ...translatedParams }));
  }, [content, normal, language, params]);

  // Render text content
  const textContent = () => {
    return (
      <>
        <span
          style={{
            width: "fit-content",
            ...style,
          }}
        >
          {TextValue}
        </span>
        {children && " "}
        {children}
      </>
    );
  };

  if (span) {
    return (
      <span onClick={onClick} className={`text-justify ${classes}`}>
        {textContent()}
      </span>
    );
  } else
    return (
      <div onClick={onClick} className={`text-justify ${classes}`}>
        {textContent()}
      </div>
    );
};

export default TextItem;
