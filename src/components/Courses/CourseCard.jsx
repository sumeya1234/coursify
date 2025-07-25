import React from 'react'
import { courseList } from '../../data/courses';
const CourseCard = ({filter}) => {
  const filteredCourses = courseList.filter(course => 
    filter === "All" || course.category === filter
  )
  return (
    <>
      <div className="cardContainer">
        <div className="wrapper">
          {filteredCourses.map((course, id) => (
            <div key={id}>
              <p>Name : {course.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CourseCard
