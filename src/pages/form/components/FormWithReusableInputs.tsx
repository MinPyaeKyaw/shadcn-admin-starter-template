import { Button } from "@components/ui/button";
import { Form } from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { normalFormSchema } from "../schemas/normal-form-schema";
import { checkgpData, radioData, selectData } from "../mock-data/mock-data";
import CheckboxInput from "@components/inputs/checkbox-input";
import CheckGroupInput from "@components/inputs/checkgroup-Input";
import DateInput from "@components/inputs/date-input";
import PasswordInput from "@components/inputs/password-input";
import RadioInput from "@components/inputs/radio-input";
import SelectInput from "@components/inputs/select-input";
import TextInput from "@components/inputs/text-input";
import TextareaInput from "@components/inputs/textarea-input";
import { toast } from "sonner";

type FormType = {
  textInput: string;
  textInputWithDesc: string;
  selectInput: string;
  checkgroupInput: string[];
  passwordInput: string;
  dateInput: string;
  checkboxInput: boolean;
  textareaInput: string;
};

function FormWithReusableInputs() {
  const form = useForm<FormType>({
    resolver: zodResolver(normalFormSchema),
    defaultValues: {
      textInput: "",
      textInputWithDesc: "",
      selectInput: "",
      checkgroupInput: [],
      passwordInput: "",
      dateInput: "",
      checkboxInput: false,
      textareaInput: "",
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
    toast.success("Successfully submitted!");
  }

  return (
    <div className="border rounded-lg p-4 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4 grid-cols-1 sm:grid-cols-2"
        >
          <div className="space-y-4">
            <TextInput
              label="Text Input"
              placeholder="Text input"
              name="textInput"
              withAsterisk
              form={form}
            />

            <SelectInput
              label="Select Input"
              placeholder="Select input"
              name="selectInput"
              data={selectData}
              withAsterisk
              form={form}
            />

            <DateInput
              label="Date Input"
              placeholder="Date input"
              name="dateInput"
              withAsterisk
              form={form}
            />

            <PasswordInput
              label="Password Input"
              placeholder="Password input"
              name="passwordInput"
              withAsterisk
              form={form}
            />

            <TextareaInput
              label="Textarea Input"
              placeholder="Textarea input"
              name="textareaInput"
              withAsterisk
              form={form}
            />
          </div>

          <div className="space-y-4">
            <TextInput
              label="Text Input With Description"
              placeholder="Text input"
              description="This is text input with description"
              name="textInputWithDesc"
              form={form}
            />

            <RadioInput
              label="Radio Input"
              name="radioInput"
              data={radioData}
              withAsterisk
              form={form}
            />

            <CheckGroupInput
              label="Check Group Input"
              name="checkgroupInput"
              data={checkgpData}
              withAsterisk
              form={form}
            />

            <CheckboxInput
              label="Single Check Input"
              name="checkboxInput"
              description="This is checkbox with description"
              form={form}
            />
          </div>

          <div className="space-x-4">
            <Button type="submit">Submit</Button>

            <Button onClick={() => form.reset()} variant="secondary">
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default FormWithReusableInputs;
