import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
function Sidebar() {
const user = useSelector(selectUser);
    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo"
          alt="NOOOO"
        />
        <Avatar src={user?.photoUrl}  className="sidebar__avatar" />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">4529</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">1839</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React.js")}
        {recentItem("Javacript")}
        {recentItem("HTML")}
        {recentItem("SASS")}
        {recentItem("Express.js")}
      </div>
    </div>
  );
}

export default Sidebar;
