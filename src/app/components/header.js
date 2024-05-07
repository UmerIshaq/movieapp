"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const [searchText, setSearchText] = useState(""); // Initialize with an empty string
  const router=useRouter();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(searchText){
      router.push(`/movies/search?query=${searchText}`)
    }
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark p-3">
        <div className="container">
        <Link className="navbar-brand" href={{ pathname: '/' }} style={{fontSize:"1.5rem"}}><b>Movies DB</b></Link>
          <form onSubmit={(e)=>handleSubmit(e)} className="d-flex">
            <input 
              onChange={(e)=>setSearchText(e.target.value)} 
              className="form-control me-2" 
              // type="search" 
              placeholder="Search" 
              aria-label="Search"
            />
            <button className="btn btn-primary btn-outline-white" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Header; // Remove the parentheses
