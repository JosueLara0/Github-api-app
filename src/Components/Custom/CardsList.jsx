// Libraries
import React, { useState, useEffect } from "react";

// Components
import Form from "./Form";
import Card from "../../Components/Custom/Card";
import Loader from "../../Components/Custom/Loader";

const Followers = ({ user, amount, path }) => {
  // States
  const [items, setItems] = useState([]);
  const [itemSearch, setItemSearch] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [followersRender, setFollowersRender] = useState(null);
  const [loader, setLoader] = useState(false);

  const [page, setPage] = useState(1);
  const [controlAmount, setControlAmount] = useState(null);

  // Set initial states with props
  useEffect(() => {
    setControlAmount(amount);
    path === "followers" ? setFollowersRender(true) : setFollowersRender(false);
  }, [path, amount]);

  // Call the GitHub API to bring the items list
  useEffect(() => {
    const handleFetchData = async () => {
      setLoader(true);
      const API = `https://api.github.com/users/${user}/${path}?per_page=100&page=${page}`;
      const response = await fetch(API);
      const data = await response.json();
      setItems(data);
      setLoader(false);
    };
    handleFetchData();
  }, [user, path, page]);

  // Control the next page button
  const handleNextPage = (e) => {
    e.preventDefault();
    if (controlAmount > 100) {
      handleClearInput(e);
      setControlAmount((prevState) => prevState - 100);
      setPage((prevState) => prevState + 1);
    }
  };

  // Control the previous page button
  const handlePreviousPage = (e) => {
    e.preventDefault();
    if (page > 1) {
      handleClearInput(e);
      setControlAmount((prevState) => prevState + 100);
      setPage((prevState) => prevState - 1);
    }
  };

  // Control the name used for the item search
  const handleSearch = ({ value }) => {
    setNameSearch(value);
    if (followersRender) {
      setItemSearch(
        items.filter((item) =>
          item.login.toLowerCase().includes(nameSearch.toLowerCase())
        )
      );
    } else {
      setItemSearch(
        items.filter((item) =>
          item.name.toLowerCase().includes(nameSearch.toLowerCase())
        )
      );
    }
  };

  // Clear the item input search
  const handleClearInput = (e) => {
    e.preventDefault();
    setItemSearch([]);
    setNameSearch("");
  };

  return (
    <>
      <h2 className="mt-5 text-center text-2xl text-orange font-bold">
        {user} {followersRender ? "Followers" : "Repositories"}
      </h2>

      <Form
        handleClearInput={handleClearInput}
        handleSearch={handleSearch}
        nameSearch={nameSearch}
      />

      <div
        className={`flex m-auto mt-2 w-3/4 md:w-3/4 ${
          page > 1 ? "justify-between" : "justify-end"
        }`}
      >
        {page > 1 && (
          <button
            className="p-0.5 bg-orange hover:bg-blueSoft text-lg md:text-xl text-gray hover:text-white 
          font-medium border border-blueMain rounded-md transition duration-300"
            onClick={(e) => handlePreviousPage(e)}
          >
            See Previous
          </button>
        )}

        {controlAmount > 100 && (
          <button
            className="p-0.5 bg-orange hover:bg-blueSoft text-lg md:text-xl text-gray hover:text-white 
          font-medium border border-blueMain rounded-md transition duration-300"
            onClick={(e) => handleNextPage(e)}
          >
            See More
          </button>
        )}
      </div>

      <div
        className={`w-5/6 md:w-3/4 m-auto ${
          followersRender ? "flex flex-row flex-wrap" : "text-justify"
        }`}
      >
        {/* All items*/}
        {items.length > 0 &&
          nameSearch.length === 0 &&
          items.map((item) => (
            <Card
              // Followers elements
              avatar={followersRender ? item.avatar_url : null}
              github_name={followersRender ? item.login : null}
              github_url={followersRender ? item.html_url : null}
              // Repositories elements
              name={!followersRender ? item.name : null}
              description={!followersRender ? item.description : null}
              repo_url={!followersRender ? item.html_url : null}
              key={item.id}
            />
          ))}

        {/* Item Search */}
        {itemSearch.length > 0 &&
          nameSearch.length > 0 &&
          itemSearch.map((item) => (
            <Card
              // Followers elements
              avatar={followersRender ? item.avatar_url : null}
              github_name={followersRender ? item.login : null}
              github_url={followersRender ? item.html_url : null}
              // Repositories elements
              name={!followersRender ? item.name : null}
              description={!followersRender ? item.description : null}
              repo_url={!followersRender ? item.html_url : null}
              key={item.id}
            />
          ))}

        {itemSearch.length === 0 && nameSearch.length > 0 && (
          <p className="text-center text-3xl text-blueSoft font-bold mt-10">
            Not Found
          </p>
        )}
      </div>

      {loader && <Loader />}
    </>
  );
};

export default Followers;
