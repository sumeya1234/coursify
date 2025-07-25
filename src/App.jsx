// import { Route, Routes } from 'react-router'
import { Route, Routes } from 'react-router'
import './App.css'
import CourseDetails from './components/Courses/CourseDetails'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
