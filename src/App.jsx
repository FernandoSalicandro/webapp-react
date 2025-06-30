
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import GuestLayout from './Layout/GuestLayuot'
import Home from './Pages/Home'
import Movie from './Pages/Movies'
import MoviePage from './Pages/MoviePage'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movie />} />
            <Route path='/movies/:slug' element={<MoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
