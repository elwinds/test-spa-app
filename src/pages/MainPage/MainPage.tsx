import FavoriteItemsList from "../../components/FavoriteItemsList/FavoriteItemsList";
import Header from "../../components/Header/Header";

const MainPage: React.FC = () => {
  return (
    <div>
      <Header />
      <FavoriteItemsList/>
    </div>
  );
};

export default MainPage;
