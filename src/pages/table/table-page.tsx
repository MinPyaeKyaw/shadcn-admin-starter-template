import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
// import { tasks } from "./mock-data/tasks";
import PageTitle from "@components/commons/page-title";
import { useState } from "react";
import { useGetAllProducts } from "@apis/queries/product";

export function Table() {
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const { data, isLoading } = useGetAllProducts();

  console.log(isLoading, data);

  return (
    <div className="w-full">
      <PageTitle
        title="Customizable & Reusable Table Components"
        desc="Easily create dynamic, scalable forms with customizable, reusable
        components. Simplify development with built-in validation,
        accessibility, and flexible styling options for any project."
      />

      <DataTable
        data={data?.data.products}
        columns={columns}
        showPagination={true}
        paginationState={paginationState}
        onPaginationChange={setPaginationState}
        rowCount={5}
        loading={isLoading}
      />
    </div>
  );
}
