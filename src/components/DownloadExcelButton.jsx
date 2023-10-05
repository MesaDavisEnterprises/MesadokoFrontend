import React from "react";
import downloadFile from "../utils/downloadFile";
import { downloadExcel } from "../services/ticketService"; // Asegúrate de importar el servicio correcto

const DownloadExcelButton = ({ tickets }) => {
  const handleDownloadExcel = async () => {
    try {
      const response = await downloadExcel(tickets); // Pasa los datos necesarios al servicio
      downloadFile(response, "tickets.xlsx");
    } catch (error) {
      console.error("Error downloading Excel file:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownloadExcel}
      className="flex items-center rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mr-1 h-4 w-4"
      >
        {/* ... (icono de descarga) */}
      </svg>
      Descargar Excel
    </button>
  );
};

export default DownloadExcelButton;
