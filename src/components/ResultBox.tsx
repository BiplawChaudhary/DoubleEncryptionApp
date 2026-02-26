import { Check, Copy } from "lucide-react";
import { useState } from "react";

const ResultBox = ({
  label,
  content,
  accent,
}: {
  label: string;
  content: string;
  accent: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isPurple = accent === "purple";

  return (
    <div
      className={`result-in  mt-4 rounded-2xl p-5 border
      ${
        isPurple
          ? "bg-indigo-100 border-indigo-200"
          : "bg-pink-50/60 border-pink-200"
      }`}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full
            ${isPurple ? "bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]" : "bg-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.6)]"}`}
          />
          <span
            className={`mono text-sm tracking-widest uppercase font-medium
            ${isPurple ? "text-indigo-500" : "text-pink-500"}`}
          >
            {label}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 bg-transparent border-none cursor-pointer mono text-sm  tracking-wide transition-colors duration-200
            ${copied ? "text-emerald-500" : isPurple ? "text-indigo-400 hover:text-indigo-600" : "text-pink-400 hover:text-pink-600"}`}
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
          {copied ? "copied!" : "copy"}
        </button>
      </div>
      <pre
        className={`m-0 mono text-lg leading-relaxed whitespace-pre-wrap break-all max-h-56 overflow-y-auto
        ${isPurple ? "text-indigo-700" : "text-pink-700"}`}
      >
        {content}
      </pre>
    </div>
  );
};

export default ResultBox;
