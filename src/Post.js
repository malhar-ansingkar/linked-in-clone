import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React,{forwardRef} from "react";
import InputOption from "./InputOption";
import "./Post.css";
const Post = forwardRef( ({ name, description, messege, photoUrl },ref)=> {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl} >{name[0].toUpperCase()}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{messege}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" />
        <InputOption Icon={ChatOutlined} title="Comment" />
        <InputOption Icon={ShareOutlined} title="Share" />
        <InputOption Icon={SendOutlined} title="Send" />
      </div>
    </div>
  );
})

export default Post;
