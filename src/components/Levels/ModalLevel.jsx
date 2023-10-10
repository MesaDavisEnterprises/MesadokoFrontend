import React from "react";

import { useState } from "react";

import useLevels from "../../hooks/useLevels";
import AlertError from "../alerts/AlertError";

const ModalLevel = ({ lesson }) => {
  const [showModal, setShowModal] = useState(false);
  const { saveLevel } = useLevels();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    const level = {
      name,
      color,
      lessonId: lesson.id,
    };
    await saveLevel(level);
    restartState();
  };

  const restartState = () => {
    setName("");
    setColor("#000000");
    setError("");
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white hover:bg-orange-600 active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none  mr-1 mb-1 ease-linear transition-all duration-100 "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Level
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*body*/}
                <form
                  // onSubmit={handleSubmit}
                  className="max-w-sm mx-auto bg-gray-100 rounded-lg shadow-md p-6 w-full flex flex-col gap-4"
                >
                  {error ? <AlertError error={error} /> : null}
                  <h2 className="text-xl font-semibold mb-4">
                    Create a New Level
                  </h2>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full mt-1 px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-8 h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div className="mb-4"></div>
                </form>

                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                    type="button"
                    onClick={() => restartState()}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-600 text-white hover:bg-orange-400 active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                    type="button"
                    onClick={handleSubmit}
                  >
                    Create
                  </button>
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

export default ModalLevel;
