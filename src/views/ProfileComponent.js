import React from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../Components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../Components/customcss.css";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <Container className="mx-auto" >
      <Row className=" align-items-center profile-header text-center text-md-left">
        <Col md={2}>
          
        </Col>
        <Col md>
          <p className="lead text-muted" style={{ fontSize: 14 }}>
            {user.email}
          </p>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
