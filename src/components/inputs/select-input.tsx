import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

interface Props {
  label?: string;
  placeholder?: string;
  description?: string;
  data: DataType[];
  withAsterisk?: boolean;
  name: string;
  form?: any;
  isLoading?: boolean;
  className?: string;
}

function SelectInput({
  label,
  placeholder,
  withAsterisk = false,
  description,
  data,
  name,
  form,
  isLoading = false,
  className,
}: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {(label || withAsterisk) && (
            <FormLabel className="flex items-center gap-1">
              {label}{" "}
              {withAsterisk && <span className="mt-1 text-destructive">*</span>}
            </FormLabel>
          )}
          <Select
            disabled={isLoading}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger className={className}>
                {isLoading ? (
                  "loading..."
                ) : (
                  <SelectValue placeholder={placeholder} />
                )}
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {data?.map((d) => (
                <SelectItem key={d.value as string} value={d.value as string}>
                  {d.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default SelectInput;
