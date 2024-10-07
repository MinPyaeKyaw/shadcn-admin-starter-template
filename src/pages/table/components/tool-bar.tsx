import Between from "@components/commons/between";
import TextInput from "@components/inputs/text-input";
import CategorySelect from "@components/selects/category-select";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Form } from "@components/ui/form";
// import useReport from "@hooks/useReport";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

interface Props {
  form: any;
}

function Toolbar({ form }: Props) {
  // const { generateExcel } = useReport();

  // const handleGenerateReport = () => {
  //   generateExcel(
  //     [
  //       { hehe: "hello" },
  //       { hehe: "hello1" },
  //       { hehe: "hello2" },
  //       { hehe: "hello3" },
  //     ],
  //     "product-list-report"
  //   );
  // };

  return (
    <Between className="mb-4 items-center">
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

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <Button onClick={handleGenerateReport}>Download Report</Button> */}
    </Between>
  );
}

export default Toolbar;
