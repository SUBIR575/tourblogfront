import React from 'react'
import { Col, Container, Row,Image} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import BlogCard from './BlogCard'
const ReletedTours = () => {
    const TourList = useSelector((state)=> state.tour.reletedTourList)
    const data = useSelector((state)=>state?.tour.tour)
    const finalresult = TourList.filter((item)=>item._id !== data._id);
  return (
    <>
     <Container>
        <Row>
        <div className="section-title">
              <h3>Releted Posts</h3>
              <Image
                src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
                alt="image"
              />
            </div>
        {finalresult
                  ? finalresult?.slice(-3).reverse().map((item, index) => (
                      <>
                        <Col
                          sm={12}
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
        </Row>
     </Container>
    </>
  )
}

export default ReletedTours