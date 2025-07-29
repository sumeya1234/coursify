import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="flex-row m-8 md:flex xl:max-w-6xl xl:mx-auto">
        <div className="flex-1 banner-left-side">
          <p className="inline-block p-3 text-sm font-normal text-red-500 bg-white rounded">
            Never Stop Learning
          </p>
          <h1 className="my-4 text-4xl font-bold leading-relaxed textDark">
            Grow up your skills by online courses with Coursify
          </h1>
          <p className="text-2xl font-light leading-relaxed textGray">
            Learn new skills with short, focused online courses tailored for
            you. Join thousands of students already transforming their careers.
          </p>
          <button className="px-6 py-2 my-4 text-white transition duration-300 ease-in-out rounded cursor-pointer customPurple text-md font-extralight hover:shadow-lg hover:transform hover:scale-102">
            Start Learning
          </button>
        </div>
        <div className="flex-1 my-4 banner-right-side">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Banner