import { useEffect, useState } from "react";
import useWords from "../../hooks/useWords";

const ModalWord = ({ level }) => {
  const [showModal, setShowModal] = useState(false);
  const { saveWord } = useWords();
  const [wordName, setWordName] = useState("");
  const [wordClue, setWordClue] = useState("");
  const [wordLearn, setWordLearn] = useState("");
  const [wordAudio, setWordAudio] = useState("");

  const handleSubmit = async (e) => {
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
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*body*/}
                <form
                  // onSubmit={handleSubmit}
                  className="max-w-sm mx-auto bg-gray-100 rounded-lg shadow-md p-6 w-full flex flex-col gap-4"
                >
                  <h2 className="text-xl font-semibold mb-4">
                    Create a New Word
                  </h2>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Word:
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={wordName}
                      onChange={(e) => setWordName(e.target.value)}
                      className="w-full mt-1 px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Clue:
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={wordClue}
                      onChange={(e) => setWordClue(e.target.value)}
                      className="w-full mt-1 px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Learn:
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={wordLearn}
                      onChange={(e) => setWordLearn(e.target.value)}
                      className="w-full mt-1 px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Audio Path:
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={wordAudio}
                      onChange={(e) => setWordAudio(e.target.value)}
                      className="w-full mt-1 px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4"></div>
                </form>

                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                    type="button"
                    onClick={() => setShowModal(false)}
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

export default ModalWord;
