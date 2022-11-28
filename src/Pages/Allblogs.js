import React, { useEffect, useState } from "react";
import { Container, Row, Col,InputGroup,Form } from "react-bootstrap";
import BlogCard from "../Components/BlogCard";
import { useSelector, useDispatch } from "react-redux";
import { getTags, getTour, searchTour, searchTourByTag } from "../Store/TourSlice";
import ReactPaginate from "react-paginate";
import {useNavigate} from 'react-router-dom'
const demoarray = ["food","travel","india","delhi","nature","Tajmohal","kolkata","sea","beach"]
const Allblogs = () => {
  const state = useSelector((state) => state.tour.tourList);
  const tagList = useSelector((state) => state.tour.tagList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentItems, setCurrentItems] = useState([]);
  const [search,setSearch] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(state?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(state?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, state]);

  useEffect(() => {
    dispatch(getTour());
    dispatch(getTags())
  }, []);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  const handleSearch =(e)=>{
    e.preventDefault();
    if(search){
      dispatch(searchTour(search))
      // navigate(`/tour/search?searchQuery=${search}`)
      setSearch('')
    }else{
      navigate('/')
    }
  }
  let c = []
  const b = state.map((item)=>c.push(item.tags))
  const d = c.flat();
  const tags = [...new Set(d)];
  const handleTag=(id)=>{
    dispatch(searchTourByTag(id))
  }
  const handleClick = ()=>{
    dispatch(getTour());
  }
  return (
    <>
      <section style={{ margin: "30px 0 30px 0" }}>
        <Container>
          <Row>
            <Col lg={3} md={12}>
            <div className="reset-btn">
              <button className="reset-btn-main" onClick={handleClick}>Reset</button>
            </div>
              <InputGroup className="mb-3">
                <InputGroup.Text style={{backgroundColor:'#90B956',cursor:'pointer'}} onClick={handleSearch}>Search</InputGroup.Text>
                <Form.Control aria-label="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
              </InputGroup>
              <div className="tags-filter">
               <h6>Tags</h6>
                {tagList?tagList.map((item)=>(
                  <button className="tags-filter-btn" onClick={()=>handleTag(item)}>{item}</button>
                )):null}
              </div>
            </Col>
            <Col lg={9} md={12}>
              <Row>
                {currentItems
                  ? currentItems?.map((item, index) => (
                      <>
                        <Col
                          sm={6}
                          lg={4}
                          md={4}
                          style={{ marginBottom: "20px" }}
                          key={index}
                        >
                          {<BlogCard {...item} />}
                        </Col>
                      </>
                    ))
                  : null}
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
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Allblogs;
