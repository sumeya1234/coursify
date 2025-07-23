import React from 'react'
import "./courses.css";
const Courses = () => {
  return (
    <>
      <div className="p-8 wrapper">
        <div>
          <h1 className="text-4xl font-bold text-center textDark">
            Explore Our Courses
          </h1>
          <p className="mt-4 text-xl font-light text-center textGray">
            Discover our most popular courses with real video content from
            industry experts
          </p>
        </div>
        <div className="flex justify-center gap-4 my-5 button-wrapper">
          <button className="filterButton">All</button>
          <button className="filterButton">Business</button>
          <button className="filterButton">Development</button>
          <button className="filterButton">Design</button>
        </div>
      </div>
    </>
  )
}

export default Courses