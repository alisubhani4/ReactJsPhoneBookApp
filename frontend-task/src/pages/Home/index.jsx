import { Link } from "react-router-dom";
import MovieNight from "../../assets/images/png/movieNight.png";

import "./index.scss";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="main-text">
        <div className="dark-text">Imagine if</div>
        <div className="gradient-text">Snapchat </div>
        <div className="dark-text section-bottom">had events.</div>
        <div className="summary-text">Easily host and share events with your friends </div>
        <div className="summary-text">across any social media. </div>
      </div>

      <div className="movie-container">
        <img className="movie-img" src={MovieNight} alt="" />
      </div>
      <Link to="/create">
        <div className="create-btn">🎉 Create my event</div>
      </Link>
    </div>
  );
};

export default Home;
