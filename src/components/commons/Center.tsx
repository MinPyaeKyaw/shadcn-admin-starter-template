import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  w?: string | number;
  h?: string | number;
  className?: string;
  children: ReactNode;
}

function Center({ w, h, className, children }: Props) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        w ? `w-${w}` : "w-full",
        h ? `h-${h}` : "h-full",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Center;
