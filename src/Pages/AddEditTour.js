import React, { useState, useEffect } from "react";
import { Container, Row, Form, Image } from "react-bootstrap"; 
import FileBase from "react-file-base64";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import { AddTour, getSingleTour, UpdateTour } from "../Store/TourSlice";
import Api from "../utils/Api";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().required(),
});
const AddEditTour = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  let { id } = useParams();
  const [data, setData] = useState();
  const [tags,setTags] =useState([]);
  const [state, setState] = useState();
  const [image, setImage] = useState({
    imageFile: "",
  });
  const [name, setName] = useState();
  const handleChange = (chips) => {
    setData(chips);
  };
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(!id && { resolver: yupResolver(schema) });
  const { loading, error, tourListByUser } = useSelector((state) => ({
    ...state.tour,
  }));
  useEffect(() => {
    setName(JSON.parse(localStorage.getItem("profile")));
  }, []);
  useEffect(() => {
    (async () => {
      const users = await Api.get(`tour/${id}`);
      setTags(users?.data.tags)
      setState(users?.data)
      setValue("category",users?.data.category)
    })();
    
    // if (id) {
    //   const singleTour = tourListByUser.find((item) => item._id === id);
    //   setState({ ...singleTour });
    //   setValue("category",singleTour?.category)
    //   setTags(singleTour?.tags)
    // }
  }, [id]);
 
  const onSubmitHandler = (data1) => {
    // data1.preventDefault();
    let rModel = {
      title: data1?.title ? data1?.title : state.title,
      description: data1?.description ? data1?.description : state.description,
      category: data1?.category ? data1?.category : state.category,
      // tags: data ? data : state.tags,
      tags:tags,
      name: name?.result.name,
      imagefile: image?.imageFile ? image?.imageFile : state.imagefile,
    };
    if (id) {
      console.log("data1", { ...rModel, id });
      dispatch(UpdateTour({ id, rModel, navigate, toast }));
    } else {
      dispatch(AddTour({ rModel, navigate, toast }));
    }
    console.log(data1);
    reset();
  };
  const handleFun=(e)=>{
    setTags(e)
  }
  return (
    <>
      <Breadcrumb />
      <Container>
        <Row>
          <ToastContainer />
          <div className="main-blog-div">
            <div className="blog-form">
              <Form onSubmit={handleSubmit(onSubmitHandler)}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  {...register("title")}
                  defaultValue={state?.title}
                  required
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave Tour Description here"
                  style={{ height: "100px" }}
                  {...register("description")}
                  defaultValue={state?.description}
                  required
                />
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" {...register("category")}>
                  <option>Select Category</option>
                  <option value="advanture">Advanture</option>
                  <option value="city">City</option>
                  <option value="sea">Sea</option>
                  <option value="cruise">Cruise</option>
                  <option value="international">International</option>
                  <option value="wedding">Wedding</option>
                </Form.Control>
                <Form.Label>Tags</Form.Label>
                <div style={{ width: "100%", marginTop:'5px' }}>
                  {/* <ChipInput
                    className="customChipInput"
                    label="Tags"
                    defaultValue={state?.tags}
                    onChange={(chips) => handleChange(chips)}
                  /> */}
                  <TagsInput value={tags?tags:[]} onChange={(e)=>handleFun(e)}/>
                </div>
                <div style={{ marginTop: "30px" }}>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setImage({ ...image, imageFile: base64 })
                    }
                  />
                  {id ? (
                    <Image src={state?.imagefile} width="100px" alt="image" />
                  ) : null}
                </div>
                <div style={{ margin: "30px", textAlign: "center" }}>
                  <button type="submit" className="slider-btn">
                    {id ? "Update" : "Submit"}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AddEditTour;
