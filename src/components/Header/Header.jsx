import iconStar from "../../../assets/images/icon-star.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={iconStar} alt="stars" />
      <h1> FAQs</h1>
    </header>
  );
}
