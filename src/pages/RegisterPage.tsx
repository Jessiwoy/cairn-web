import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Input } from "@/components/atoms/Input";
import { Typography } from "@/components/atoms/Typography";

export function RegisterPage() {
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
            <Typography variant="eyebrow">Cadastro</Typography>
            <Typography as="h1" className="mt-4" variant="h1">
              Criar conta CAIRN
            </Typography>
            <Typography className="mt-4 max-w-xl text-cairn-gray" variant="body">
              Salve seus dados de entrega, acompanhe pedidos e mantenha favoritos
              prontos para a proxima rota.
            </Typography>

            <div className="mt-10 grid gap-4 border-l border-cairn-black/10 pl-5 text-sm text-cairn-gray">
              <p>Dados protegidos e experiencia consistente.</p>
              <p>Historico preparado para pedidos futuros.</p>
              <p>Favoritos e carrinho em um unico lugar.</p>
            </div>
          </div>

          <form className="bg-white p-6 lg:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5">
              <Input
                autoComplete="name"
                label="Nome completo"
                name="name"
                required
              />
              <Input
                autoComplete="email"
                label="E-mail"
                name="email"
                required
                type="email"
              />
              <Input
                autoComplete="new-password"
                label="Senha"
                minLength={8}
                name="password"
                required
                type="password"
              />
              <Input
                autoComplete="new-password"
                label="Confirmar senha"
                minLength={8}
                name="passwordConfirmation"
                required
                type="password"
              />
              <Button className="w-full" size="lg" type="submit">
                Criar conta
              </Button>
            </div>

            {submitted ? (
              <p className="mt-4 text-sm font-medium text-cairn-green">
                Cadastro preparado para a proxima etapa de autenticacao segura.
              </p>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 border-t border-cairn-black/10 pt-5 text-sm text-cairn-gray">
              <Link
                className="font-semibold text-cairn-black hover:text-cairn-copper"
                to="/login"
              >
                Ja tenho uma conta
              </Link>
              <Link
                className="font-semibold text-cairn-black hover:text-cairn-copper"
                to="/catalog"
              >
                Explorar produtos antes de cadastrar
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
