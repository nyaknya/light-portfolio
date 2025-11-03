interface ToggleProps {
  isOn: boolean;
  onChange: () => void;
}

export default function Toggle({ isOn, onChange }: ToggleProps) {
  return (
    <button
      onClick={onChange}
      className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
        isOn ? "bg-[#4a4a4a]" : "bg-gray-200"
      } dark:bg-[#3a3a3a]`}
    >
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-transform duration-300 ${
          isOn ? "translate-x-7 bg-white" : "translate-x-0.5 bg-white"
        } dark:bg-[#c0c0c0]`}
      />
    </button>
  );
}