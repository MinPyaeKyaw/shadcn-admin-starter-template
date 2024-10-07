import * as XLSX from "xlsx";

const useReport = () => {
  /**
   *
   * @param data data that you want to export in object array format
   * @param filename filename of your exported file
   */
  const generateExcel = (data: Record<string, unknown>[], filename: string) => {
    // Convert JSON to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Generate the Excel file and trigger a download
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  return { generateExcel };
};

export default useReport;
