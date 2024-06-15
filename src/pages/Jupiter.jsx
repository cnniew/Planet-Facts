import Planet from "../components/Planet";
import data from "/src/data/planetData.json";

export default function Jupiter() {
  return (
    <Planet
      className="Jupiter"
      planetData={data[4]}
    />
  );
}
