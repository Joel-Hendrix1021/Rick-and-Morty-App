import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { URL } from "../service";
import './profile.css'

const Profile = () => {
  const { id } = useParams();
  const { characters } = useFetch(`${URL}/${id}`);

  console.log(characters);
  return (
    <div className="container__profile">
      <img src={characters.image} alt="" />
      <div>
        <p>{characters.name}</p>
        <p>{characters.gender}</p>
        <p>{characters.species}</p>
        <p>{characters.status}</p>
      </div>
    </div>
  );
};

export default Profile;
