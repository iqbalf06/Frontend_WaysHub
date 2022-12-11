import React from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

import WaysHub from "../assets/images/WaysHub.png";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

function Auth() {
  let navigate = useNavigate();

  const [state] = useContext(UserContext);

  const checkAuth = () => {
    if (state.isLogin === true) {
      navigate("/");
    }
  };
  checkAuth();

  const [isRegister, setIsRegister] = useState(false);

  const switchLogin = () => {
    setIsRegister(false);
  };

  const switchRegister = () => {
    setIsRegister(true);
  };

  return (
    <>
      <Container className="p-3">
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <Stack
              direction="vertical"
              className="d-flex flex-column justify-content-center"
            >
              <Image className="w-75" src={WaysHub} />
              <Card.Text className="text-white fs-5 fw-light w-75">
                Join now, share your creations with another people and enjoy
                other creations
              </Card.Text>
              <div>
                <Button
                  onClick={switchLogin}
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#FF7A00",
                    border: "none",
                    width: "25%",
                    marginRight:"3%"
                  }}
                  className="mt-5 py-2 fw-bold fs-5 text-white"
                >
                  Sign In
                </Button>
                <Button
                  onClick={switchRegister}
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#FF7A00",
                    border: "none",
                    width: "25%",
                  }}
                  className="mt-5 py-2 fw-bold fs-5 text-white"
                >
                  Sign Up
                </Button>
              </div>
            </Stack>
          </Col>
          <Col>{isRegister ? <Register /> : <Login />}</Col>
        </Row>
      </Container>
    </>
  );
}

export default Auth;
