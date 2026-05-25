import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/atoms/Button";

type QuantitySelectorProps = {
  max?: number;
  min?: number;
  onChange: (value: number) => void;
  value: number;
};

export function QuantitySelector({ max = 99, min = 1, onChange, value }: QuantitySelectorProps) {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(Math.min(max, value + 1));

  return (
    <div className="inline-grid h-11 grid-cols-[2.75rem_3rem_2.75rem] border border-cairn-black/15 bg-white">
      <Button
        aria-label="Diminuir quantidade"
        className="h-full w-full"
        disabled={value <= min}
        onClick={decrease}
        size="icon"
        variant="ghost"
      >
        <Minus size={16} />
      </Button>
      <output className="flex items-center justify-center text-sm font-semibold">
        {value}
      </output>
      <Button
        aria-label="Aumentar quantidade"
        className="h-full w-full"
        disabled={value >= max}
        onClick={increase}
        size="icon"
        variant="ghost"
      >
        <Plus size={16} />
      </Button>
    </div>
  );
}
