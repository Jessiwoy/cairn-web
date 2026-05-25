import { Search } from "lucide-react";

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";

type SearchBarProps = {
  placeholder?: string;
};

export function SearchBar({ placeholder = "Buscar produtos" }: SearchBarProps) {
  return (
    <form className="flex w-full max-w-md items-end gap-2" role="search">
      <Input aria-label="Buscar produtos" placeholder={placeholder} type="search" />
      <Button aria-label="Buscar" size="icon" type="submit">
        <Search size={18} strokeWidth={1.8} />
      </Button>
    </form>
  );
}
