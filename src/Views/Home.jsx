// Libraries
import React, { useState, useEffect } from "react";

// Components
import Form from "../Components/Custom/Form";
import Card from "../Components/Custom/Card";
import Loader from "../Components/Custom/Loader";

const Home = () => {
  // States
  const [nameSearch, setNameSearch] = useState("");
  const [gitProfile, setGitProfile] = useState(null);
  const [loader, setLoader] = useState(false);

  // Call the GitHub API when the page is loaded
  useEffect(() => {
    const handleFetchData = async () => {
      const API = `https://api.github.com/users/danielmezam`;
      const response = await fetch(API);
      const data = await response.json();
      setGitProfile(data);
    };
    handleFetchData();
  }, []);

  // Call the GitHub API with the user input
  const handleFetchData = async (e) => {
    e.preventDefault();
    setGitProfile(null);
    setLoader(true);
    const API = `https://api.github.com/users/${nameSearch}`;
    const response = await fetch(API);
    const data = await response.json();
    setGitProfile(data);
    setNameSearch("");
    setLoader(false);
  };

  // Control the name used for the GitHub API call
  const handleSearch = ({ value }) => {
    setNameSearch(value);
  };

  return (
    <>
      <Form
        handleFetchData={handleFetchData}
        handleSearch={handleSearch}
        nameSearch={nameSearch}
      />

      <>
        {gitProfile && (
          <Card
            avatar={gitProfile.avatar_url}
            name={gitProfile.name}
            github_name={gitProfile.login}
            public_repos={gitProfile.public_repos}
            followers={gitProfile.followers}
            following={gitProfile.following}
            github_url={gitProfile.html_url}
            message={gitProfile.message ? gitProfile.message : null}
            key={gitProfile.id}
          />
        )}

        {loader && <Loader />}
      </>
    </>
  );
};

export default Home;
