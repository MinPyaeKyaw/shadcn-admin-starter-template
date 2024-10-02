import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import PageTitle from "@components/commons/page-title";
import { useState } from "react";
import { useGetAllProducts } from "@apis/queries/product";

export function Table() {
  const [paginationState, setPaginationState] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetAllProducts({
    skip: paginationState.pageIndex,
    limit: paginationState.pageSize,
  });

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
        manualPagination={true}
        paginationState={paginationState}
        onPaginationChange={setPaginationState}
        rowCount={data?.data.total}
        loading={isLoading}
      />
    </div>
  );
}
