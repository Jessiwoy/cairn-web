import { type ComponentType, type SVGProps } from "react";

import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement> & {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export function Icon({ className, icon: IconComponent, ...props }: IconProps) {
  return (
    <IconComponent
      aria-hidden="true"
      className={cn("h-5 w-5 shrink-0", className)}
      focusable="false"
      {...props}
    />
  );
}
