import "../assets/css/navbar.css"
import logo from "../assets/images/logo.png";

const Navabar = () => {
  return (
    <div className="position-sticky nav-div" >
      <div className="d-flex justify-content-center p-2">
        <img src={logo} alt="stock-mart-logo" className="logo"/>
      </div>
    </div>
  );
};

export default Navabar;
