import * as XLSX from "xlsx";

const useReport = () => {
  const generateExcel = () => {
    // Data you want to export
    const data = [
      { name: "John Doe", age: 28, city: "New York" },
      { name: "Jane Doe", age: 22, city: "Los Angeles" },
      { name: "Michael Smith", age: 35, city: "Chicago" },
    ];

    // Convert JSON to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Generate the Excel file and trigger a download
    XLSX.writeFile(workbook, "sample_data.xlsx");
  };

  return { generateExcel };
};

export default useReport;
