import FormWithReusableInputs from "./components/FormWithReusableInputs";
// import PageTitle from "./components/PageTitle";

export function Form() {
  return (
    <div className="grid gap-4 grid-cols-1">
      <FormWithReusableInputs />
    </div>
  );
}
