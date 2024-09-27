import { Checkbox } from "@components/ui/checkbox";
import clsx from "clsx";

interface Props {
  label?: string;
  description?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}

function CheckboxInput({ label, description, name, form }: Props) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id="terms1"
        onCheckedChange={(e) => {
          form.clearErrors(name);
          form.setValue(name, e);
        }}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className={clsx(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            form.formState.errors[name]?.message && "text-destructive"
          )}
        >
          {label}
        </label>
        {description && (
          <p
            className={clsx(
              "text-sm text-muted-foreground",
              form.formState.errors[name]?.message && "text-destructive"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default CheckboxInput;
