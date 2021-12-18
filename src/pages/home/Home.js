
import Character from "../../components/character/Character";

const Home = ({ handleFavs, likes }) => {
  return (
    <>
      <Character handleFavs={handleFavs} likes={likes}/>
    </>
  );
};

export default Home;
