// interface Props {}

import { Cannabis } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
        <Cannabis className="h-4 w-4 transition-all group-hover:scale-110" />
      </div>
      <div>Starter Template</div>
    </div>
  );
};

export default Logo;
