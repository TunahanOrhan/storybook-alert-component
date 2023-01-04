import React from "react";
import SuccessIcon from "./SuccessIcon";
import InfoIcon from "./InfoIcon";
import WarningIcon from "./WarningIcon";
import ErrorIcon from "./ErrorIcon";

interface AlertProps {
  type: "success" | "info" | "warning" | "error";
  icon: "tick" | "info" | "danger" | "cross";
  text: string;
  backgroundColor?: string;
}

export const Alert = ({
  type,
  text,
  icon,
  backgroundColor,
  ...props
}: AlertProps) => {
  return (
    <div
      className={`${type} bg-[${backgroundColor}] text-white p-3 rounded-lg flex`}
      {...props}
      style={{ backgroundColor }}
    >
      <div className="mr-2">
        {icon === "tick" ? (
          <SuccessIcon />
        ) : icon === "info" ? (
          <InfoIcon />
        ) : icon === "danger" ? (
          <WarningIcon />
        ) : icon === "cross" ? (
          <ErrorIcon />
        ) : (
          ""
        )}
      </div>
      {text}
    </div>
  );
};
