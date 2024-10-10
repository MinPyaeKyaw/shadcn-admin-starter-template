import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface Props {
  label?: string;
  placeholder?: string;
  description?: string;
  withAsterisk?: boolean;
  name: string;
  form?: any;
}

function PasswordInput({
  label,
  placeholder,
  description,
  withAsterisk = false,
  name,
  form,
}: Props) {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setVisiblePassword((prev) => !prev);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {(label || withAsterisk) && (
            <FormLabel
              htmlFor={form.id + name}
              className="flex items-center gap-1"
            >
              {label}
              {withAsterisk && <span className="mt-1 text-destructive">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative flex items-center justify-between">
              <div
                onClick={togglePasswordVisibility}
                className="cursor-pointer flex items-center justify-center h-full px-4 border-l absolute right-0"
              >
                {visiblePassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </div>
              <Input
                id={form.id + name}
                type={visiblePassword ? "text" : "password"}
                placeholder={placeholder}
                {...field}
              />
            </div>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default PasswordInput;
