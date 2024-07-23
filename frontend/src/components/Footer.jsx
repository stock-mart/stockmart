import "../assets/css/footer.css";
import mail from "../assets/images/mail.png";
import call from "../assets/images/call.png";
import customer from "../assets/images/customer.png";
import location from "../assets/images/location.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="footer-div">
      <div className="container py-4">
        <h3 className="text-uppercase mb-4">Contact Us</h3>
        <div className="contact-div d-flex mb-4 mb-lg-5">
          <div className="contact-cards p-3 d-flex align-items-center">
            <a
              href="mailto:contact@stock-mart.in"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div className="d-flex align-items-center contact-flex-content">
                <img src={mail} className="contact-icons mx-auto"></img>
                <div className="">
                  <h5 className="m-0">Email Us</h5>
                  <p className="m-0">contact@stock-mart.in</p>
                </div>
              </div>
            </a>
          </div>
          <div className="contact-cards p-3 d-flex align-items-center">
            <a
              href="tel:+919699961709"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div className="d-flex align-items-center contact-flex-content">
                <img src={call} className="contact-icons"></img>
                <div className="">
                  <h5 className="m-0">Phone</h5>
                  <p className="m-0">+919699961709</p>
                </div>
              </div>
            </a>
          </div>
          <div className="contact-cards p-3 d-flex align-items-center">
            <a
              href="mailto:contact@stock-mart.in"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div className="d-flex align-items-center contact-flex-content">
                <img src={customer} className="contact-icons"></img>
                <div className="">
                  <h5 className="m-0">For customer grivances mail us at</h5>
                  <p className="m-0">
                    customercare@stock-mart.in, call us 9699961709
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="contact-cards p-3 d-flex align-items-center">
            <a
              href="mailto:contact@stock-mart.in"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div className="d-flex align-items-center contact-flex-content">
                <img src={location} className="contact-icons"></img>
                <div className="">
                  <h5 className="m-0">Address</h5>
                  <p className="m-0">
                    E-end Main road, Tilak nagar, Jayanagar,
                  </p>
                  <p className="m-0">Bengaluru Karnataka 560069</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="d-lg-block d-none">
          <div className="row">
            <div className="col-lg-6">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                aliquet efficitur nisi quis pellentesque. Sed dapibus mi vitae
                rutrum ultricies.
              </p>
              <p>
                For General Enquires:{" "}
                <a
                  href="tel:+919699961709"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  +91 9699961709
                </a>{" "}
                |{" "}
                <a
                  href="mailto:contactus@stock-mart.in"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  contact@stock-mart.in
                </a>
              </p>
              <div className="d-flex mt-3" style={{ gap: "0.7em" }}>
                <div>
                  <p>Address:</p>
                </div>
                <div>
                  <a
                    href="https://maps.app.goo.gl/111GV3hCUtBgdxbdA"
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    <p>
                      E- End main road, Tilak nagar, Jayanagar, Bengaluru,,
                      Karnataka560069
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-5 pe-5">
              <div className="d-flex justify-content-between">
                <div className="">
                  <h5 className="mb-2 footer-headings">
                    <p className="mb-0">About</p>
                  </h5>
                  <p>Contact Us</p>
                </div>
                <div className="">
                  <h5 className="mb-2 footer-headings">
                    <p className="mb-0">Our services</p>
                  </h5>
                  <p className="mb-1">Stock market intraday</p>
                  <p className="mb-1">Bank nifty futures & options</p>
                  <p className="mb-1">Stock futures and options</p>
                </div>
                <div className="">
                  <h5 className="mb-2 footer-headings">
                    <p className="mb-0">Our Features</p>
                  </h5>
                  <p className="mb-1">Minimum risk / more profit</p>
                  <p className="mb-1">Expert advice</p>
                  <p className="mb-1">Personalized customer support</p>
                  <p className="mb-1">Best market tips</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="social-div d-flex align-items-center"
                style={{ gap: "2em" }}
              >
                <a
                  href="mailto:contact@stock-mart.in"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  <Icon
                    icon="ri:facebook-fill"
                    width="1.5em"
                    height="1.5em"
                    style={{ color: "#004dac" }}
                  />
                </a>
                <a
                  href="mailto:contact@stock-mart.in"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  <Icon
                    icon="prime:twitter"
                    width="1.3em"
                    height="1.3em"
                    style={{ color: "#004dac" }}
                  />
                </a>
                <a
                  href="mailto:contact@stock-mart.in"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  <Icon
                    icon="hugeicons:instagram"
                    width="1.7em"
                    height="1.7em"
                    style={{ color: "#004dac" }}
                  />
                </a>
                <a
                  href="mailto:contact@stock-mart.in"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  <Icon
                    icon="mdi:linkedin"
                    width="1.7em"
                    height="1.em"
                    style={{ color: "#004dac" }}
                  />
                </a>
                <a
                  href="mailto:contact@stock-mart.in"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  <Icon
                    icon="mdi:youtube"
                    width="2em"
                    height="2em"
                    style={{ color: "#004dac" }}
                  />
                </a>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <p className="">
                    Copyright © Stock mart stock market platform All rights
                    reserved.
                  </p>
                </div>
                <div className="col-6 ps-5 pe-5">
                  <div className="d-flex" style={{ gap: "1.5em" }}>
                    <Link
                      to="/privacy-policy"
                      className="text-decoration-none text-dark"
                    >
                      <p>Privacy Policy</p>
                    </Link>
                    <Link
                      to="/terms&condition"
                      className="text-decoration-none text-dark"
                    >
                      <p>Terms & Conditions</p>
                    </Link>
                    <Link
                      to="/refund-and-cancellation-policy"
                      className="text-decoration-none text-dark"
                    >
                      <p>Policy Refund & Cancellation Policy</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-lg-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            aliquet efficitur nisi quis pellentesque. Sed dapibus mi vitae
            rutrum ultricies.
          </p>
          <p>
            For General Enquires{" "}
            <a
              href="tel:+919699961709"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              +91 9699961709
            </a>{" "}
            |{" "}
            <a
              href="mailto:contact@stock-mart.in"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              contactus@stock-mart.in
            </a>
          </p>
          <p>
            <a
              href="mailto:contact@stock-mart.in"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Address : E- End main road, Tilak nagar, Jayanagar, Bengaluru,
              Karnataka560069
            </a>
          </p>
          <div className="my-4 social-div d-flex justify-content-between align-items-center">
            <a
              href="mailto:contact@stock-mart.in"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <Icon
                icon="ri:facebook-fill"
                width="2em"
                height="2em"
                style={{ color: "#004dac" }}
              />
            </a>
            <a
              href="mailto:contact@stock-mart.in"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <Icon
                icon="prime:twitter"
                width="1.7em"
                height="1.7em"
                style={{ color: "#004dac" }}
              />
            </a>
            <a
              href="mailto:contact@stock-mart.in"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <Icon
                icon="hugeicons:instagram"
                width="2em"
                height="2em"
                style={{ color: "#004dac" }}
              />
            </a>
            <a
              href="mailto:contact@stock-mart.in"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <Icon
                icon="mdi:linkedin"
                width="2em"
                height="2em"
                style={{ color: "#004dac" }}
              />
            </a>
            <a
              href="mailto:contact@stock-mart.in"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <Icon
                icon="mdi:youtube"
                width="2.5em"
                height="2.5em"
                style={{ color: "#004dac" }}
              />
            </a>
          </div>
          <div className="d-flex" style={{ gap: "1em" }}>
            <div className="footer-links w-50">
              <p className="footer-headings mb-1">About</p>
              <p>Contact Us</p>
              <p className="footer-headings mb-1">Our Features</p>
              <p className="mb-1">Minimum risk / more profit</p>
              <p className="mb-1">Expert advice</p>
              <p className="mb-1">Personalized customer support</p>
              <p>Best market tips</p>
            </div>
            <div className="footer-links">
              <p className="footer-headings mb-1">Our Features</p>
              <p className="mb-1">Stock market intraday</p>
              <p className="mb-1">Bank nifty futures & options</p>
              <p className="">Stock futures and options</p>
            </div>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ fontSize: "0.75em", gap: "1em" }}
          >
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Policy Refund & Cancellation Policy</p>
          </div>
          <p className="mb-0 text-center" style={{ fontSize: "0.65em" }}>
            Copyright © Stock mart stock market platform All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
