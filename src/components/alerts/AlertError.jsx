import React from "react";

const AlertError = ({ error }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md shadow-md mb-4">
      <div className="flex items-center">
        <div>
          <p className="text-sm font-semibold">Error</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default AlertError;
