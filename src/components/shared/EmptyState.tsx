import { type ReactNode } from "react";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";

type EmptyStateProps = {
  action?: ReactNode;
  description: string;
  title: string;
};

export function EmptyState({ action, description, title }: EmptyStateProps) {
  return (
    <div className="grid min-h-72 place-items-center border border-cairn-black/10 bg-white px-6 py-12 text-center">
      <div className="max-w-md">
        <Typography as="h2" variant="h2">
          {title}
        </Typography>
        <Typography className="mt-3" variant="muted">
          {description}
        </Typography>
        {action ? <div className="mt-6">{action}</div> : null}
      </div>
    </div>
  );
}

EmptyState.Action = Button;
