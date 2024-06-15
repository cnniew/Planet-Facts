import Planet from "../components/Planet";
import data from "/src/data/planetData.json";

export default function Saturn() {
  return (
    <Planet
      className="Saturn"
      planetData={data[5]}
    />
  );
}
