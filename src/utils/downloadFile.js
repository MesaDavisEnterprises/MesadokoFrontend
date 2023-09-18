const downloadFile = (fileData, fileName) => {

  
  const blob = new Blob([fileData]);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download',fileName);
  document.body.appendChild(link);
  link.click();

  // Limpiar recursos después de la descarga
  URL.revokeObjectURL(url);
  document.body.removeChild(link);
};

export default downloadFile;
