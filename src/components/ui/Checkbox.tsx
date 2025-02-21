import { twMerge } from "tailwind-merge";

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  labelClass?: string;
  url: string;
  urlText: string;
  required?: boolean;
}

export default function Checkbox({
  id,
  name,
  label,
  labelClass,
  url,
  urlText,
  required = false,
}: CheckboxProps) {
  return (
    <div className="checkbox-wrapper-30 flex gap-2 pb-6">
      <span className="checkbox">
        <input id={id} name={name} type="checkbox" required={required} />
        <svg>
          <use xlinkHref="#checkbox-30" className="checkbox"></use>
        </svg>
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
        <symbol id="checkbox-30" viewBox="0 0 22 22">
          <path
            fill="none"
            stroke="currentColor"
            d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
          />
        </symbol>
      </svg>
      <label htmlFor={id} className={twMerge("text-sm/6", labelClass)}>
        {label}
        <a target="_blank" href={url} className="font-bold text-blue-600">
          {urlText}
        </a>
      </label>
    </div>
  );
}
