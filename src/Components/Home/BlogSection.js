import React from "react";
import { Container } from "react-bootstrap";

const BlogSection = () => {
  return (
    <>
      <Container>
        <div className="card">
          <div className="card-header">
            <img
              src="https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=d59d0cf6af1d779a3dca451e0ba259c33bbc6115&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fos%2Fab%2F_cms%2F2019%2F08%2F30142658%2F2020-jeep-wrangler-16.jpg&thumbnail=750%2C422&quality=80"
              alt=""
            />
          </div>
          <div className="card-body">
            <span className="tag tag-teal">Technology</span>
            <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur tenetur distinctio neque?
            </p>
            <div className="user">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
                alt=""
              />
              <div className="user-info">
                <h5>Jerome Walton</h5>
                <small>2h ago</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img
              src="https://images.cruisecritic.com/image/18740535/10-best-cruise-destinations-for-hot-air-balloon-rides_600x400_21.jpg"
              alt=""
            />
          </div>
          <div className="card-body">
            <span className="tag tag-purple">Place</span>
            <h4>
              Hot Air Ballooning in Nepal - 1 Day - Nepal Mother House Treks
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              dolor nihil saepe. Nobis nihil minus similique hic quas mollitia.
              Error.
            </p>
            <div className="user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSft5PLhaSb6QUdT0yRu3rjlam1Rt--WDJ6yQ&usqp=CAU"
                alt=""
              />
              <div className="user-info">
                <h5>Lewis Daniels</h5>
                <small>Yesterday</small>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img
              src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200305114843-01-edge-hudson-yards-observation-deck.jpg"
              alt=""
            />
          </div>
          <div className="card-body">
            <span className="tag tag-pink">Travel</span>
            <h4>
              New York City | Layout, People, Economy, Culture, &amp; History
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              consequuntur sequi suscipit iure fuga ea!
            </p>
            <div className="user">
              <img
                src="https://3.bp.blogspot.com/--sCpJJGYWEA/W2P4C51CYSI/AAAAAAAAQcI/LR4U_--Wf1E3wz7RLZtmwBPObm_ky9tQQCLcBGAs/s1600/beautiful-indian-women-photos-1.jpg"
                alt=""
              />
              <div className="user-info">
                <h5>Carrie Brewer</h5>
                <small>23 Dec 2020</small>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogSection;
