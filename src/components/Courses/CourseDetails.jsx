import { useParams } from 'react-router-dom';
import React, { useState } from 'react'
import { courseList } from "../../data/courses"
import { CirclePlay } from 'lucide-react';
const CourseDetails = () => {
  const { id } = useParams();
  const [selectedId, setSelectedId] = useState(null);
  const [seen, setSeen] = useState(false);
  const course = courseList.find(course => course.id === parseInt(id));
  const selectedLesson = course.lessons.find((lesson) => lesson.id === selectedId)
  const handleLesson = (lessonId) => {
    setSelectedId(selectedId === lessonId ? null : lessonId);
  }
  // const lessons = course ? course[id].lessons : [];
  return (
    <>
      <div className="flex flex-col p-8 lg:flex-row lg:gap-8 xl:max-w-7xl xl:mx-auto">
        <div className="flex-1 my-auto mb-8 overflow-hidden bg-white shadow-lg textGray courseWrapper rounded-xl lg:my-0">
          {selectedLesson ? (
            <div>
            <iframe
              className="w-full h-50 md:h-70 lg:h-85"
              key={selectedLesson}
              src={`https://www.youtube.com/embed/${selectedLesson.videoId}`}
              controls            />
            <div className="p-4 text-lg">{selectedLesson.title}</div>
            </div>
          ) : (
            <div>
              <img
                className="object-cover w-full h-50 md:h-70 lg:h-85"
                src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
                alt={course.title}
              />
              <div className="p-4">
                <h1 className="text-lg ">{course.title}</h1>
                <p className="text-sm">{course.description}</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 detailWrapper">
          {course.lessons && (
            <ul className="space-y-4">
              {course.lessons.map((lesson) => (
                <li
                  onClick={() => handleLesson(lesson.id)}
                  className="flex justify-between w-full p-4 mx-auto text-sm transition-all duration-300 ease-in-out bg-white rounded shadow cursor-pointer textGray hover:transition hover:shadow-lg hover:textPurple focus:textPurple md:text-lg"
                  key={lesson.id}
                >
                  <div className="flex items-center gap-2">
                    <CirclePlay size={20} />
                    <span>{lesson.title}</span>
                  </div>
                  <span>{lesson.duration}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
};
  
export default CourseDetails;

