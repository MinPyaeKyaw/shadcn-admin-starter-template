import { Skeleton } from "@components/ui/skeleton";
import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

interface Props<TData> {
  table: Table<TData>;
  rowCount: number;
}

function DataTableLoader<TData>({ table, rowCount }: Props<TData>) {
  const rowCountNumber = new Array(rowCount).fill("");

  return (
    <div className="rounded-md border">
      <ShadcnTable>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {rowCountNumber.map((_, i) => (
            <TableRow key={i}>
              {table.getAllColumns().map((_, i) => (
                <TableCell key={i} className="h-12">
                  <Skeleton className="h-4 w-[100px]" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </ShadcnTable>
    </div>
  );
}

export default DataTableLoader;
