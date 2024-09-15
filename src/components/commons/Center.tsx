import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  w?: string | number;
  h?: string | number;
  children: ReactNode;
}

function Center({ w, h, children }: Props) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        w ? `w-${w}` : "w-full",
        h ? `h-${h}` : "h-full"
      )}
    >
      {children}
    </div>
  );
}

export default Center;
