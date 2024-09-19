import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { tasks } from "./data/tasks";
import PageTitle from "@components/commons/PageTitle";

export function Table() {
  return (
    <div>
      <PageTitle
        title="Customizable & Reusable Table Components"
        desc="Easily create dynamic, scalable forms with customizable, reusable
        components. Simplify development with built-in validation,
        accessibility, and flexible styling options for any project."
      />

      <DataTable data={tasks} columns={columns} />
    </div>
  );
}
