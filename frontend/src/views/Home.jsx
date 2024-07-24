import Footer from "../components/Footer";
import mobileHeroBanner from "../assets/images/stock mart mobile banner .png";
import desktopHeroBanner from "../assets/images/stock mart desktop banner.png";
import "../assets/css/home.css";
import support from "../assets/images/support.png";
import advise from "../assets/images/advise.png";
import risk from "../assets/images/risk.png";
import tips from "../assets/images/tips.png";
import intraday from "../assets/images/intraday.png";
import nifty from "../assets/images/nifty.png";
import stocks from "../assets/images/stock.png";

const Home = () => {
  return (
    <div className="home-page">
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
      {/* services*/}
      <div className="container my-5">
        <h3
          style={{ fontFamily: "Metropolis-Bold" }}
          className="text-uppercase mb-4"
        >
          Our Services
        </h3>
        <div className="service-div d-flex text-center">
          <div className="feature-card">
            <img className="img-fluid mb-1" src={intraday} />
            <div className="px-2 py-3">
              <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                Minimum Risk/ More Profit
              </h5>
              <p>
                Obtaining higher returns in our primary goal. That's why the
                risk/ reward ration we use to manage capital and risk of loss.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <img className="img-fluid mb-1" src={nifty} />
            <div className="px-2 py-3">
              <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                Minimum Risk/ More Profit
              </h5>
              <p>
                Obtaining higher returns in our primary goal. That's why the
                risk/ reward ration we use to manage capital and risk of loss.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <img className="img-fluid mb-1" src={stocks} />
            <div className="px-2 py-3">
              <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                Minimum Risk/ More Profit
              </h5>
              <p>
                Obtaining higher returns in our primary goal. That's why the
                risk/ reward ration we use to manage capital and risk of loss.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* breaker */}
      <div className="breaker-div px-3 py-4 p-lg-4">
        <div className="d-flex align-items-center justify-content-center container flex-column flex-lg-row">
          <div className="text-center">
            <h1 style={{ fontFamily: "Metropolis-Bold" }}>
              Did we get you excited?
            </h1>
            <p>Click on the Subscribe Now to get StoxCalls</p>
          </div>
          <div>
            <button
              className="btn btn-light px-5 text-uppercase mb-2 mb-lg-0"
              style={{ color: "#004dac", fontFamily: "Metropolis-Bold" }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      {/* features */}
      <div className="container">
        <div className="d-lg-none my-4">
          <h3
            style={{ fontFamily: "Metropolis-Bold" }}
            className="text-uppercase"
          >
            Our Features
          </h3>
          <p style={{ fontFamily: "Metropolis-Bold" }}>
            We strogly syggest an effective intraday Trading Stragely Not Just
            Intraday Tips For Intraday Trading.
          </p>
          <p>
            Are you looking for the best smart tips providing compony in india?
            Then your search ends here because we have been recognized as one of
            the most outstanding choice for accurate tips provider in india.
          </p>
          <div className="px-3 features-div">
            <div className="feature-card px-2 py-3 text-center mb-4">
              <div>
                <img src={risk} className="w-25 mb-3" />
              </div>
              <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                Minimum Risk/ More Profit
              </h5>
              <p>
                Obtaining higher returns in our primary goal. That's why the
                risk/ reward ration we use to manage capital and risk of loss.
              </p>
            </div>
            <div className="feature-card px-2 py-3 text-center mb-4">
              <div>
                <img src={advise} className="w-25 mb-3" />
              </div>
              <h5 style={{ fontFamily: "Metropolis-Bold" }}>Expert Advice</h5>
              <p>
                Get direct discussion with our analist team for outstanding
                result. Get reserch based stock prediction with guidance.
              </p>
            </div>
            <div className="feature-card px-2 py-3 text-center mb-4">
              <div>
                <img src={support} className="w-25 mb-3" />
              </div>
              <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                Personalized Customer Support
              </h5>
              <p>
                Get proper Follow-ups and News information, instant market
                support and resistance level.
              </p>
            </div>
            <div className="feature-card px-2 py-3 text-center mb-4">
              <div>
                <img src={tips} className="w-25 mb-3" />
              </div>
              <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                Best Market Tips
              </h5>
              <p>
                Get religibla & accurate stock market trading tips with best
                research and telephonic support in india.
              </p>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block my-5">
          <div className="d-flex align-items-center">
            <div style={{ width: "60%" }}>
              <div className="feature-grid">
                <div className="column column-1">
                  <div className="feature-card px-2 py-4 text-center">
                    <div>
                      <img src={risk} className="w-25 mb-3" />
                    </div>
                    <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                      Minimum Risk/ More Profit
                    </h5>
                    <p>
                      Obtaining higher returns in our primary goal. That's why
                      the risk/ reward ration we use to manage capital and risk
                      of loss.
                    </p>
                  </div>
                  <div className="feature-card px-2 py-4 text-center">
                    <div>
                      <img src={support} className="w-25 mb-3" />
                    </div>
                    <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                      Personalized Customer Support
                    </h5>
                    <p>
                      Get proper Follow-ups and News information, instant market
                      support and resistance level.
                    </p>
                  </div>
                </div>
                <div className="column">
                  <div className="feature-card px-2 py-4 text-center">
                    <div>
                      <img src={advise} className="w-25 mb-3" />
                    </div>
                    <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                      Expert Advice
                    </h5>
                    <p>
                      Get direct discussion with our analist team for
                      outstanding result. Get reserch based stock prediction
                      with guidance.
                    </p>
                  </div>
                  <div className="feature-card px-2 py-4 text-center">
                    <div>
                      <img src={tips} className="w-25 mb-3" />
                    </div>
                    <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                      Best Market Tips
                    </h5>
                    <p>
                      Get religibla & accurate stock market trading tips with
                      best research and telephonic support in india.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "40%" }}>
              <h3
                style={{ fontFamily: "Metropolis-Bold" }}
                className="text-uppercase"
              >
                Our Features
              </h3>
              <p style={{ fontFamily: "Metropolis-Bold" }}>
                We strogly syggest an effective intraday Trading Stragely Not
                Just Intraday Tips For Intraday Trading.
              </p>
              <p>
                Are you looking for the best smart tips providing compony in
                india? Then your search ends here because we have been
                recognized as one of the most outstanding choice for accurate
                tips provider in india.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
