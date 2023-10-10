import pokeImg from "./images/bulbasaur.jpg";
import "./App.css";
function Showcase() {
  const favoritePokemon = "Squirtle";
  const pokeCharacteristics = {
    type: "Water",
    move: "Water blast",
  };
  return (
    <div>
      <h1>{favoritePokemon}'s' Showcase Component</h1>
      <img src={pokeImg} alt="bulbasaur img" />
      <h2>
        {favoritePokemon}'s type is{" "}
        <span style={{ backgroundColor: "blue" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{ backgroundColor: "white", color: "blue" }}>
          {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
