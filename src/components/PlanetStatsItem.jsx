import "./PlanetStatsItem.css";

export default function PlanetStatsItem({label, value}) {
  return (
    <>
      <li className="PlanetStatsItem">
        <span className="PlanetStatsItem__label">{label}</span>
        <span className="PlanetStatsItem__value">{value}</span>
      </li>
    </>
  );
}
