import { Form } from "@components/ui/form";
import Text from "@components/commons/text";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schemas/login-schema";
import TextInput from "@components/inputs/text-input";
import PasswordInput from "@components/inputs/password-input";
import { Button } from "@components/ui/button";

type FormType = {
  username: string;
  password: string;
};

export function Login() {
  const form = useForm<FormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: FormType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border rounded-lg p-4 space-y-4 w-full sm:w-[300px]"
      >
        <Text>Login Here</Text>
        <TextInput
          label="Enter Something"
          placeholder="Text input"
          name="textInput"
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

        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}
