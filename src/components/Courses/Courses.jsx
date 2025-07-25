import React, { useState } from 'react'
import "./courses.css";
import CourseCard from './CourseCard';
const Courses = () => {
  const [filter, setFilter] = useState("All");
  const filterCourses = (category) => {
    setFilter(category);
  }
  
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
          <button onClick={() => filterCourses("All")} className="filterButton">
            All
          </button>
          <button
            onClick={() => filterCourses("Business")}
            className="filterButton"
          >
            Business
          </button>
          <button
            onClick={() => filterCourses("Development")}
            className="filterButton"
          >
            Development
          </button>
          <button onClick={() => filterCourses("Design")} className="filterButton">
            Design
          </button>
        </div>
        <CourseCard filter={filter} />
      </div>
    </>
  )
}

export default Courses