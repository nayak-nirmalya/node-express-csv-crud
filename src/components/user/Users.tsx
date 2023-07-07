import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import { User } from "../../backend/middlewares/validate";

type User = z.infer<typeof User> & { id: string };

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/users/${id}`).then((res) => {
      setUser(res.data.user[0]);
    });
  }, [id]);

  return (
    <>
      <div className="h-full w-full flex flex-col mt-8 justify-center items-center">
        <Link
          to={`/`}
          className="hover:bg-gray-200 bg-white hover:shadow-md outline-none rounded-xl font-bold border mt-8 text-black border-zinc-400 py-2 px-4 pl-4"
        >
          Back To Home
        </Link>
        {user && (
          <div className="w-[800px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-gray-700 mt-16 border-white border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-gray-300 font-bold text-3xl">First Name</h2>
              <h2 className="text-gray-300 font-bold text-3xl">Last Name</h2>
              <h2 className="text-gray-300 font-bold text-3xl">Email</h2>
              <h2 className="text-gray-300 font-bold text-3xl">Phone</h2>
              <h2 className="text-gray-300 font-bold text-3xl">Address</h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-white font-bold text-3xl">
                {user.first_name}
              </h2>
              <h2 className="text-white font-bold text-3xl">
                {user.last_name}
              </h2>
              <h2 className="text-white font-bold text-3xl">{user.email}</h2>
              <h2 className="text-white font-bold text-3xl">{user.mob_no}</h2>
              <h2 className="text-white font-bold text-3xl">{user.address}</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
