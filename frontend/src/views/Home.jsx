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
import { useEffect, useState } from "react";
import Navabar from "../components/Navabar";
import WhatsAppBot from "../components/WhatsAppBot";
import axios from "axios";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        const timer = setTimeout(() => {
          setShow(true);
        }, 5000);
        return () => clearTimeout(timer);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [capitalInvestment, setCapitalInvestment] = useState("");

  const submitLead = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const lead = { name, email, phoneNumber, service, capitalInvestment };
    const { data } = await axios.post(
      "https://stockmart-divy-dodejas-projects.vercel.app/api/v1/form",
      lead,
      config
    );
    if (data) {
      handleClose();
      alert("Details Submitted Succesfully!");
    }
  };
  return (
    <>
      <Navabar />
      <WhatsAppBot />
      <div className="home-page">
        <div
          className={`modal fade ${show ? "show" : ""}`}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden={!show}
          style={{
            display: show ? "block" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-body">
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn-close "
                    style={{ height: "0.7em", width: "0.7em" }}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                  ></button>
                </div>
                <form className="p-2 pt-0 popup-form" onSubmit={submitLead}>
                  <h2 className="form-heading">Enquiry Form</h2>
                  <div className="mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      required
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setService(e.target.value)}
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
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setCapitalInvestment(e.target.value)}
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
                    <label
                      className="form-check-label w-100"
                      htmlFor="gridCheck"
                    >
                      <p className="mb-3" style={{ fontSize: "0.7em" }}>
                        I Agree to{" "}
                        <span className="text-primary">
                          Disclaimer, Terms & Conditions
                        </span>{" "}
                        By submitting. This form I Authorize company call even
                        if my number is registered in Do Not Call.
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
              {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
            </div>
          </div>
        </div>

        {/* Modal backdrop */}
        {/* {show && <div className="modal-backdrop fade show" onClick={handleClose}></div>} */}
        {/* hero banner */}
        <div className="position-relative hero-div">
          <picture className="main-banner-img">
            <source media="(max-width:650px)" srcSet={mobileHeroBanner} />
            <source media="(min-width:651px)" srcSet={desktopHeroBanner} />
            <img src={desktopHeroBanner} alt="hero-banner" className="w-100" />
          </picture>
          <div className="d-none d-lg-block position-absolute form-desktop">
            <h1 className="text-uppercase pay-text mb-0">pay for your</h1>
            <h1 className="text-uppercase pe-2 success-text mb-2">success</h1>
            <h1 className="join-text">
              Join the stoxCalls Community of successful trader today!
            </h1>
            <div>
              <form className="desktop-form" onSubmit={submitLead}>
                <h2 className="form-heading">Enquiry Form</h2>
                <div className="">
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    required
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="d-flex" style={{ gap: "1em" }}>
                  <select
                    className="form-select w-50"
                    onChange={(e) => setService(e.target.value)}
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
                    onChange={(e) => setCapitalInvestment(e.target.value)}
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
                  <label className="form-check-label w-100" htmlFor="gridCheck">
                    <p className="m-0" style={{ fontSize: "0.7em" }}>
                      I Agree to{" "}
                      <span className="text-primary">
                        Disclaimer, Terms & Conditions
                      </span>{" "}
                      By submitting. This form I Authorize company call even if
                      my number is registered in Do Not Call.
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
              <form className="desktop-form" onSubmit={submitLead}>
                <h2 className="form-heading">Enquiry Form</h2>
                <div className="">
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="d-flex" style={{ gap: "1em" }}>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <input
                    type="email"
                    required
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="d-flex mb-2" style={{ gap: "1em" }}>
                  <select
                    className="form-select w-50"
                    aria-label="Default select example"
                    onChange={(e) => setService(e.target.value)}
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
                    onChange={(e) => setCapitalInvestment(e.target.value)}
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
                  <label className="form-check-label w-100" htmlFor="gridCheck">
                    <p className="m-0" style={{ fontSize: "0.7em" }}>
                      I Agree to{" "}
                      <span className="text-primary">
                        Disclaimer, Terms & Conditions
                      </span>{" "}
                      By submitting. This form I Authorize company call even if
                      my number is registered in Do Not Call.
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
          <div className="sticker-heading p-2 p-lg-3" onClick={handleShow}>
            <h1 className="text-uppercase">Start your trading Now</h1>
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
                  <img className="w-75" src={intraday} />
                </div>
                <div className="px-2 pb-3 service-content">
                  <h5 style={{ fontFamily: "Metropolis-Bold" }}>
                    STOCK MARKET INTRADAY
                  </h5>
                  <p className="secondary-text">
                    All our Day Trading calls are the recommendations or best
                    options which are generated from technical & fundamentals
                    data analytics.
                  </p>
                </div>
              </div>
              <div className="feature-card">
                <div className="service-img">
                  <img className="" style={{ width: "80%" }} src={nifty} />
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
                  <img className="w-75" src={stocks} />
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
                onClick={handleShow}
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
              We strongly syggest an effective intraday Trading Stragely Not
              Just Intraday Tips For Intraday Trading.
            </p>
            <p>
              Are you looking for the best smart tips providing compony in
              india? Then your search ends here because we have been recognized
              as one of the most outstanding choice for accurate tips provider
              in india.
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
                  Obtaining higher returns in our primary goal. That&apos;s why
                  the risk/ reward ration we use to manage capital and risk of
                  loss.
                </p>
              </div>
              <div className="feature-card px-2 py-3 text-center mb-4">
                <div>
                  <img src={advise} className="w-25 mb-3" />
                </div>
                <h5 style={{ fontFamily: "Metropolis-Medium" }}>
                  Expert Advice
                </h5>
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
                        Obtaining higher returns in our primary goal.
                        That&apos;s why the risk/ reward ration we use to manage
                        capital and risk of loss.
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
                        Get proper Follow-ups and News information, instant
                        market support and resistance level.
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
                  We strongly syggest an effective intraday Trading Stragely Not
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
