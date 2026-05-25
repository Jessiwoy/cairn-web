import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <section className="mx-auto min-h-[calc(100vh-4rem)] max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-cairn-copper">
        {eyebrow}
      </p>
      <h1 className="mb-6 max-w-3xl text-4xl font-semibold leading-tight text-cairn-black md:text-6xl">
        {title}
      </h1>
      {children}
    </section>
  );
}
