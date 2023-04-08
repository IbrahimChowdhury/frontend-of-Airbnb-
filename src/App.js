import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Layout from './components/layout/layout'
import RegisterForm from './components/register/RegisterForm'
import Login from "./components/login/LoginForm"
import Account from './components/account/account'
import PlaceForm from './components/account/places/placesComponent/placeForm'
import IndexPage from './components/index/indexPage'
import "./css/main.css"
import axios from 'axios'
import { UserContextprovider } from './components/useContext/userContext'
import PlacesPage from './components/account/places/placesPage'
import PlacePage from './components/account/places/placePage'
import BookingsPage from './components/account/bookingsPage'
import BookingPage from './components/account/bookingPage'
import DeletePlace from './components/account/places/placesComponent/deletePlace'
import DeleteBookings from './components/account/places/placesComponent/deleteBookings'
// axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.baseURL = "https://airbnbhotels.up.railway.app"
axios.defaults.withCredentials=true
function App() {
  return (
    <div className='main'>


      <UserContextprovider>
        <Routes>


          <Route  element={<Layout />}>

              <Route path='/' element={<IndexPage/>} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/account' element={<Account/>} />
            <Route path='/account/places' element={<PlacesPage/>} />
            <Route path='/account/places/new' element={<PlaceForm/>} />

            <Route path='/account/places/:id' element={<PlaceForm/>} />
            <Route path='/places/:id'  element={<PlacePage/>} />
            <Route path='/account/booking' element={<BookingsPage/>} />
            <Route path='/account/booking/:id' element={<BookingPage/>} />
            <Route path='/account/places/delete/:id' element={<DeletePlace/>} />
            <Route path='/account/booking/delete/:id' element={<DeleteBookings/>} />
          </Route>

        </Routes>

      </UserContextprovider>



    </div>
  )
}

export default App