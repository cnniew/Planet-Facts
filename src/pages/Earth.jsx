import Planet from "../components/Planet";
import data from "/src/data/planetData.json";

export default function Earth() {
  return (
    <Planet
      className="Earth"
      planetData={data[2]}
    />
  );
}
