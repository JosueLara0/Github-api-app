// Libraries
import { useParams } from "react-router-dom";

// Components
import CardsList from "../Components/Custom/CardsList";

const Repositories = () => {
  // Params
  const { user, amount } = useParams();
  const path = "repos";

  return <CardsList user={user} amount={amount} path={path} />;
};

export default Repositories;
