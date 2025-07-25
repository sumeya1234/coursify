import { useParams } from 'react-router-dom';
import React from 'react'
import { courseList } from "../../data/courses"

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseList.find(course => course.id === parseInt(id));
  return (
    <>
      <div>
        <h1>{course.title}</h1>
        <img
          src={`https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`}
          alt={course.title}
        />
        <p>{course.description}</p>
      </div>
    </>
  )
};
  
export default CourseDetails;

