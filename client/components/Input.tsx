import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
