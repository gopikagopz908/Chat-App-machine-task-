import React from 'react';

function InputField({ label, type = 'text', placeholder, value, onChange, name,className }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-black text-xl font-semibold mb-2 " htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border-2 border-white  text-white placeholder-white focus:outline-none ${className}`}     />
    </div>
  );
}

export default InputField;
