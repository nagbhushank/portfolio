import React from "react";
import logo from "../Assets/profile-pic.png";
import "./Profile.css";
import Figure from "react-bootstrap/Figure";
import { ExternalLink } from "react-external-link";

export default class Profile extends React.Component {
  render() {
    return (
      <Figure className="align-middle" id="profile">
        <Figure.Image
          className="profile-pic"
          // width={250}
          // height={200}
          loading="lazy"
          alt="nagbhushan"
          src={logo}
        />
        <Figure.Caption className="px-4 py-4 align-middle">
          <p>
            Hi I am Nagbhushan Kumbar, a 27 year old Web developer. Living in{" "}
            <ExternalLink href="https://goo.gl/maps/eVxnda7CMtBV6yfX7">
              PCMC, Pune, India.
            </ExternalLink>{" "}
            I am a Software Engineer, currently working with awesome folks at{" "}
            <ExternalLink href="https://www.tatatechnologies.com/in">
              TATA Technologies Pvt Ltd..
            </ExternalLink>
            &nbsp;&nbsp; &#x1F607;
          </p>
          <p className="mb-0">
            Have a look at my{" "}
            {/* <ExternalLink href="https://github.com/2sagarraut2">
              Github
            </ExternalLink>
            , skills or just connect with me on{" "} */}
            <ExternalLink href="https://www.linkedin.com/in/nagbhushan-kumbar-4a3287229/">
              LinkedIn
            </ExternalLink>
            . I am always excited to enhance my knowledge.
          </p>

          <span className="social-links">

            <ExternalLink href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Hello,+I+will+like+to+connect+with+you.&to=k.abhikumbar.ak@gmail.com">
              <i className="fas fa-envelope"></i>
            </ExternalLink>
            <ExternalLink href="https://wa.me/919028423992">
              <i class="fa fa-whatsapp whatsapp-icon"></i>
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/nagbhushan-kumbar-4a3287229/">
              <i className="fab fa-linkedin"></i>
            </ExternalLink>
           
            {/* <ExternalLink href="https://github.com/2sagarraut2">
              <i className="fab fa-github"></i>
            </ExternalLink> */}
            {/* <ExternalLink href="https://api.whatsapp.com/send?phone=+91&text=Hello!%20I%20will%20like%20to%20connect%20to%20with%20you!.">
              <i className="fab fa-whatsapp"></i>
            </ExternalLink> */}
          </span>
        </Figure.Caption>
      </Figure>
    );
  }
}
