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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}

function SelectInput({
  label,
  placeholder,
  withAsterisk = false,
  description,
  data,
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
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {data.map((d) => (
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
    // <Select>
    //   <SelectTrigger className="w-full">
    //     <SelectValue placeholder="Theme" />
    //   </SelectTrigger>
    //   <SelectContent>
    //     <SelectItem value="light">Light</SelectItem>
    //     <SelectItem value="dark">Dark</SelectItem>
    //     <SelectItem value="system">System</SelectItem>
    //   </SelectContent>
    // </Select>
  );
}

export default SelectInput;