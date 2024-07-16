import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPets";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  if (results.isLoading) {
    return <h1>Loading...</h1>;
  }

  const pets = results.data.pets[0];
  return (
    <div className="details">
      <div>
        <h1>{pets.name}</h1>
        <h2>
          {pets.animal} - {pets.breed} - {pets.city}, {pets.state}
          <button>Adopt {pets.name}</button>
          <p>{pets.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;
