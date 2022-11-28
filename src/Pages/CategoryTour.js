import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostByCategory } from "../Store/TourSlice";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
const CategoryTour = () => {
  const dispatch = useDispatch();
  let { category } = useParams();
  const state = useSelector((state) => state?.tour.PostByCategory);
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
    dispatch(getPostByCategory(category.toLowerCase()));
  }, []);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  console.log(state);
  return (
    <>
      <Container>
        <Row style={{margin:'20px'}}>
          {state.length !== 0 ? (
            <>
              {currentItems ? (
                currentItems?.map((item, index) => (
                  <>
                    <Col
                      sm={6}
                      lg={3}
                      md={4}
                      style={{ marginBottom: "20px" }}
                      key={index}
                    >
                      {<BlogCard {...item} />}
                    </Col>
                  </>
                ))
              ) : (
                <h6>Loading.....</h6>
              )}
              <div className="pagi">
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
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  margin: "20px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h5>Something is Wrong</h5>
              </div>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default CategoryTour;
