import { ArrowRight } from "lucide-react";

export default function Button({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 bg-primary text-style rounded-md flex items-center gap-1 cursor-pointer transition-all duration-200 hover:gap-2 ${className}`}
    >
      {children}
      <ArrowRight className="w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
}
