// Libraries
import { Link } from "react-router-dom";

const Card = ({
  avatar,
  github_name,
  name,
  bio,
  public_repos,
  followers,
  following,
  github_url,
  message,
  description,
  repo_url,
}) => {
  return (
    <div className="w-5/6 md:w-1/2 m-auto mt-5 text-gray">
      {/* Main names and bio*/}
      <div className="flex flex-col items-center p-2">
        {avatar && (
          <img src={avatar} alt="avatar" className="w-32 h-32 rounded-full" />
        )}
        {name && <p className="text-2xl text-orange font-extrabold">{name}</p>}
        {github_name && (
          <p className="text-2xl text-orange font-medium">{github_name}</p>
        )}
        {bio && <p className="text-lg text-blueMain">{bio}</p>}
      </div>

      {/* Description and Links to the other views */}
      <div className="flex justify-around">
        {description && <p className="text-lg text-blueMain">{description}</p>}

        {github_name ? (
          <p
            className="p-0.5 md:p-1 bg-blueMain hover:bg-blueSoft text-lg hover:text-white font-medium 
            border border-blueMain rounded-md transition duration-300"
          >
            <Link to={`/repositories/${github_name}/${public_repos}`}>
              <span className="md:text-xl md:font-bold">
                {public_repos ? "Repos: " : "Repos"}
              </span>
              {public_repos}
            </Link>
          </p>
        ) : null}

        {followers ? (
          <p
            className="p-0.5 md:p-1 mx-1 bg-blueMain hover:bg-blueSoft text-lg hover:text-white font-medium 
            border border-blueMain rounded-md transition duration-300 transition duration-300"
          >
            <Link to={`/followers/${github_name}/${followers}`}>
              <span className="md:text-xl md:font-bold">Followers: </span>
              {followers}
            </Link>
          </p>
        ) : null}

        {following ? (
          <p className="p-0.5 md:p-1 text-lg text-blueMain font-medium">
            <span className="md:text-xl md:font-bold"> Following: </span>
            {following}
          </p>
        ) : null}
      </div>

      {/* Links to github page */}
      {github_url || repo_url ? (
        <form
          action={github_url ? github_url : repo_url}
          method="get"
          target="_blank"
          className="flex justify-center mt-4"
        >
          <input
            type="submit"
            value={
              github_url ? "Check Profile in GitHub" : "Check Repo in GitHub"
            }
            className="p-1 md:p-2 bg-blueMain hover:bg-blueSoft text-lg md:text-xl text-gray hover:text-white font-medium 
            border border-blueMain rounded-md transition duration-300"
          />
        </form>
      ) : null}

      {/* Error message of Home view*/}
      {message && (
        <p className="text-center text-3xl text-blueSoft font-bold">
          {message}, try again
        </p>
      )}
    </div>
  );
};

export default Card;
