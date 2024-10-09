import { DataTable } from "@components/data-table/data-table";
import { columns } from "./components/columns";
import PageTitle from "@components/commons/page-title";
import { useState } from "react";
import { useGetAllProducts } from "@apis/queries/product";
import { PaginationState } from "@tanstack/react-table";
import Toolbar from "./components/tool-bar";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FormType = {
  category: string;
  search: string;
};

export function Table() {
  const { t } = useTranslation();

  const toolbarForm = useForm<FormType>({
    defaultValues: {
      category: "",
      search: "",
    },
  });

  const [paginationState, setPaginationState] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isLoading } = useGetAllProducts({
    skip: paginationState.pageIndex * paginationState.pageSize,
    limit: paginationState.pageSize,
    ...toolbarForm.watch(),
  });

  return (
    <div className="w-full">
      <PageTitle title={t("table.pageTitle")} desc={t("table.pageDesc")} />

      <Toolbar form={toolbarForm} />

      <DataTable
        data={data?.data.products}
        columns={columns}
        loading={isLoading}
        rowCount={data?.data.total}
        manualPagination={true}
        paginationState={paginationState}
        onPaginationChange={setPaginationState}
      />
    </div>
  );
}
