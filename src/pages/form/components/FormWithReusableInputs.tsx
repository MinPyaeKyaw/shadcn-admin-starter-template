import CheckboxInput from "@components/inputs/CheckboxInput";
import CheckGroupInput from "@components/inputs/CheckGroupInput";
import DateInput from "@components/inputs/DateInput";
import PasswordInput from "@components/inputs/PasswordInput";
import RadioInput from "@components/inputs/RadioInput";
import SelectInput from "@components/inputs/SelectInput";
import TextInput from "@components/inputs/TextInput";
import { Button } from "@components/ui/button";
import { Form } from "@components/ui/form";
import { normalFormSchema } from "@helpers/form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type FormType = {
  textInput: string;
  textInputWithDesc: string;
  selectInput: string;
  checkgroupInput: string[];
  passwordInput: string;
  dateInput: string;
  checkboxInput: boolean;
};

const radioData = [
  { value: "radio one", label: "Radio One" },
  { value: "radio two", label: "Radio Two" },
  { value: "radio three", label: "Radio Three" },
];

const selectData = [
  { value: "select one", label: "Select One" },
  { value: "select two", label: "Select Two" },
  { value: "select three", label: "Select Three" },
];

const checkgpData = [
  { value: "check group one", label: "Check Group One" },
  { value: "check group two", label: "Check Group Two" },
  { value: "check group three", label: "Check Group Three" },
];

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
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
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
              label="Enter Something"
              placeholder="Text input"
              name="textInput"
              withAsterisk
              form={form}
            />

            <SelectInput
              label="Choose One"
              placeholder="Select input"
              name="selectInput"
              data={selectData}
              withAsterisk
              form={form}
            />

            <DateInput
              label="Choose Date"
              placeholder="Date input"
              name="dateInput"
              withAsterisk
              form={form}
            />

            <PasswordInput
              label="Enter Password"
              placeholder="Password input"
              name="passwordInput"
              withAsterisk
              form={form}
            />
          </div>

          <div className="space-y-4">
            <TextInput
              label="Enter Something"
              placeholder="Text input"
              description="This is text input with description"
              name="textInputWithDesc"
              form={form}
            />

            <RadioInput
              label="Choose One"
              name="radioInput"
              data={radioData}
              withAsterisk
              form={form}
            />

            <CheckGroupInput
              label="Choose Some"
              name="checkgroupInput"
              data={checkgpData}
              withAsterisk
              form={form}
            />

            <CheckboxInput
              label="Terms & conditions"
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
