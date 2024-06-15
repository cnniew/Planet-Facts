import PlanetStatsItem from "./PlanetStatsItem";
import "./PlanetStats.css";

export default function PlanetStats({ className, planetStats }) {  
  return (
    <ul className={`PlanetStats ${className}`}>
      {planetStats.map((p, i) => {
        return <PlanetStatsItem {...p} key={i}/>;
      })}
    </ul>
  );
}
