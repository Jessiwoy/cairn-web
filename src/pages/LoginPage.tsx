import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Input } from "@/components/atoms/Input";
import { Typography } from "@/components/atoms/Typography";

export function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-cairn-off-white py-14 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(24rem,0.55fr)] lg:items-start">
          <div className="max-w-3xl">
            <Typography variant="eyebrow">Conta</Typography>
            <Typography as="h1" className="mt-4" variant="h1">
              Entrar na sua conta
            </Typography>
            <Typography className="mt-4 max-w-xl text-cairn-gray" variant="body">
              Acompanhe pedidos, revise favoritos e mantenha seu carrinho sincronizado
              em uma experiencia segura.
            </Typography>

            <div className="mt-10 grid gap-4 border-l border-cairn-black/10 pl-5 text-sm text-cairn-gray">
              <p>Pedidos e historico de compra.</p>
              <p>Favoritos salvos para comparacao.</p>
              <p>Checkout mais rapido em proximas compras.</p>
            </div>
          </div>

          <form className="bg-white p-6 lg:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5">
              <Input
                autoComplete="email"
                label="E-mail"
                name="email"
                required
                type="email"
              />
              <Input
                autoComplete="current-password"
                label="Senha"
                minLength={8}
                name="password"
                required
                type="password"
              />
              <Button className="w-full" size="lg" type="submit">
                Entrar
              </Button>
            </div>

            {submitted ? (
              <div className="mt-4 border border-cairn-green/25 bg-cairn-green/8 p-4">
                <p className="text-sm font-medium text-cairn-green">
                  Acesso preparado para a proxima etapa de autenticacao segura.
                </p>
                <Link
                  className="mt-3 inline-flex text-sm font-semibold text-cairn-black hover:text-cairn-copper"
                  to="/account"
                >
                  Acessar area da conta mockada
                </Link>
              </div>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 border-t border-cairn-black/10 pt-5 text-sm text-cairn-gray">
              <Link
                className="font-semibold text-cairn-black hover:text-cairn-copper"
                to="/register"
              >
                Criar uma conta
              </Link>
              <Link
                className="font-semibold text-cairn-black hover:text-cairn-copper"
                to="/catalog"
              >
                Continuar explorando sem login
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
