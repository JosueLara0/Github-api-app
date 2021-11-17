// Libraries
import { useParams } from "react-router-dom";

// Components
import CardsList from "../Components/Custom/CardsList";

const Followers = () => {
  // Params
  const { user, amount } = useParams();
  const path = "followers";

  return <CardsList user={user} amount={amount} path={path} />;
};

export default Followers;
