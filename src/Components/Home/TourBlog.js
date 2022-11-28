import React,{useState,useEffect} from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import BlogCard from "../BlogCard";
import {useSelector,useDispatch} from 'react-redux'
import { getTour } from "../../Store/TourSlice";
import {Link} from 'react-router-dom'
const TourBlog = () => {
  const state = useSelector((state)=>state.tour.tourList)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTour());
  }, [])
  
  return (
    <>
      <Container>
        <Row>
          <div className="section-title">
            <h3>Latest Blogs</h3>
            <Image
              src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
              alt="image"
            />
          </div>
          {state?state?.slice(-8).reverse().map((item,index) => (
            <>
              <Col sm={6} lg={3} md={4} style={{ marginBottom: "20px" }} key={index}>
                {<BlogCard {...item} />}
              </Col>
            </>
          )):null}
          <div style={{textAlign:'center', margin:'15px'}}>
            <button className="slider-btn"><Link to='/allblogs' className="link-main-view">View All Blogs</Link></button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default TourBlog;
