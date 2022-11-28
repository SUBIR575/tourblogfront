import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import image1 from "../../Assets/images/adventure.svg";
import image2 from "../../Assets/images/city-tour.svg";
import image3 from "../../Assets/images/sea-tour.svg";
import image4 from "../../Assets/images/sheep.svg";
import image5 from "../../Assets/images/travel.svg";
import image6 from "../../Assets/images/wedding.svg";
import { Link } from "react-router-dom";
const Categories = () => {
  const category = [
    {
      name: "Advanture",
      image: image1,
    },
    {
      name: "City",
      image: image2,
    },
    {
      name: "Sea",
      image: image3,
    },
    {
      name: "Cruise",
      image: image4,
    },
    {
      name: "International",
      image: image5,
    },
    {
      name: "Wedding",
      image: image6,
    },
  ];
  return (
    <>
      <section className="section-style">
        <Container>
          <Row>
            <div className="section-title">
              <h3>Our Categories</h3>
              <Image
                src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
                alt="image"
              />
            </div>
            {category
              ? category.map((item) => (
                  <Col sm={6} md={4} lg={2}>
                    <div className="category-single1">
                      <div className="icon">
                        <Image src={item.image} alt="image" />
                      </div>
                      <div className="category-name">
                        <Link to={`/category/${item.name}`} style={{textDecoration:'none'}} className="link-main">
                        <h4>{item.name}</h4>
                        </Link>
                      </div>
                    </div>
                  </Col>
                ))
              : null}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Categories;
