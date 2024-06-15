import Planet from "../components/Planet";
import data from "/src/data/planetData.json";

export default function Neptune() {
  return (
    <Planet
      className="Neptune"
      planetData={data[7]}
    />
  );
}
