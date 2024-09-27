import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group";

interface Props {
  label?: string;
  name: string;
  withAsterisk?: boolean;
  data: DataType[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}

function RadioInput({ label, name, data, withAsterisk = false, form }: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel className="flex items-center gap-1">
            {label}{" "}
            {withAsterisk && <span className="mt-1 text-destructive">*</span>}
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {data.map((d) => (
                <FormItem
                  key={d.value as string}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={d.value as string} />
                  </FormControl>
                  <FormLabel className="font-normal">{d.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default RadioInput;
