import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import { Container, Row ,Image} from "react-bootstrap";
const Breadcrumb = ({title}) => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Container fluid className="bread-main">
        <Row>
          <div className="bread">
            <h5>
              {title?<h3>{title}</h3>:breadcrumbs.map(({ breadcrumb, match }, index) => (
                <>
                  <NavLink
                    key={match.pathname}
                    to={match.pathname}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {breadcrumb}
                  </NavLink>
                  {index !== breadcrumbs.length - 1 && "/"}
                </>
              ))}
            </h5>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Breadcrumb;
