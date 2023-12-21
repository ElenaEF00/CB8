import { useEffect, useState } from "react";
import "./index.css";

const Post = ({ postData }) => {
  const { userId, image, username, title, body, tags, reactions } = postData;
  // Qui ho destrutturato anche userId per l'esercizio avanzato ma non mi serve per quello avanzato ultra

  // AVANZATO
  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/users/${userId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserData(data);
  //     });
  // }, []);

  return (
    <div className="Post">
      <div className="Post__user">
        <img src={image} alt="user" />
        <h3>{username}</h3>
      </div>
      <h4 className="Post__title">{title}</h4>
      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--reaction">
          <button className="Post__info--icon">❤️</button>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Post;
