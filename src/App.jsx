import "./App.css";
import Faqitems from "./components/FaqItems/Faqitems";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="main">
      <Header />
      <Faqitems
        titleOfQuestion="What is Frontend Mentor, and how will it help me?"
        response=" Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It's suitable for all levels and ideal for portfolio
          building."
        img1="../assets/images/icon-plus.svg"
        img2="../assets/images/icon-minus.svg"
      />
      <Faqitems
        titleOfQuestion="Is Frontend Mentor free?"
        response="Yes, Frontend Mentor offers both free and premium coding challenges,
          with the free option providing access to a range of projects suitable
          for all skill levels."
        img1="../assets/images/icon-plus.svg"
        img2="../assets/images/icon-minus.svg"
      />

      <Faqitems
        titleOfQuestion="Can I use Frontend Mentor projects in my portfolio?"
        response=" Yes, you can use projects completed on Frontend Mentor in your
          portfolio. It's an excellent way to showcase your skills to potential
          employers!"
        img1="../assets/images/icon-plus.svg"
        img2="../assets/images/icon-minus.svg"
      />
      <Faqitems
        titleOfQuestion=" How can I get help if I'm stuck on a Frontend Mentor challenge?"
        response=" The best place to get help is inside Frontend Mentor's Discord
          community. There's a help channel where you can ask questions and seek
          support from other community members."
        img1="../assets/images/icon-plus.svg"
        img2="../assets/images/icon-minus.svg"
      />
    </div>
  );
}

export default App;
