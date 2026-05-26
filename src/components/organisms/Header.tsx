import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";

const navigationItems = [
  { label: "Trilha", href: "/catalog?category=hiking" },
  { label: "Camping", href: "/catalog?category=camping" },
  { label: "Trekking", href: "/catalog?category=trekking" },
  { label: "Campo", href: "/catalog?category=bushcraft" },
];

export function Header() {
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
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="text-white/80 hover:text-cairn-sand"
          >
            <Link to="/catalog" aria-label="Buscar produtos">
              <Search size={20} strokeWidth={1.8} />
            </Link>
          </Button>
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
