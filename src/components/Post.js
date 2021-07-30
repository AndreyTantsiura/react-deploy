import React from "react";
import "./Post.css";
import Checkmark from "../img/checkmark.png";
import Earth from "../img/earth.png";
import Like from "../img/like.png";
import Share from "../img/share.png";

const Posts = (props) => {
  return (
    <div className="post">
      <div className="header">
        <div className="header_icon">
          <img src={props.photo} alt="" />
        </div>
        <div className="header_content">
          <div className="header_content_top">
            <span>{props.name}</span>
            <img src={Checkmark} alt=""></img>
          </div>
          <div className="header_content_bottom">
            <span>2h &#183;</span>
            <img src={Earth} alt=""></img>
          </div>
        </div>
        <div className="header_burger_menu">
          <span>&#8230;</span>
        </div>
      </div>
      <div className="main">
        <p>{props.content}</p>
        <img src={props.image} alt=""></img>
      </div>
      <div className="footer">
        <div className="fotter_like">
          <img src={Like} alt=""></img>
          <span>Like</span>
        </div>
        <div className="fotter_share">
          <img src={Share} alt=""></img>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
