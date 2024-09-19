import PageTitle from "@components/commons/PageTitle";
import FormWithReusableInputs from "./components/FormWithReusableInputs";

export function Form() {
  return (
    <div className="grid gap-4 grid-cols-1">
      <PageTitle
        title="Customizable & Reusable Form Components"
        desc="Easily create dynamic, scalable forms with customizable, reusable
        components. Simplify development with built-in validation,
        accessibility, and flexible styling options for any project."
      />

      <FormWithReusableInputs />
    </div>
  );
}
