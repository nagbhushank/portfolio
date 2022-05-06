import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Contact.css";
import { ExternalLink } from "react-external-link";

export default class Contact extends React.Component {
    render() {
        return (
            <div id="contact" className="contact">
                <p className="sub-text p-3">
                    I am always excited to work on some awesome projects, message me and
                    let's discuss.
                </p>
                <Container className="p-4 details">
                    <Row>
                        <Col>
                            <p>
                                <b>No &#169; copyright issues.</b>
                            </p>
                            <p>If you need any help, ping me !</p>
                        </Col>
                        <Col>
                            <p className="sign">Nagbhushan Kumbar</p>
                            <p>
                                Made with <i className="fas fa-heart"></i> in India
                            </p>
                        </Col>
                        <Col className="social-links">
                            You can find me everywhere!
                            <br />
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
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
