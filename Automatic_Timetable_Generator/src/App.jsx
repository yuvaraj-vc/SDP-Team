import React from 'react'
// import { AnimatedGridPatternDemo } from './components/AnimatedGridPatternDemo'
// import Login from './pages/Shared/Login'
// import { MeteorDemo } from './components/meteroids'
// import Register from './pages/Shared/Register'
// import { ModeToggle } from './components/trigger'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import Notfound from './pages/Shared/Notfound'
import Sharedlayout from './layout/Sharedlayout'
import UserDashboard from './pages/User/UserDashboard'
import Adminlayout from './layout/Adminlayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminUsers from './pages/Admin/AdminUsers'
import Userlayout from './layout/Userlayout'
import UserSubject from './pages/User/UserSubject'
import UserClass from './pages/User/UserClass'
// import UserDashboard from './pages/User/UserDashboard'
 
const App = () => {
  return (
    //   <div className='h-screen w-screen flex items-center justify-center'>
    //   {/* <AnimatedGridPatternDemo/> */}
    //   {/* <Login/> */}
    //   {/* <ModeToggle/> */}
    
    //   <Register/>
    // </div>
    
    <>
    {/* <MeteorDemo/> */}
    <BrowserRouter>
      <Routes>
        <Route element={<Sharedlayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          </Route>


          <Route element={<Adminlayout/>}>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
            <Route path='/admin/users' element={<AdminUsers/>}/>
          </Route>

          <Route element={<Userlayout/>}>
            <Route path='/user/dashboard' element={<UserDashboard/>}/>
            <Route path='/user/subjects' element={<UserSubject/>}/>
            <Route path='/user/class' element={<UserClass/>}/>
          </Route>

          <Route path='*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

