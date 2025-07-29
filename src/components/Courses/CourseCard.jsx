import React from 'react'
import { courseList } from '../../data/courses';
import "./courses.css";
import "./../../App.css";
import { Link } from 'react-router-dom';
const CourseCard = ({filter}) => {
  const filteredCourses = courseList.filter(course => 
    filter === "All" || course.category === filter
  )
  return (
    <>
      <div className="py-6 cardContainer">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-7xl xl:mx-auto">
          {filteredCourses.map((course, id) => (
            <Link
              to={`/courses/${course.id}`}
              key={course.id}
              className="overflow-hidden transition-shadow bg-white shadow duration-400 rounded-xl hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
                  alt={course.title}
                  className="relative object-cover w-full h-50"
                />
                <span className="absolute inline-block px-2 py-1 text-sm text-white rounded top-2 right-2 customOrange">
                  {course.category}
                </span>
              </div>
              <div className="p-4 cardContent">
                <span className="text-lg font-bold text-wrap textDark">
                  {course.title}
                </span>
                <p className="flex-1 mt-2 text-sm textGray">
                  {course.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default CourseCard
