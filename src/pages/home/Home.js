
import Character from "../../components/character/Character";
import Footer from "../../components/footer/Footer";

const Home = ({handleFavs, likes}) => {
  return (
    <>
      <Character handleFavs={handleFavs} likes={likes}/>
    </>
  );
};

export default Home;
