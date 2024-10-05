import { useGetAllProductCategories } from "@apis/queries/category";
import SelectInput from "@components/inputs/select-input";

interface Props {
  label?: string;
  placeholder?: string;
  description?: string;
  withAsterisk?: boolean;
  name: string;
  form?: any;
  isLoading?: boolean;
  className?: string;
}

function CategorySelect(props: Props) {
  const { data, isLoading } = useGetAllProductCategories();

  return <SelectInput data={data} isLoading={isLoading} {...props} />;
}

export default CategorySelect;
