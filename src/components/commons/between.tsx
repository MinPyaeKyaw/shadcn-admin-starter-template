import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  w?: string | number;
  h?: string | number;
  className?: string;
  children: ReactNode;
}

function Between({ w = "full", h = "auto", className, children }: Props) {
  return (
    <div className={clsx(`w-${w} h-${h} flex justify-between`, className)}>
      {children}
    </div>
  );
}

export default Between;
