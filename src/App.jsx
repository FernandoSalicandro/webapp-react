
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import GuestLayout from './Layout/GuestLayuot'
import Home from './Pages/Home'
import Movie from './Pages/Movies'
import MoviePage from './Pages/MoviePage'
import NotFound404 from './Pages/NotFound404'
import CreateMovie from './Pages/CreateMovie'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movie />} />
            <Route path='/movies/:slug' element={<MoviePage />} />
            <Route path='/create-movie' element={<CreateMovie />} />
            <Route path='*' element={<NotFound404 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
