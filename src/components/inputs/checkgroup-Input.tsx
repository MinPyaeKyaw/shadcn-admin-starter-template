import { Checkbox } from "@components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";

interface Props {
  label?: string;
  description?: string;
  withAsterisk?: boolean;
  data: DataType[];
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}

function CheckGroupInput({
  label,
  description,
  name,
  data,
  withAsterisk = false,
  form,
}: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="flex items-center gap-1">
              {label}{" "}
              {withAsterisk && <span className="mt-1 text-destructive">*</span>}
            </FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          {data.map((d) => (
            <FormField
              key={d.value as string}
              control={form.control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={d.value as string}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(d.value as string)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...(field.value || []), d.value])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== d.value
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{d.label}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CheckGroupInput;
