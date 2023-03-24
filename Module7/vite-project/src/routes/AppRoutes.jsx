import React from 'react';
import { Routes, Route } from "react-router-dom"
import Login from "../components/Login"
import About from "../pages/About"
import EmojiPage from "../pages/EmojiPage"

import Dashboard, {DashboardMessages, DashboardTasks} from "../pages/Dashboard"
import PageNotFound from "../pages/PageNotFound"

//special component containing all the possible routes for this app
//any props passed into AppRoutes will also be passed onto child components using {...props}

function Footer() {
    return (
      <footer>
        <h2>Footer for Nav</h2>
      </footer>
    );
  }

function AppRoutes(props) {

    return (
        <div>
        <Routes>
            {/* nested routes can be used for URLs like /home/tasks or where the parent component needs to render the children */}
            <Route exact path='/' element={<Dashboard {...props} />} >
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>

            <Route path='/about' element={<About {...props} />} />

            <Route path='/login' element={<Login {...props} />} />
            <Route path='/emoji' element={<EmojiPage />} />

            

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />          
        </Routes>
        <Footer />

        </div>
    )
}

//add a footer component to all of the bottom of the pages

export default AppRoutes