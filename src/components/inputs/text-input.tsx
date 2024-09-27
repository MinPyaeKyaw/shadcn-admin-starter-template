import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";

interface Props {
  label?: string;
  placeholder?: string;
  description?: string;
  withAsterisk?: boolean;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}

function TextInput({
  label,
  placeholder,
  description,
  withAsterisk = false,
  name,
  form,
}: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-1">
            {label}{" "}
            {withAsterisk && <span className="mt-1 text-destructive">*</span>}
          </FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextInput;
