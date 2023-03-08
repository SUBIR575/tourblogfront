import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser'
import { useDispatch, useSelector } from "react-redux";
import {
  getReletedTours,
  getSingleTour,
  searchTourByTag,
} from "../Store/TourSlice";
import ReletedTours from "../Components/ReletedTours";
const SingleTour = () => {
  const data = useSelector((state) => state?.tour.tour);
  const dispatch = useDispatch();
  let id = useParams();
  useEffect(() => {
    dispatch(getSingleTour(id?.id));
  }, [id]);
  useEffect(() => {
    data && dispatch(getReletedTours(data.tags));
  }, [data]);
  const handleTag = (id) => {
    dispatch(searchTourByTag(id));
  };

  return (
    <>
      <Breadcrumb {...data} />
      {data ? (
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <div className="single-blog">
                <div className="blog-single-img">
                  <Image src={data?.imagefile} />
                </div>
                <div className="main-blog-post">
                  <h2>{data?.title}</h2>
                  <hr />
                  <div className="tags-filter-blog">
                    {data
                      ? data?.tags.map((item) => (
                          <button
                            className="tags-tags"
                            onClick={() => handleTag(item)}
                          >
                            {item}
                          </button>
                        ))
                      : null}
                  </div>
                  <div className="blog-content">
                    <p>{parse(data?.description)}</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <ReletedTours />
            </Col>
          </Row>
        </Container>
      ) : null}
    </>
  );
};

export default SingleTour;
