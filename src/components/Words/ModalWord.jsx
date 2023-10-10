import { useEffect, useState } from "react";
import useWords from "../../hooks/useWords";
import AlertError from "../alerts/AlertError";

const ModalWord = ({ level }) => {
  const [showModal, setShowModal] = useState(false);
  const { saveWord } = useWords();
  const [wordName, setWordName] = useState("");
  const [wordClue, setWordClue] = useState("");
  const [wordLearn, setWordLearn] = useState("");
  const [wordAudio, setWordAudio] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    if (
      !wordName.trim() ||
      !wordClue.trim() ||
      !wordLearn.trim() ||
      !wordAudio.trim()
    ) {
      setError("All fields are required");
      return;
    }

    e.preventDefault();
    const word = {
      wordName,
      wordClue,
      wordLearn,
      wordAudio,
      levelId: level.id,
    };
    await saveWord(word);
    restartState();
  };

  const restartState = () => {
    setWordName("");
    setWordClue("");
    setWordLearn("");
    setWordAudio("");
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
        Add Word
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-md ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-semibold">Create a New Word</h3>
              
                </div>
                {/*body*/}
                <form className="p-6">
                  {error ? <AlertError error={error} /> : null}
                  <div className="mb-4">
                    <label
                      htmlFor="word"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Word:
                    </label>
                    <input
                      type="text"
                      id="word"
                      value={wordName}
                      onChange={(e) => setWordName(e.target.value)}
                      className="w-full mt-1 px-4 py-2 rounded-md border-gray-300 bg-slate-200 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="clue"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Clue:
                    </label>
                    <input
                      type="text"
                      id="clue"
                      value={wordClue}
                      onChange={(e) => setWordClue(e.target.value)}
                      className="w-full mt-1 px-4 py-2 rounded-md border-gray-300 bg-slate-200 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="learn"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Learn:
                    </label>
                    <input
                      type="text"
                      id="learn"
                      value={wordLearn}
                      onChange={(e) => setWordLearn(e.target.value)}
                      className="w-full mt-1 px-4 py-2 rounded-md border-gray-300 bg-slate-200 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="audio"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Audio Path:
                    </label>
                    <input
                      type="text"
                      id="audio"
                      value={wordAudio}
                      onChange={(e) => setWordAudio(e.target.value)}
                      className="w-full mt-1 px-4 py-2 rounded-md border-gray-300 bg-slate-200 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
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
                  <button
                    className="bg-green-600 text-white hover:bg-orange-400 active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded ml-2"
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

export default ModalWord;
