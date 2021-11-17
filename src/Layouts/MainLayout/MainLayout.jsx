// Components
import Header from "../../Components/Custom/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
