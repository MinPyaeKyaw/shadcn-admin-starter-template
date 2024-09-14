import NormalForm from "./components/NormalForm";
import PersistForm from "./components/PersistForm";

export function Form() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      <NormalForm />
      <PersistForm />
    </div>
  );
}
