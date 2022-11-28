import React, { useEffect, useState, useRef } from "react";
import { Button, Image, Tooltip, Overlay } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSingleTour, likeTour } from "../Store/TourSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import moment from "moment";
const BlogCard = ({
  title,
  imagefile,
  tags,
  description,
  name,
  _id,
  createdate,
  category,
  likes,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const handleNavigate = (id) => {
    navigate(`/singletour/${id}`);
  };
  const handleLike = (id) => {
    console.log("user",user)
    dispatch(likeTour(id));
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
 const handleToast = ()=>{
  toast.error("Please Login To Like");
 }
  return (
    <>
    
      <div className="blog-card">
        <div className="blog-card-header">
          <img src={`${imagefile}`} alt="" />
        </div>
        <div className="blog-card-body">
          {category ? <span className="tag tag-teal">{category}</span> : null}
          <Link style={{ textDecoration: "none" }} to={`/singletour/${_id}`}>
            <h4>{title}</h4>
          </Link>
          <p>
            {description.substring(0, 50) + "..."}
            <span
              style={{ cursor: "pointer", color: "#90b956" }}
              onClick={() => handleNavigate(_id)}
            >
              View More
            </span>
          </p>
          <div className="post-card-footer">
            <div className="user">
              <img
                alt=""
                src="https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png"
                width="30"
                height="30"
                className="d-inline-block align-top brand-logo"
              />
              <div className="user-info">
                <h5>{name}</h5>
                <small>{moment(createdate).fromNow()}</small>
              </div>
            </div>
            <div style={{ margin: "5px" }}>
              <h5
                onClick={!user?.result?()=>handleToast():() => handleLike(_id)}
                className={
                  likes.find((id) => id === user?.result._id)
                    ? "like-btn"
                    : "thumbs-up"
                }
              >
                <i
                  className="far fa-thumbs-up"
                  ref={target}
                  onMouseEnter={() => setShow(!show)}
                  onMouseLeave={() => setShow(!show)}
                >
                  {likes.length}
                </i>
              </h5>
              <Overlay target={target.current} show={show} placement="top">
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    {likes?.find((id) => id === user?.result._id)?likes?.length > 1 ? `You & ${likes.length - 1} Other like It` : "You Liked It": `${likes.length} likes`}
                  </Tooltip>
                )}
              </Overlay>
              <ToastContainer autoClose={1000}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
