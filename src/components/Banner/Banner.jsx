import React from 'react'
import { Button } from '../ui/button'

const Banner = () => {
  return (
    <>
      <div className="flex-row m-8 wrapper md:flex">
        <div className="flex-1 banner-left-side">
          <p className="inline-block p-3 text-sm font-normal text-red-500 bg-white rounded">
            Never Stop Learning
          </p>
          <h1 className="my-4 text-4xl font-bold leading-relaxed">
            Grow up your skills by online courses with Coursify
          </h1>
          <p className="text-2xl font-light leading-relaxed">
            Coursify is a Global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush the
            barriers togetting a degree.
          </p>
          <Button className="px-6 py-2 mt-4 text-white bg-blue-500 rounded text-md font-extralight">
            Start Learning
          </Button>
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