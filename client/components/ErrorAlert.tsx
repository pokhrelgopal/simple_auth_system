import React from "react";
type ErrorAlertProps = {
  error: any;
};
const ErrorAlert = ({ error }: ErrorAlertProps) => {
  return (
    <div
      role="alert"
      className="rounded border-s-4 border-red-500 bg-red-50 p-4"
    >
      <p className="mt-2 text-red-700">{error}</p>
    </div>
  );
};

export default ErrorAlert;
