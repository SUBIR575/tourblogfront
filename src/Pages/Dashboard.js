import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getToursByUser } from "../Store/TourSlice";
import UserBlogCard from "../Components/UserBlogCard";
import ReactPaginate from "react-paginate";

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.tour.tourListByUser);
  const [data, setData] = useState();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(state?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(state?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, state]);
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setData(profile);
    // console.log(profile?.result._id)
    dispatch(getToursByUser(profile?.result._id));
  }, []);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  
  return (
    <>
      <Container>
        <Row>
          {data ? (
            <>
              <div style={{ margin: "20px 0px 20px 0px" }}>
                <div
                  className="details-sec"
                >
                  <span className="details-sec-title">Name : </span>
                  <span className="details-sec-name">{data?.result.name}</span>
                  <br />
                  <span className="details-sec-title">Email : </span>
                  <span className="details-sec-name">{data?.result.email}</span>
                </div>
              </div>
              {currentItems
                ? currentItems?.map((item, index) => (
                    <>
                      <Col
                        sm={6}
                        lg={3}
                        md={4}
                        style={{ marginBottom: "20px" }}
                        key={index}
                      >
                        {<UserBlogCard {...item} />}
                      </Col>
                    </>
                  ))
                : <h6>Loading.....</h6>}
              <ReactPaginate
                breakLabel="..."
                nextLabel="->"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<-"
                renderOnZeroPageCount={null}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </>
          ) : (
            <>
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  margin: "20px",
                  textAlign: "center",
                }}
              >
                <h5>Please Log in First to See This</h5>
              </div>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
