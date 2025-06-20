import { twMerge } from "tailwind-merge";

interface InputProps {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  className?: string;
  labelClass?: string;
  inputClass?: string;
  required?: boolean;
  long?: boolean;
}

export default function TextInput({
  label,
  id,
  name,
  type,
  value,
  onChange,
  className,
  labelClass,
  inputClass,
  required = false,
  long = false,
}: InputProps) {
  const baseClasses =
    "block w-full border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6 mt-2.5 focus:outline-none ";
  return (
    <div className={twMerge("col-span-2 xl:col-span-1", className)}>
      <label
        htmlFor={id}
        className={twMerge("block text-sm/6 font-semibold", labelClass)}
      >
        {label}
        {required ? (
          <>
            <span aria-hidden="true"> (required)</span>
            <span className="hidden"> required</span>
          </>
        ) : null}
      </label>
      {long ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          value={value}
          onChange={onChange}
          className={twMerge(baseClasses, inputClass)}
          required={required}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={twMerge(baseClasses, inputClass)}
          required={required}
        />
      )}
    </div>
  );
}
