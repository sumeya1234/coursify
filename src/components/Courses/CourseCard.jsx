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
            <Link to={`/courses/${course.id}`}
              key={course.id}
              className="overflow-hidden transition-shadow bg-white shadow duration-400 rounded-xl hover:shadow-xl"
            >
              <img
                src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
                alt={course.title}
                className="object-cover w-full h-50"
              />
              <div className="p-4 cardContent">
                <p className="text-lg font-bold textDark">{course.title}</p>
                <p className="text-sm text-gray-600 ">{course.category}</p>
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
