import "./PlanetImage.css";

export default function PlanetImage({ className, imageSrc, planetName, sect }) {
  return (
    <div className={`PlanetImage ${className}`}>
      <img
        className="PlanetImage__img"
        src={`/assets/${imageSrc}`}
        alt={`${planetName} ${sect}`}
      />
    </div>
  );
}
