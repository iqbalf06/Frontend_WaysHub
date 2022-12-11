import { useContext, useState } from "react";
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

import WaysHub from "../../assets/images/WaysHub.png";
import { useMutation } from "react-query";
import { Alert } from "react-bootstrap";
import { UserContext } from "../../context/userContext";

import { API } from "../../config/api";

function Login() {
  let navigate = useNavigate();

  const title = "Login";
  document.title = "WaysHub | " + title;

  const [state, dispatch] = useContext(UserContext);
console.log(state, "ini state");
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data for login process
      const response = await API.post("/login", body, config);

      // Checking process
      if (response?.status === 200) {
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        const alert = (
          <Alert variant="success" className="py-1">
            login successfully
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          wrong email or password
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <>
      <Container className="p-3" style={{ height: "95vh" }}>
        <Col
          className="d-flex flex-column justify-content-center"
          style={{ marginTop: "14vh" }}
        >
          <Container
            className="rounded-4 p-5"
            style={{ backgroundColor: "#161616", width: "80%" }}
          >
            <Form onSubmit={(e) => handleSubmit.mutate(e)}>
              <Form.Label className="fs-1 mb-5 fw-bold text-white">
                Sign In
              </Form.Label>
              {message && message}
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Control
                  className="mb-3 py-2 fs-5"
                  style={{
                    borderColor: "#BCBCBC",
                    borderWidth: "3px",
                    backgroundColor: "#555555",
                    color: "rgb(210,210,210,0.25)",
                  }}
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-5" controlId="formPassword">
                <Form.Control
                  className="py-2 fs-5"
                  style={{
                    borderColor: "#BCBCBC",
                    borderWidth: "3px",
                    backgroundColor: "#555555",
                    color: "rgb(210,210,210,0.25)",
                  }}
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#FF7A00", border: "none" }}
                className="py-2 fw-bold fs-5 w-100 text-white"
              >
                Sign In
              </Button>
            </Form>
          </Container>
        </Col>
      </Container>
    </>
  );
}
export default Login;
