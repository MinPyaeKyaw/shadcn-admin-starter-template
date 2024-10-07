import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Textarea } from "@components/ui/textarea";

interface Props {
  label?: string;
  placeholder?: string;
  description?: string;
  withAsterisk?: boolean;
  name: string;
  form?: any;
}

function TextareaInput({
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
      render={({ field }) => {
        return (
          <FormItem>
            {(label || withAsterisk) && (
              <FormLabel className="flex items-center gap-1">
                {label}{" "}
                {withAsterisk && (
                  <span className="mt-1 text-destructive">*</span>
                )}
              </FormLabel>
            )}
            <FormControl>
              <Textarea
                placeholder={placeholder}
                className="resize-none"
                {...field}
              />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default TextareaInput;
