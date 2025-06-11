import React from 'react';

function Button({ label, onClick, variant = 'solid' }) {
  const baseClasses = 'font-semibold px-6 py-3 rounded-xl transition duration-200';

  const variantClasses = {
    solid: 'bg-white w-sm text-black shadow-sm hover:shadow-md',
    outline: 'border border-orange-500 text-orange-500 bg-transparent hover:bg-orange-50',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {label}
    </button>
  );
}

export default Button;
