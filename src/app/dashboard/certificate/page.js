const page = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full p-3 m-4">
          <h2 className="text-2xl font-semibold mb-4"> Add Certificate Page</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                id="title"
                name="title"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subtitle"
              >
                Subtitle
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                id="subtitle"
                name="subtitle"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="imgLink"
              >
                Image Link
              </label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                id="imgLink"
                name="imgLink"
              />
            </div>
            <div className="text-center">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                type="submit"
              >
                Next Page
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
