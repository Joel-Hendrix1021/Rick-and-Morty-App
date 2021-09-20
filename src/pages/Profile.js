import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { URL } from "../service";
import "./profile.css";

const Profile = () => {
  const { id } = useParams();
  const { characters } = useFetch(`${URL}/${id}`);

  const episode = useFetch(characters.episode);
  console.log(characters);
  return (
    <div className="container__profile">
      <img src={characters.image} alt="" />
      <div className="profile__description">
        <p className="profile__name">{characters.name}</p>     
        <p>{characters.gender}</p>
        <div className="profile__status">
          <p>{characters.species}</p>
          <p>-</p>
          {characters.status && <p>{characters.status}</p>}
          </div>
        <p className="profile__location">Last known location:</p>
        {characters.location && <p>{characters.location.name}</p>}
        <p className="profile__firstSee">First see in:</p>
        {episode.characters && <p>{episode.characters.name}</p>}
       
      </div>
    </div>
  );
};

export default Profile;
