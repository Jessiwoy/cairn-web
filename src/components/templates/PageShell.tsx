import type { ReactNode } from "react";

import { Container } from "@/components/atoms/Container";
import { Typography } from "@/components/atoms/Typography";

type PageShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <section className="min-h-[calc(100vh-4rem)] py-16 lg:py-24">
      <Container>
        <Typography className="mb-4" variant="eyebrow">
          {eyebrow}
        </Typography>
        <Typography as="h1" className="mb-6 max-w-3xl text-cairn-black" variant="h1">
          {title}
        </Typography>
        {children}
      </Container>
    </section>
  );
}
