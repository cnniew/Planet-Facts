import Planet from "../components/Planet";
import data from "/src/data/planetData.json";

export default function Uranus() {
  return (
    <Planet
      className="Uranus"
      planetData={data[6]}
    />
  );
}
