import { useState } from "react";
import Modal from "./ModalTopic";
import useTopics from "../../hooks/useTopics";
import ReactPaginate from "react-paginate";

const TopicsList = () => {
  const { topics, deleteTopicState, changeState, setTopic } = useTopics();

  const itemsPerPage = 1; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(0);

  // Ordenar topics por state
  const sortedTopics = [...topics].sort((a, b) => (b.state ? 1 : -1));

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Obtener topics de la página actual

  const pageCount = Math.ceil(sortedTopics.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = sortedTopics.slice(offset, offset + itemsPerPage);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this topic?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTopicState(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleActive = (topic) => {
    changeState(topic);
  };

  const handleEdit = (topic) => {
    setTopic(topic);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      <div className="relative mb-4">
        <input
          type="search"
          id="default-search"
          className="w-full py-2 pl-10 pr-4 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
        <svg
          aria-hidden="true"
          className="absolute w-5 h-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <table className="w-full bg-white">
        <div className="flex justify-center mt-4">
          <ReactPaginate
            previousLabel={"Anterior"}
            nextLabel={"Siguiente"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            activeClassName={"text-white font-bold"}
            onPageChange={handlePageChange}
            containerClassName={"flex justify-center items-center mt-4 mb-4 space-x-2"}
            subContainerClassName={"flex justify-center items-center mt-4 mb-4 space-x-2"}

            pageLinkClassName={
              "page-link bg-white text-blue-500 p-3 hover:bg-blue-100 border rounded-full mx-1"
            }
            previousLinkClassName={
              "page-link bg-white text-blue-500 p-3 hover:bg-blue-100 border rounded-full mx-1"
            }
            nextLinkClassName={
              "page-link bg-white text-blue-500 p-3 hover:bg-blue-100 border rounded-full mx-1"
            }
            // disabledClassName={"disabled"}
          />
        </div>
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              State
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Color
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((topic) => (
            <tr key={topic.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base text-gray-900 font-medium">
                  {topic.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    topic.state
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {topic.state ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold text-white rounded-full text-${topic.color}-800`}
                  style={{ backgroundColor: `${topic.color}` }}
                >
                  {topic.color}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${
                    topic.state ? "mx-2" : "mx-4"
                  }`}
                  onClick={() => handleEdit(topic)}
                >
                  Edit
                </button>
                {topic.state ? (
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                    onClick={() => handleDelete(topic.id)}
                  >
                    Delete
                  </button>
                ) : (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mx-2"
                    onClick={() => handleActive(topic)}
                  >
                    Active
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopicsList;
