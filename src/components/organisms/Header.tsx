import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navigationItems = [
  { label: "Hiking", href: "/catalog?category=hiking" },
  { label: "Camping", href: "/catalog?category=camping" },
  { label: "Trekking", href: "/catalog?category=trekking" },
  { label: "Bushcraft", href: "/catalog?category=bushcraft" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-cairn-black text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
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
          <Link
            to="/catalog"
            className="inline-flex h-10 w-10 items-center justify-center text-white/80 transition hover:text-cairn-sand"
            aria-label="Buscar produtos"
          >
            <Search size={20} strokeWidth={1.8} />
          </Link>
          <Link
            to="/account"
            className="inline-flex h-10 w-10 items-center justify-center text-white/80 transition hover:text-cairn-sand"
            aria-label="Conta"
          >
            <UserRound size={20} strokeWidth={1.8} />
          </Link>
          <Link
            to="/account"
            className="inline-flex h-10 w-10 items-center justify-center text-white/80 transition hover:text-cairn-sand"
            aria-label="Wishlist"
          >
            <Heart size={20} strokeWidth={1.8} />
          </Link>
          <Link
            to="/cart"
            className="inline-flex h-10 w-10 items-center justify-center text-white/80 transition hover:text-cairn-sand"
            aria-label="Carrinho"
          >
            <ShoppingBag size={20} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </header>
  );
}
