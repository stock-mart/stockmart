import whatsappLogo from "../assets/images/whatsapp+logo.png";
const WhatsAppBot = ({ bottom }) => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=919699961709&text=hi&app_absent=0"
        className="wa-chat-btn-fixed-wrap d-none d-lg-block"
        target="_blank"
      >
        <img
          className="wa-chat-btn-icon-image"
          alt="Whatsapp Chat Button"
          src={whatsappLogo}
        />{" "}
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=919699961709&text=hi&app_absent=0"
        style={{ bottom }}
        className="wa-chat-btn-fixed-wrap-mb d-lg-none"
        target="_blank"
      >
        <img
          className="wa-chat-btn-icon-image "
          alt="Whatsapp Chat Button"
          src={whatsappLogo}
        />{" "}
      </a>
    </>
  );
};

WhatsAppBot.defaultProps = {
  bottom: "5%",
};

export default WhatsAppBot;
