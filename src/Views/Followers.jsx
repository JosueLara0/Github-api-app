// Libraries
import { useParams } from "react-router-dom";

// Components
import CardsList from "../Components/Custom/CardsList";

const Followers = () => {
  // Params
  const { user } = useParams();
  const path = "followers";

  return <CardsList user={user} path={path} />;
};

export default Followers;
