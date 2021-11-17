// Libraries
import { useParams } from "react-router-dom";

// Components
import CardsList from "../Components/Custom/CardsList";

const Repositories = () => {
  // Params
  const { user } = useParams();
  const path = "repos";

  return <CardsList user={user} path={path} />;
};

export default Repositories;
