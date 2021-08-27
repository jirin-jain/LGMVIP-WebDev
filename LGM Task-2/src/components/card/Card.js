import React from "react";
import User from "../user/User";
import "./card.css";

const Card = ({ person }) => {
  return (
    <div className="card">
      {person.map((user) => {
        return (
          <User
            key={user.id}
            {...user}
            about={"No dejes para mañana lo que puedas hacer hoy."}
          />
        );
      })}
    </div>
  );
};

export default Card;