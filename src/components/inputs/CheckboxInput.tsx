import { Checkbox } from "@components/ui/checkbox";

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
      <Checkbox id="terms1" onCheckedChange={(e) => form.setValue(name, e)} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}

export default CheckboxInput;
