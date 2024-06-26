import React from "react";
import './credits.css'

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
      <p className="info position">{props.position}</p>
        <p className="info">{props.phone}</p>
        <p className="info">{props.mail}</p>
      </div>
    </div>
  );
}
function Credits() {
  const contactsData = [
    {
      name: "Denny Santhosh",
      phone: "",
      position: "Frontend Developer",
      mail: "dennysanthosh@gmail.com",
      img: "./assets/credits/denny.jpg"
    },
    {
      name: "Steeve Binu Baby",
      phone: "",
      position: "Frontend Developer",
      mail: "steev@stthomascollge.ac.in",
      img: "./assets/credits/steeve.jpg"
    },
    {
      name: "Febin Jacob Thomas",
      img: "./assets/credits/febin.jpg",
      position: "UI/UX Designer",
      phone: "",
      mail: "febinjacobthomas@gmail.com"
    },
    {
      name: "Aswan KS",
      phone: "",
      position: "Backend Developer",
      mail: "aswan@stthomascollege.ac.in",
      img: "./assets/credits/aswan.jpg"
    }



  ];

  return (
    <div className="contactmaincontainer">
      <h1 className="contactheading">Contacts</h1>
      <div className="contactflexcontainer">
        {contactsData.map((contact, index) => (
          <div className="contactflex" key={index}>
            <Card {...contact} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Credits;
