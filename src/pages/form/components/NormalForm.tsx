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

function NormalForm() {
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
    <div className="border rounded-lg p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <TextInput
            label="Enter Something"
            placeholder="Text input"
            name="textInput"
            form={form}
          />

          <TextInput
            label="Enter Something"
            placeholder="Text input"
            description="This is text input with description"
            name="textInputWithDesc"
            form={form}
          />

          <SelectInput
            label="Choose One"
            placeholder="Select input"
            name="selectInput"
            form={form}
          />

          <RadioInput label="Choose One" name="radioInput" form={form} />

          <CheckGroupInput
            label="Choose Some"
            name="checkgroupInput"
            form={form}
          />

          <DateInput
            label="Choose Date"
            placeholder="Date input"
            name="dateInput"
            form={form}
          />

          <PasswordInput
            label="Enter Password"
            placeholder="Password input"
            name="passwordInput"
            form={form}
          />

          <CheckboxInput
            label="Terms & conditions"
            name="checkboxInput"
            description="This is checkbox with description"
            form={form}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default NormalForm;
