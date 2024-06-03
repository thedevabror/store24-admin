import React from "react";
import { CreateLinks } from "../data";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-center">Nima yaratamiz?</h1>
      </div>
      <div className="grid grid-cols-4 gap-5 py-10">
        {CreateLinks.map((item) => (
          <Link to={item.link} className="flex items-center justify-around py-3 px-5 border rounded-md hover:shadow">
            <div>{item.icon}</div>
            <div>
              <h1>{item.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Create;
