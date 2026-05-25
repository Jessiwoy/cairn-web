import { type InputHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, id, label, ...props }, ref) => {
    return (
      <label className="grid gap-2 text-sm font-medium text-cairn-black">
        {label ? <span>{label}</span> : null}
        <input
          ref={ref}
          id={id}
          className={cn(
            "h-11 w-full border border-cairn-black/15 bg-white px-4 text-sm text-cairn-black transition placeholder:text-cairn-gray focus:border-cairn-copper focus:outline-none disabled:cursor-not-allowed disabled:bg-cairn-black/5",
            error ? "border-red-700" : "",
            className,
          )}
          {...props}
        />
        {error ? <span className="text-xs font-medium text-red-700">{error}</span> : null}
      </label>
    );
  },
);

Input.displayName = "Input";
