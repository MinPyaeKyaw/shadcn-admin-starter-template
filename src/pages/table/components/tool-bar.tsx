import Between from "@components/commons/between";
// import Text from "@components/commons/text";
import { Button } from "@components/ui/button";
import useReport from "@hooks/useReport";
// import { FileText } from "lucide-react";

function Toolbar() {
  const { generateExcel } = useReport();

  const handleGenerateReport = () => {
    generateExcel();
  };

  return (
    <Between className="mb-4">
      <div></div>

      <Button onClick={handleGenerateReport}>Download Report</Button>
    </Between>
  );
}

export default Toolbar;
