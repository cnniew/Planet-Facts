import Planet from "../components/Planet";
import data from "/src/data/planetData.json";

export default function Venus() {
  return (
    <Planet
      className="Venus"
      planetData={data[1]}
    />
  );
}
