import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const textStyles = cva("font-sans", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
    },
    color: {
      default: "text-inherit",
      primary: "text-primary",
      secondary: "text-secondary",
      danger: "text-red-500",
    },
  },
  defaultVariants: {
    size: "sm",
    weight: "normal",
    color: "default",
  },
});

type TextProps = VariantProps<typeof textStyles> & {
  children: React.ReactNode;
  className?: string;
};

const Text: React.FC<TextProps> = ({
  size,
  weight,
  color,
  className,
  children,
}) => {
  return (
    <p className={clsx(textStyles({ size, weight, color }), className)}>
      {children}
    </p>
  );
};

export default Text;
