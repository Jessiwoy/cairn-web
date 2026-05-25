import { Link } from "react-router-dom";

import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";

const footerLinks = ["Hiking", "Camping", "Trekking", "Bushcraft"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-cairn-black py-10 text-white">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Link to="/" className="font-heading text-xl font-semibold">
            CAIRN
          </Link>
          <Typography className="mt-3 max-w-sm text-white/64" variant="body">
            Premium outdoor retail para rotas longas, acampamentos e exploracao.
          </Typography>
        </div>
        <nav className="grid gap-2 text-sm text-white/70">
          {footerLinks.map((link) => (
            <Link key={link} to={`/catalog?category=${link.toLowerCase()}`} className="hover:text-cairn-sand">
              {link}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
