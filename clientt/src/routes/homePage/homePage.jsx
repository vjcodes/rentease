import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Time to explore and unlock Your <span>Dream Home</span>!</h1>
          <p>
          Whether you're on the hunt for your ideal space or eager to sell your property at its best value, we've got you covered at every step of the way. Begin your exploration with us today and let's turn your real estate dreams into reality.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>13+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>90</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/city.jpg" alt="real estate" />
      </div>
    </div>
  );
}

export default HomePage;