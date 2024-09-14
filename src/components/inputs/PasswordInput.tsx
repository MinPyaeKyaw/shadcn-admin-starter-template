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
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}

function PasswordInput({ label, placeholder, description, name, form }: Props) {
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
          <FormLabel>{label}</FormLabel>
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
