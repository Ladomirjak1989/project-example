import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'
import HomePage from './Pages/HomePage/HomePage'
import AllDishesPage from './Pages/AllDishesPage/AllDishesPage'
import RandomDishesPage from './Pages/RandomDishesPage/RandomDishesPage'
import AddDishesPage from './Pages/AddDishesPage/AddDishesPage'
import DishesDetailsPage from './Pages/DishesDetailsPage/DishesDetailsPage'
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from 'react-router-dom'
import EditDishesPage from './Pages/EditDishesPage/EditDishesPage'

function App() {

  return (
    <>
      <div className="App">

        <header className='header'>
          <div className='container'>
            <h1 >Midas</h1>

            <Navbar />
          </div>
        </header>
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:dishes" element={<AllDishesPage />} />
            <Route path="/random" element={<RandomDishesPage />} />
            <Route path="/new" element={<AddDishesPage />} />
            <Route path="/:dishes/:dishId" element={<DishesDetailsPage />} />
            <Route path="/update/:dishes/:dishId" element={<EditDishesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

        </div>
      
    </>
  )
}

export default App
