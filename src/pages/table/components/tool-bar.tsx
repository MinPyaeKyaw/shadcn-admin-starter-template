import Between from "@components/commons/between";
import TextInput from "@components/inputs/text-input";
import CategorySelect from "@components/selects/category-select";
import { Button } from "@components/ui/button";
import { Form } from "@components/ui/form";
import useReport from "@hooks/useReport";

interface Props {
  form: any;
}

function Toolbar({ form }: Props) {
  const { generateExcel } = useReport();

  const handleGenerateReport = () => {
    generateExcel(
      [
        { hehe: "hello" },
        { hehe: "hello1" },
        { hehe: "hello2" },
        { hehe: "hello3" },
      ],
      "product-list-report"
    );
  };

  return (
    <Between className="mb-4">
      <Form {...form}>
        <form className="flex gap-4">
          <TextInput placeholder="Search Products" name="search" form={form} />

          <CategorySelect
            placeholder="Choose Category"
            name="category"
            className="min-w-[200px]"
            form={form}
          />
        </form>
      </Form>

      <Button onClick={handleGenerateReport}>Download Report</Button>
    </Between>
  );
}

export default Toolbar;
