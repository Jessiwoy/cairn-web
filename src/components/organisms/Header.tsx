import { type FormEvent, useEffect, useRef, useState } from "react";
import { Heart, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";

const navigationItems = [
  { label: "Trilha", href: "/catalog?category=hiking" },
  { label: "Camping", href: "/catalog?category=camping" },
  { label: "Trekking", href: "/catalog?category=trekking" },
  { label: "Campo", href: "/catalog?category=bushcraft" },
];

export function Header() {
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = searchQuery.trim();
    if (!query) {
      searchInputRef.current?.focus();
      return;
    }

    navigate(`/catalog?q=${encodeURIComponent(query)}`);
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-cairn-black text-white">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-normal">
          CAIRN
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive ? "text-cairn-sand" : "transition hover:text-cairn-sand"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <form
              className="absolute left-5 right-5 top-20 flex h-11 items-center border border-cairn-black/10 bg-white text-cairn-black shadow-sm sm:static sm:h-10 sm:w-64 sm:border-white/20 sm:shadow-none"
              onSubmit={handleSearchSubmit}
              role="search"
            >
              <input
                ref={searchInputRef}
                aria-label="Buscar no site"
                className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-cairn-gray"
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setIsSearchOpen(false);
                  }
                }}
                placeholder="Buscar no site"
                type="text"
                value={searchQuery}
              />
              <Button
                aria-label="Enviar busca"
                className="h-full w-10"
                size="icon"
                type="submit"
                variant="ghost"
              >
                <Search size={18} strokeWidth={1.8} />
              </Button>
              <Button
                aria-label="Fechar busca"
                className="h-full w-10"
                onClick={() => setIsSearchOpen(false)}
                size="icon"
                type="button"
                variant="ghost"
              >
                <X size={18} strokeWidth={1.8} />
              </Button>
            </form>
          ) : (
            <Button
              aria-label="Abrir busca"
              className="text-white/80 hover:text-cairn-sand"
              onClick={() => setIsSearchOpen(true)}
              size="icon"
              variant="ghost"
            >
              <Search size={20} strokeWidth={1.8} />
            </Button>
          )}
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="text-white/80 hover:text-cairn-sand"
          >
            <Link to="/account" aria-label="Conta">
              <UserRound size={20} strokeWidth={1.8} />
            </Link>
          </Button>
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="text-white/80 hover:text-cairn-sand"
          >
            <Link to="/account" aria-label="Favoritos">
              <Heart size={20} strokeWidth={1.8} />
            </Link>
          </Button>
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="text-white/80 hover:text-cairn-sand"
          >
            <Link to="/cart" aria-label="Carrinho">
              <ShoppingBag size={20} strokeWidth={1.8} />
            </Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
