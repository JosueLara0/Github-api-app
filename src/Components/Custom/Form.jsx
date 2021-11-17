const Form = ({
  handleFetchData,
  handleClearInput,
  handleSearch,
  nameSearch,
}) => {
  return (
    <form
      action=""
      className="w-5/6 md:w-3/4 m-auto mt-10 text-xl"
      onSubmit={(e) =>
        handleFetchData ? handleFetchData(e) : handleClearInput(e)
      }
    >
      <input
        type="text"
        placeholder={handleFetchData ? "Search GitHub user" : "Find one"}
        value={nameSearch}
        className="w-2/3 p-3 border border-blueMain rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blueSoft"
        onChange={({ target }) => handleSearch(target)}
      />

      <input
        type="submit"
        value={handleFetchData ? "Search" : "Clear All"}
        className="w-1/3 p-3 bg-blueMain hover:bg-blueSoft text-gray hover:text-white font-medium border border-blueMain rounded-r-lg
          transition duration-300"
      />
    </form>
  );
};

export default Form;
