import { Checkbox } from "@components/ui/checkbox";
import { DataTableColumnHeader } from "@components/data-table/data-table-column-header";
import { DataTableRowActions } from "@components/data-table/data-table-row-actions";

export const columns: any = [
  {
    id: "select",
    header: ({ table }: any) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }: any) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: "id",
    header: ({ column }: any) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }: any) => <div>{row.getValue("id")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: ({ column }: any) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),
    cell: ({ row }: any) => {
      return <div>{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "brand",
    header: ({ column }: any) => (
      <DataTableColumnHeader column={column} title="Brand" />
    ),
    cell: ({ row }: any) => {
      return <div>{row.getValue("brand")}</div>;
    },
    filterFn: (row: any, id: any, value: any) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "availabilityStatus",
    header: ({ column }: any) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }: any) => {
      return <div>{row.getValue("availabilityStatus")}</div>;
    },
    filterFn: (row: any, id: any, value: any) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: () => <DataTableRowActions />,
  },
];
