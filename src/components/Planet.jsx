import { useState } from "react";
import SectionButton from "./SectionButton";
import PlanetImage from "../components/PlanetImage";
import PlanetContent from "../components/PlanetContent";
import PlanetStats from "../components/PlanetStats";
import "./Planet.css";

export default function Planet({ className, planetData }) {
  const [section, setSection] = useState("overview");
  const [imageSrc, setImageSource] = useState("planet");

  const sectionChange = (contentData, imageData) => {
    setSection(contentData);
    setImageSource(imageData);
  };

  return (
    <main className={`Planet ${className}`}>
      <nav className="Planet__sectionNav">
        <SectionButton
          onClick={() => sectionChange("overview", "planet")}
          num="01"
          label="Overview"
        />
        <SectionButton
          onClick={() => sectionChange("structure", "internal")}
          num="02"
          label="Internal Structure"
        />
        <SectionButton
          onClick={() => sectionChange("geology", "geology")}
          num="03"
          label="Surface Geology"
        />
      </nav>

      <PlanetImage
        className="Planet__image"
        imageSrc={planetData.images[imageSrc]}
        planetName={planetData.name}
        sect={imageSrc}
      />
      <PlanetContent
        className="Planet__content"
        name={planetData.name}
        body={planetData[section].content}
        source={planetData[section].source}
      />
      <PlanetStats
        className="Planet__stats"
        planetStats={[
          planetData.rotation,
          planetData.revolution,
          planetData.radius,
          planetData.temperature,
        ]}
      />
    </main>
  );
}
