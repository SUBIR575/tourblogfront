import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import loginimage from "../Assets/images/login.png";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import Api from "../utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleSignin, login } from "../Store/AuthSlice";
import { GoogleLogin } from "react-google-login";
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    const rModel = {
      email: data.email,
      password: data.password,
    };
    dispatch(login({ rModel, navigate, toast }));
    reset();
  };
  const viewPassword = () => {
    setView(!view);
  };
  console.log("error===============>", error);
  const googleSucess = (res) => {
    console.log("res", res);
    const email = res?.profileObj.email;
    const name = res?.profileObj.name;
    const token = res?.tokenId;
    const googleId = res?.googleId;
    const result = {email,name,token,googleId}
    dispatch(googleSignin({result,navigate,toast}))
  };
  const googleFaliure = (err) => {
    console.log("err", err);
  };
  return (
    <>
      <ToastContainer />
      <Breadcrumb />
      <Container>
        <div className="section-title">
          <h3>Log In</h3>
          <Image
            src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
            alt="image"
          />
        </div>
        <Row>
          <Col sm={6}>
            <Image src={loginimage} alt="imaage" />
          </Col>
          <Col sm={6} style={{ display: "flex", justifyContent: "center" }}>
            <div className="login-form">
              <div style={{ width: "60%" }}>
                <Form onSubmit={handleSubmit(onSubmitHandler)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      {...register("email")}
                      placeholder="email"
                      required
                      autoComplete="off"
                    />
                    <p>{errors.email?.message}</p>
                  </Form.Group>

                  <Form.Label>Password</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      {...register("password")}
                      placeholder="Password"
                      type={!view ? "password" : "text"}
                      required
                      autoComplete="off"
                    />
                    <InputGroup.Text onMouseOver={viewPassword}>
                      <i class="fa fa-eye" aria-hidden="true"></i>
                    </InputGroup.Text>
                  </InputGroup>
                  <div style={{ textAlign: "center", margin: "20px" }}>
                    <button className="main-btn" type="submit">
                      {loading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : null}
                      Log In
                    </button>
                  </div>
                  <div>
                    <GoogleLogin
                      clientId="152055947034-gs5qaq35kag9ltp1irbek7qs1l41k9fc.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <Button
                          style={{ width: "100%" }}
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          <i class="fab fa-google-plus-g"></i> Log In With
                          Google
                        </Button>
                      )}
                      onSuccess={googleSucess}
                      onFailure={googleFaliure}
                      cookiePolicy="single_host_origin"
                    />
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
