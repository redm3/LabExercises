import React from 'react';
import { Routes, Route } from "react-router-dom"
import Login from "../components/Login"
import About from "../pages/About"
import Dashboard, {DashboardMessages, DashboardTasks} from "../pages/Dashboard"
import PageNotFound from "../pages/PageNotFound"
import Home from '../pages/Home';
import PostsPage from '../pages/PostsPage';
import StudentDetails from "../components/StudentDetails"
import Students from "../pages/Students"
import StudentList from "../components/StudentList"
import LoginMUI from '../components/LoginMUI';
import BlogPost from '../components/BlogPost';
import BlogPostForm from '../components/BlogPostForm';
import BlogPostList from '../components/BlogPostList';
import BlogPage from '../pages/BlogPage';



//special component containing all the possible routes for this app
//any props passed into AppRoutes will also be passed onto child components using {...props}

function AppRoutes(props) {

    return (
        <Routes>
            {/* nested routes can be used for URLs like /home/tasks or where the parent component needs to render the children */}
            <Route path='/home' element={<Home {...props} />} />

            <Route path='/dashboard' element={<Dashboard {...props} />} >
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>

            <Route path='/about' element={<About {...props} />} />

            <Route path='/login' element={<Login {...props} />} />
            <Route path='/LoginMUI' element={<LoginMUI {...props} />} />

            <Route path='/posts' element={<PostsPage />} />
            
            <Route path='/blogpost' element={<BlogPage/>} />

            <Route path='/students' element={<Students {...props} />}>
                <Route index element={<StudentList />} />
                <Route path=":studentid" element={<StudentDetails />}/>
            </Route>  


            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />          
        </Routes>
    )
}

//add a footer component to all of the bottom of the pages

export default AppRoutes