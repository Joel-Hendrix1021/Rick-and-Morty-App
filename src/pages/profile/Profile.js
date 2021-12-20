import { useParams } from "react-router-dom";
import SkeletonSingle from "../../components/cardCharacter/SkeletonSingle";
import useFetch from "../../hooks/useFetch";
import { URL } from "../../service";
import "./profile.css";
// https://rickandmortyapi.com/api/character/?name=rick

const Profile = () => {
    const { id } = useParams();

    const { characters, isLoading } = useFetch(`${URL}/${id}`);

    return (
        <>
            {
                isLoading
                    ? <SkeletonSingle/>
                    : (
                        <div className="container__profile" key={id}>
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
                            </div>
                        </div>
                    )
            }
        </>
    );
};

export default Profile;
