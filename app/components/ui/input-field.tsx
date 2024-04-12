import React from "react";

interface InputFieldProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type, placeholder, value, onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-[14px] font-medium text-[#ced4da]">
                {label} <span className="text-red-500">*</span>
            </label>
            <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                className={`mt-1 block w-full px-3 py-2 text-sm border border-gray-400 rounded-[4px] shadow-sm bg-[#1e1c1c] focus:outline-none focus:ring-[#FFA301] focus:border-[#FFA301] transition duration-300`}
            />
        </div>
    );
};

export default InputField;