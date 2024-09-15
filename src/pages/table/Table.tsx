import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { tasks } from "./data/tasks";

export function Table() {
  return (
    <div>
      <DataTable data={tasks} columns={columns} />
    </div>
  );
}
