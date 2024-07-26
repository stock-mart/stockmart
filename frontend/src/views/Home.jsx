import Footer from "../components/Footer";
import mobileHeroBanner from "../assets/images/stock mart mobile banner.png";
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
        <div className="d-none d-lg-block position-absolute form-desktop">
          <h1 className="text-uppercase pay-text mb-0">pay for your</h1>
          <h1 className="text-uppercase pe-2 success-text mb-2">success</h1>
          <h1 className="join-text">
            Join the stoxCalls Community of successful trader today!
          </h1>
          <div>
            <form className="desktop-form">
              <h2 className="form-heading">Enquiry Form</h2>
              <div className="">
                <input
                  type="text"
                  required
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  required
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone Number"
                />
              </div>
              <div className="">
                <input
                  type="email"
                  required
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div className="d-flex" style={{ gap: "1em" }}>
                <select
                  className="form-select w-50"
                  required
                  aria-label="Default select example"
                >
                  <option selected>Select Service</option>
                  <option value="Stock Market Intraday">
                    Stock Market Intraday
                  </option>
                  <option value="Bank Nifty Futures & Options">
                    Bank Nifty Futures & Options
                  </option>
                  <option value="Stock Futures & Options">
                    Stock Futures & Options
                  </option>
                </select>
                <select
                  className="form-select w-50"
                  aria-label="Default select example"
                  required
                >
                  <option selected>Select Capital Investment</option>
                  <option value="Stock Market Intraday">
                    Stock Market Intraday
                  </option>
                  <option value="Bank Nifty Futures & Options">
                    Bank Nifty Futures & Options
                  </option>
                  <option value="Stock Futures & Options">
                    Stock Futures & Options
                  </option>
                </select>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  required
                />
                <label className="form-check-label w-100" for="gridCheck">
                  <p className="m-0" style={{ fontSize: "0.7em" }}>
                    I Agree to{" "}
                    <span className="text-primary">
                      Disclaimer, Terms & Conditions
                    </span>{" "}
                    By submitting. This form I Authorize company call even if my
                    number is registered in Do Not Call.
                  </p>
                </label>
              </div>
              <div className="mb-0">
                <button type="submit" className="btn btn-dark w-100 py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="position-absolute form-tablet">
          <h1 className="text-uppercase pay-text mb-0">pay for your</h1>
          <h1 className="text-uppercase pe-2 success-text mb-2">success</h1>
          <h1 className="join-text">
            Join the stoxCalls Community of successful trader today!
          </h1>
          <div>
            <form className="desktop-form">
              <h2 className="form-heading">Enquiry Form</h2>
              <div className="">
                <input
                  type="text"
                  required
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="d-flex" style={{ gap: "1em" }}>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone Number"
                />
                <input
                  type="email"
                  required
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div className="d-flex mb-2" style={{ gap: "1em" }}>
                <select
                  className="form-select w-50"
                  required
                  aria-label="Default select example"
                >
                  <option selected>Select Service</option>
                  <option value="Stock Market Intraday">
                    Stock Market Intraday
                  </option>
                  <option value="Bank Nifty Futures & Options">
                    Bank Nifty Futures & Options
                  </option>
                  <option value="Stock Futures & Options">
                    Stock Futures & Options
                  </option>
                </select>
                <select
                  className="form-select w-50"
                  aria-label="Default select example"
                  required
                >
                  <option selected>Select Capital Investment</option>
                  <option value="Stock Market Intraday">
                    Stock Market Intraday
                  </option>
                  <option value="Bank Nifty Futures & Options">
                    Bank Nifty Futures & Options
                  </option>
                  <option value="Stock Futures & Options">
                    Stock Futures & Options
                  </option>
                </select>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  required
                />
                <label className="form-check-label w-100" for="gridCheck">
                  <p className="m-0" style={{ fontSize: "0.7em" }}>
                    I Agree to{" "}
                    <span className="text-primary">
                      Disclaimer, Terms & Conditions
                    </span>{" "}
                    By submitting. This form I Authorize company call even if my
                    number is registered in Do Not Call.
                  </p>
                </label>
              </div>
              <div className="mb-0">
                <button type="submit" className="btn btn-dark w-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mobile-heading position-absolute">
          <h1 className="text-uppercase pay-text mb-0">pay for your</h1>
          <h1 className="text-uppercase pe-2 success-text mb-2">success</h1>
          <h1 className="join-text">
            Join the stoxCalls Community of successful trader today!
          </h1>
        </div>
      </div>
      {/* services*/}
      <div className="container my-5 mt-4">
        <div className="px-3 px-lg-0">
          <h3
            style={{ fontFamily: "Metropolis-Bold" }}
            className="text-uppercase mb-4"
          >
            Our Services
          </h3>
          <div className="service-div d-flex text-center">
            <div className="feature-card">
              <div className="service-img">
                <img className="img-fluid" src={intraday} />
              </div>
              <div className="px-2 pb-3 service-content">
                <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                  STOCK MARKET INTRADAY
                </h5>
                <p className="secondary-text">
                  All our Day Trading calls are the recommendations or best
                  options which are generated from technical & fundamentals data
                  analytics.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="service-img">
                <img className="img-fluid" src={nifty} />
              </div>

              <div className="px-2 pb-3 service-content">
                <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                  BANK NIFTY FUTURES & OPTIONS
                </h5>
                <p className="secondary-text">
                  No. 1 advisory services in bank nifty futures and options.
                  Trade with minimum capital and earn big return from option
                  market.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="service-img">
                <img className="img-fluid" src={stocks} />
              </div>
              <div className="px-2 pb-3 service-content">
                <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                  STOCK FUTURES & OPTIONS
                </h5>
                <p className="secondary-text">
                  With the right F&O tips. you will be able to grow your
                  investment easily. Futures and options are a great way ton
                  increase your money.
                </p>
              </div>
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
            <p className="secondary-text">
              Click on the Subscribe Now to get StoxCalls
            </p>
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
        <div className="d-lg-none my-4 px-3">
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
          <div className="features-div">
            <div className="feature-card px-2 py-3 text-center mb-4">
              <div>
                <img src={risk} className="w-25 mb-3" />
              </div>
              <h5 style={{ fontFamily: "Metropolis-Medium" }}>
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
              <h5 style={{ fontFamily: "Metropolis-Medium" }}>Expert Advice</h5>
              <p>
                Get direct discussion with our analist team for outstanding
                result. Get reserch based stock prediction with guidance.
              </p>
            </div>
            <div className="feature-card px-2 py-3 text-center mb-4">
              <div>
                <img src={support} className="w-25 mb-3" />
              </div>
              <h5 style={{ fontFamily: "Metropolis-Medium" }}>
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
              <h5 style={{ fontFamily: "Metropolis-Medium" }}>
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
                    <h5 style={{ fontFamily: "Metropolis-Medium" }}>
                      Minimum Risk/ More Profit
                    </h5>
                    <p className="secondary-text m-0">
                      Obtaining higher returns in our primary goal. That's why
                      the risk/ reward ration we use to manage capital and risk
                      of loss.
                    </p>
                  </div>
                  <div className="feature-card px-2 py-4 text-center">
                    <div>
                      <img src={support} className="w-25 mb-3" />
                    </div>
                    <h5 style={{ fontFamily: "Metropolis-Medium" }}>
                      Personalized Customer Support
                    </h5>
                    <p className="secondary-text m-0">
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
                    <h5 style={{ fontFamily: "Metropolis-Medium" }}>
                      Expert Advice
                    </h5>
                    <p className="secondary-text m-0">
                      Get direct discussion with our analist team for
                      outstanding result. Get reserch based stock prediction
                      with guidance.
                    </p>
                  </div>
                  <div className="feature-card px-2 py-4 text-center">
                    <div>
                      <img src={tips} className="w-25 mb-3" />
                    </div>
                    <h5 style={{ fontFamily: "Metropolis-Medium" }}>
                      Best Market Tips
                    </h5>
                    <p className="secondary-text m-0">
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
