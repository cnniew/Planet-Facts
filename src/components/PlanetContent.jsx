import "./PlanetContent.css";

export default function PlanetContent({ className, name, body, source }) {
  return (
    <section className={`PlanetContent ${className}`}>
      <h1 className="PlanetContent__name">{name}</h1>
      <p className="PlanetContent__body">{body}</p>
      <p className="PlanetContent__source">
        Source: <a href={source}>Wikipedia</a>
        <img
          className="PlanetContent__source-icon"
          src="/assets/icon-source.svg"
          alt="wiki source icon"
        />
      </p>
    </section>
  );
}
