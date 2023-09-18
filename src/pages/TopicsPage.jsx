import { useState } from "react";
import TopicsList from "../components/Topics/TopicsList";
import Modal from "../components/Topics/ModalTopic";

import { downloadExcel, importTopics } from "../services/TopicService";
import downloadFile from "../utils/downloadFile.js";
import useTopics from "../hooks/useTopics";

const TopicsPage = () => {
  const [file, setFile] = useState(null);
  const { topics, saveTopic, importExcel } = useTopics();

  const handleCreateTopic = async (topic) => {
    await saveTopic(topic);
  };

  const handleDownloadExcel = async () => {
    const response = await downloadExcel();

    downloadFile(response, "topics.xlsx");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleImportExcel = async () => {
    try {
      await importExcel(file);
      setFile(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col mt-44 items-center">
          <h1 className="text-3xl font-bold text-gray-900">Topics</h1>
        <div className="flex flex-row justify-between w-10/12 mb-10 mx-auto">
          <div>
            <Modal handleCreate={handleCreateTopic} />
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={handleDownloadExcel}
              className="flex items-center rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-1 h-4 w-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                  clip-rule="evenodd"
                />
              </svg>
              Descargar Excel
            </button>
            <div className="flex flex-row gap-4">
              <input
                type="file"
                id="file"
                accept=".xlsx,.xls"
                name="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-500 file:text-white
                hover:file:bg-blue-600"
              />
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={handleImportExcel}
                className="inline-block rounded-full bg-primary p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-cloud-upload"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#3B82F6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                  <path d="M9 15l3 -3l3 3" />
                  <path d="M12 12l0 9" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <TopicsList />
      </div>
    </>
  );
};

export default TopicsPage;
