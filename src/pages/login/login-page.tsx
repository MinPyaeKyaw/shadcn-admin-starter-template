import { Form } from "@components/ui/form";
import { toast } from "sonner";
import Text from "@components/commons/text";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schemas/login-schema";
import TextInput from "@components/inputs/text-input";
import PasswordInput from "@components/inputs/password-input";
import { Button } from "@components/ui/button";
import useAuthOperations from "@hooks/use-auth-operations";
import { ADMIN } from "@configs/vars";
import { useTranslation } from "react-i18next";

type FormType = {
  username: string;
  password: string;
};

export function Login() {
  const { login } = useAuthOperations();
  const { t } = useTranslation();
  const form = useForm<FormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: FormType) {
    if (
      ADMIN.username === values.username &&
      ADMIN.password === values.password
    ) {
      login(values);
    } else {
      toast.error("Wrong username or password");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border rounded-lg p-4 space-y-4 w-full sm:w-[400px]"
      >
        <div>
          <Text size="xxl">{t("login.loginHere")}</Text>
          <Text className="text-muted-foreground">
            {`${t("login.username")} - admin | ${t(
              "login.password"
            )} - password`}
          </Text>
        </div>

        <TextInput
          label={t("login.username")}
          placeholder={t("login.enterUsername")}
          name="username"
          withAsterisk
          form={form}
        />

        <PasswordInput
          label={t("login.password")}
          placeholder={t("login.enterPassword")}
          name="password"
          withAsterisk
          form={form}
        />

        <Button type="submit" fullWidth>
          {t("login.login")}
        </Button>
      </form>
    </Form>
  );
}
