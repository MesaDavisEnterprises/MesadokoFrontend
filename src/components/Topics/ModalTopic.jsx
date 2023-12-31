import { useState } from "react";

import useTopics from "../../hooks/useTopics";
import AlertError from "../alerts/AlertError";

const Modal = ({ handleCreate }) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000000");
  const { topic, setTopic, updateTopicState } = useTopics();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    const topic = {
      name,
      color,
    };
    await handleCreate(topic);
    restartState();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const topicUpdate = {
      ...topic,
      name,
      color,
    };

    await updateTopicState(topicUpdate);
    restartState();
  };
  const restartState = () => {
    setName("");
    setColor("#000000");
    setError("");
    setTopic(null);
    setShowModal(false);
  };

  return (
    <>
    <button
      type="button"
      onClick={() => setShowModal(true)}
      className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-circle-plus"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M9 12l6 0" />
        <path d="M12 9l0 6" />
      </svg>
      {topic ? "Edit Topic" : "Add Topic"}
    </button>
    {showModal || topic ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-2xl font-semibold">{topic ? "Edit Topic" : "Add Topic"}</h3>
              
              </div>
              {/*body*/}
              <form className="p-6">
                {error ? <AlertError error={error} /> : null}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name || topic?.name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-1 px-4 py-2 rounded-md border-gray-300 bg-slate-200 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="color"
                    className="text-sm font-medium text-gray-700 mr-2"
                  >
                    Color:
                  </label>
                  <input
                    type="color"
                    id="color"
                    value={color || topic?.color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-8 h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
  
                <div className="mb-4"></div>
              </form>
  
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  className="text-white bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded"
                  type="button"
                  onClick={() => restartState()}
                >
                  Cancel
                </button>
                {topic ? (
                  <button
                    className="bg-green-600 text-white hover:bg-orange-400 active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded ml-2"
                    type="button"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    className="bg-green-600 text-white hover:bg-orange-400 active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded ml-2"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Create
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </>
  
  );
};

export default Modal;
