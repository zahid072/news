import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleNews from "../singleNews/SingleNews";

const LeftNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);
  
  return (
    <div className="">
      <h1 className="text-center text-xl font-bold">All Category</h1>
       <div className=" pl-6 mt-6">
        {
            category.map(categoryName =>(
                <Link key={categoryName.id} to={`/category/${categoryName.id}`} className="block hover:bg-slate-100 px-4 py-3 rounded-lg">{categoryName.name}</Link>
            ))
          
        }
   
       </div>
      
    </div>
  );
};

export default LeftNav;
