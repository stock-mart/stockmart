import Footer from "../components/Footer";
import mobileHeroBanner from "../assets/images/stock mart mobile banner .png";
import desktopHeroBanner from "../assets/images/stock mart desktop banner.png";
import "../assets/css/home.css";

const Home = () => {
  return (
    <div>
      {/* hero banner */}
      <div className="position-relative">
        <picture className="main-banner-img">
          <source media="(max-width:650px)" srcSet={mobileHeroBanner} />
          <source media="(min-width:651px)" srcSet={desktopHeroBanner} />
          <img
            src={desktopHeroBanner}
            alt="hero-banner"
            className="img-fluid"
          />
        </picture>
      </div>
      {/* breaker */}
      <div className="breaker-div">
        <div className="d-flex align-items-center justify-content-center container">
          <div className="text-center">
            <h2>Did we get you excited?</h2>
            <p>Click on the Subscribe Now to get StoxCalls</p>
          </div>
          <div>
            <button className="btn btn-white">Subscribe Now</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
