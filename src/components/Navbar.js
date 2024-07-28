import React, { useState } from "react";
import logo from "../assets/images/NeuzNook..svg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const categories = [
    { id: 1, title: "Home", linkTo: "/" },
    { id: 2, title: "Sports", linkTo: "/sports" },
    { id: 3, title: "Health", linkTo: "/health" },
    { id: 4, title: "Business", linkTo: "/business" },
    { id: 5, title: "Entertainment", linkTo: "/entertainment" },
    { id: 6, title: "Science", linkTo: "/science" },
    { id: 8, title: "Tech", linkTo: "/technology" },
  ];
  const [query, setQuery] = useState('');

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      props.getQuery(query);
    }

  }
  const onInputChange = (e) => {
    setQuery(e.target.value);
  }
  const handleQuery = () => {
    props.getQuery(query);
  }
  return (
    <nav className="bg-slate-600 sticky top-0 z-10">
      <div className=" flex w-4/5 m-auto items-center justify-between py-3">
        <div className="logo w-28 invert">
          <img src={logo}></img>
        </div>
        <ul className="menu-items flex gap-8 text-white">
          {categories.map((category) => {
            return (
              <li key={category.id} className="hover:text-gray-300">
                <NavLink className={({isActive}) => isActive ? 'text-red-400' : "text-inherit"} to={category.linkTo}>{category.title}</NavLink>
              </li>
            );
          })}
        </ul>
        <div className="bg-slate-500 w-64 h-8 rounded-full flex items-center justify-center">
            <input onChange={onInputChange} placeholder="Search" className="bg-transparent px-4 text-white outline-none" onKeyDown={handleKeyDown}/>
            <FaMagnifyingGlass onClick={handleQuery} className="cursor-pointer text-lg text-white hover:text-gray-300"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
