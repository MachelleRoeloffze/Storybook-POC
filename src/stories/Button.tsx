interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700';
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }[size];

  return (
    <button
      type="button"
      className={`rounded-md focus:outline-none ${mode} ${sizeClasses}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
