import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const user = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    mob_no: phone,
    address: address
  };

  function submitForm(event: { preventDefault: () => void }) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/users/", user)
      .then(() => navigate("/"))
      .catch(() => setErrorMessage("Wrong Data Given!"));
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD USER</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter First Name"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Last Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter Your Email. (Must Be of Valid Email Format. e.g. you@name.com)"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Enter Your Mobile Number. (Must Be 10 Digit. e.g. 7008700870)"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Your Address"
        />
        <button
          className="bg-gray-800 hover:bg-gray-700 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          ADD USER
        </button>
      </form>
      <p className="text-red-600 mt-4">{errorMessage}</p>
    </div>
  );
}

export default Add;
