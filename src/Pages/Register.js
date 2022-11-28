import React,{useState,useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  InputGroup,
  Spinner
} from "react-bootstrap";
import login from "../Assets/images/login.png";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Api from "../utils/Api";
import { toast,ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {signup} from '../Store/AuthSlice'
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const Register = () => {
  const {loading,error} = useSelector((state)=>({...state.auth}))
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [view,setView] = useState(false)
  useEffect(() => {
    error && toast.error(error);
  }, [error])
  
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
      name: data.name,
      email: data.email,
      password: data.password,
    };
    dispatch(signup({rModel,navigate,toast}))
    // console.log({ rModel });
    // const res = Api.post('users/signup',rModel)
    // res.then((response)=>{
    //   console.log(response);
    //   toast("Successfully signed up");
    // }).catch((error)=>{
    //   console.log(error)
    // })
    reset();
  };
  const viewPassword =()=>{
    setView(!view)
  }
  return (
    <>
    <ToastContainer/>
      <Breadcrumb />
      <Container>
      <div className="section-title">
          <h3>Register</h3>
          <Image
            src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
            alt="image"
          />
        </div>
        <Row style={{marginTop:'20px',marginBottom:'20px'}}>
          <Col sm={6}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={login} alt="image" />
            </div>
          </Col>
          <Col sm={6} style={{ display: "flex", justifyContent: "center" }}>
            <div className="login-form">
              <div style={{ width: "60%" }}>
                <Form onSubmit={handleSubmit(onSubmitHandler)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      {...register("name")}
                      placeholder="name"
                      required
                      autoComplete="off"
                    />
                    <p>{errors.name?.message}</p>
                  </Form.Group>
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
                      type={!view?"password":"text"}
                      required
                      autoComplete="off"
                    />
                    <InputGroup.Text onMouseOver={viewPassword}><i class="fa fa-eye" aria-hidden="true"></i></InputGroup.Text>
                    <p>{errors.password?.message}</p>
                  </InputGroup>
                  
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      {...register("passwordConfirm")}
                      placeholder="Re Enter Password"
                      type="password"
                      required
                      autoComplete="off"
                    />
                    <p>{errors.passwordConfirm?.message}</p>
                  </Form.Group>
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
                      Sign Up
                    </button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
