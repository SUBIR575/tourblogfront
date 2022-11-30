import React,{useState,useEffect} from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTour,getToursByUser } from "../Store/TourSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import moment from "moment";

const UserBlogCard = ({
  title,
  imagefile,
  tags,
  description,
  name,
  _id,
  createdate,
  category,
  likes
}) => {
  const dispatch = useDispatch();
 const [data, setData] = useState()
 useEffect(() => {
   setData(JSON.parse(localStorage.getItem('profile'))?.result._id)
 }, [])
  
  const deleteHandle =(id)=>{
    dispatch(deleteTour(id));
  }
  return (
    <>
      <div className="blog-card">
        <div className="blog-card-header">
          <img src={`${imagefile}`} alt="" />
        </div>
        <div className="blog-card-body">
        <div className="user-like-section">
        {category?<span className="tag tag-teal">{category}</span>:null}
        <h5><i className="far fa-thumbs-up">{likes.length}</i></h5>
        </div>
        <Link style={{ textDecoration: "none" }} to={`/singletour/${_id}`}>
        <h4 style={{fontSize:'20px'}}>{title.substring(0, 20) + "..."}</h4>
          </Link>
          <p>{parse(description.substring(0, 50) + "...")}</p>
          <div className="user-blog">
            <div className="user-blog-info">
            <img
              alt=""
              src="https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png"
              width="30"
              height="30"
              className="d-inline-block align-top brand-logo"
            />
            <small> {moment(createdate).fromNow()}</small>
            </div>
            <div className="user-blog-icon">
              <h5><Link to={`/edittour/${_id}`}><i class="fas fa-pencil-ruler"></i></Link></h5>
              <h5 onClick={()=>deleteHandle(_id)}><i class="fas fa-trash"></i></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBlogCard;
