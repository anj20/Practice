import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
const PartyRSVP = () => {
  const [approved, setApproved] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [guests, setGuests] = useState([]);
  const [guest, setGuest] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setApproved(!approved);
    setGuests([...guests, { name, email, phone }]);
  };

  console.log(guests);
  return (
    <Container>
      <div className=" bg-black h-[50vh] p-6 justify-center">
        <h1 className=" text-white text-5xl">Party RSVP</h1>
        <br />
        {guest && (
          <div className=" text-white text-2xl">
            {guests.map((guest) => {
              return (
                <div>
                  <p>Name: {guest.name}</p>
                  <p>Email: {guest.email}</p>
                  <p>Phone: {guest.phone}</p>
                </div>
              );
            })}
          </div>
        )}
        {!approved && !guest && (
          <div className="gap-6 flex flex-col">
            <div>
              <label className=" text-white text-lg">Name:-</label>
              <input
                type="text"
                placeholder="Name (required)"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className=" text-white text-lg">Email:- </label>
              <input
                type="text"
                placeholder="Email (required)"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className=" text-white text-lg">Phone:-</label>
              <input
                type="text"
                placeholder="Phone (optional)"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label className=" text-white text-lg">Will you attend?</label>
              <input type="checkbox" />
            </div>
            <div>
              <button onClick={handleClick}>Submit</button>
            </div>
          </div>
        )}
        {approved && !guest && (
          <div className=" text-white text-2xl">
            <h1>Thank you for your RSVP!</h1>
            <div>
              <h2>Party Details</h2>
              <p>Party Date: 12/12/2021</p>
              <p>Party Time: 12:00 PM</p>
              <p>Party Location: 1234 Main St, Anytown, USA</p>
            </div>
            <button className=" text-black text-xl" onClick={handleClick}>
              New Form
            </button>
          </div>
        )}
        <br />
        <button
          className=" text-black text-xl"
          onClick={(e) => {
            e.preventDefault();
            setGuest(!guest);
          }}
        >
          Guest List
        </button>
      </div>
    </Container>
  );
};

export default PartyRSVP;

const Container = styled.div`
  h1:hover {
    color: green;
  }
  input {
    background: white;
    border: 2px solid gray;
    border-radius: 5px;
    width: 80vw;
  }

  button {
    background: white;
    width: 10vw;
  }
  input[type="checkbox"] {
    background: white;
    width: 3vw;
  }
  button:hover {
    background: green;
  }
`;
