// Libraries
import React, { useState, useEffect } from "react";

// Components
import Form from "./Form";
import Card from "../../Components/Custom/Card";
import Loader from "../../Components/Custom/Loader";

const Followers = ({ user, path }) => {
  // States
  const [items, setItems] = useState([]);
  const [itemSearch, setItemSearch] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [followersRender, setFollowersRender] = useState(null);
  const [loader, setLoader] = useState(false);

  // Call the GitHub API to bring the items list
  useEffect(() => {
    const handleFetchData = async () => {
      setLoader(true);
      const API = `https://api.github.com/users/${user}/${path}`;
      const response = await fetch(API);
      const data = await response.json();
      setItems(data);
      setLoader(false);
    };
    handleFetchData();

    path === "followers" ? setFollowersRender(true) : setFollowersRender(false);
  }, [user, path]);

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
        className={`w-5/6 md:w-3/4 m-auto ${
          followersRender ? "flex flex-row flex-wrap" : "text-justify"
        }`}
      >
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
      </div>

      {loader && <Loader />}
    </>
  );
};

export default Followers;
