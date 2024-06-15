import Planet from "../components/Planet";
import data from "/src/data/planetData.json";

export default function Mars() {
  return (
    <Planet
      className="Mars"
      planetData={data[3]}
    />
  );
}
