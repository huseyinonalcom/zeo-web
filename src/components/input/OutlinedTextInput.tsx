export default function OutlinedTextInput({
  name,
  type,
  value,
  onChange,
  className,
}: {
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border border-gray-300 bg-gray-500 px-4 py-3 placeholder:text-white hover:bg-gray-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
}
