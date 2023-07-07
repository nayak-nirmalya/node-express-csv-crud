import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { User } from "../../backend/middlewares/validate";

type User = z.infer<typeof User> & { id: string };

function Add() {
  const [user, setUser] = useState<User>({
    first_name: "",
    last_name: "",
    email: "",
    mob_no: "",
    address: "",
    id: ""
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/users/${id}`).then((res) => {
      setUser(res.data.user[0]);
    });

    setFirstName(user.first_name);
    setLastName(user.last_name);
    setEmail(user.email);
    setPhone(user.mob_no);
    setAddress(user.address);
  }, [
    id,
    user.address,
    user.email,
    user.first_name,
    user.last_name,
    user.mob_no
  ]);

  const navigate = useNavigate();

  const updatedUser: z.infer<typeof User> = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    mob_no: phone,
    address: address
  };

  function Update(event: { preventDefault: () => void }) {
    event.preventDefault();
    axios
      .patch(`http://localhost:3000/api/v1/users/${id}`, updatedUser)
      .then(() => navigate("/"))
      .catch(() => setErrorMessage("Wrong Data Given!"));
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Edit User Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Your First Name"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter Your Last Name"
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
          onClick={Update}
        >
          UPDATE USER
        </button>
      </form>
      <p className="text-red-600 mt-4">{errorMessage}</p>
    </div>
  );
}

export default Add;
