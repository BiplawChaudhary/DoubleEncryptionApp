export default function ActionBar({
  submitLabel,
  onClear,
  btnClass = "",
  submitStyle = {},
}: any) {
  return (
    <div className="flex gap-2.5">
      <button
        type="submit"
        className={`flex-3 py-3 rounded-xl border-none text-white font-bold text-sm tracking-widest cursor-pointer uppercase transition-all duration-200 ${btnClass}`}
        style={{ fontFamily: "Syne, sans-serif", ...submitStyle }}
      >
        {submitLabel}
      </button>
      <button
        type="button"
        onClick={onClear}
        className="flex-1 py-3 rounded-xl  font-medium text-lg bg-pink-300  hover:bg-pink-500 text-white cursor-pointer transition-all duration-200"
      >
        Clear
      </button>
    </div>
  );
}