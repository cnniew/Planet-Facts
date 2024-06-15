import Planet from "../components/Planet";
import data from "/src/data/planetData.json";

export default function Mercury() {
  return (
    <Planet
      className="Mercury"
      planetData={data[0]}
    />
  );
}
