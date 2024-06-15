import "./SectionButton.css";

export default function SectionButton({ onClick, num, label }) {
  return (
    <button
      className="SectionButton"
      onClick={onClick}
    >
      <span className="SectionButton__num">{num}</span>
      {label}
    </button>
  );
}
