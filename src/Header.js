import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  Notifications,
  SupervisorAccount,
} from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="main__header">
      <div className="header">
        <div className="header__left">
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt=""
          />
          <div className="header__search">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for jobs,skills,companies..."
            />
          </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccount} title="My Network" />
          <HeaderOption Icon={BusinessCenter} title="Jobs" />
          <HeaderOption Icon={Chat} title="Messeging" />
          <HeaderOption Icon={Notifications} title="Notifications" />
          <HeaderOption avatar={true} onClick={logoutOfApp} title="Me" />
        </div>
      </div>
    </div>
  );
}

export default Header;
