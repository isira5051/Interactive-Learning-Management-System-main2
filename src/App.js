import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';
import Admin from './routes/Admin';
import User from "./routes/User";
import Librarian from "./routes/Librarian";
import AddBook from "./routes/AddBook";
import UserList from './routes/UserList';
import UsersList from './routes/UsersList';
import BookList from './routes/BookList';
import Login from './routes/Login';
import BookView from './routes/BookView';
import Forum from './components/Forum/Forum';
import Profile from './routes/Profile';
import BookHistory from './routes/BookHistory';
import CommonForum from './routes/CommonForum';
import RequestList from './routes/RequestList';
import LibrarianData from './routes/LibrarianData';
import RemovePosts from './routes/RemovePosts';
import Notification from './routes/Notification';
import Reports from './routes/Reports';
import ReportMostReadBooks from './routes/ReportMostReadBooks';
import ReportOverdueReturns from './routes/ReportOverdueReturns';
import ReportUserFines from './routes/ReportUserFines';
import PrivateRoute from './routes/utils/PrivateRoute';
import Access from './routes/utils/Access';
import BookReturns from './components/Librarian/BookReturns';
function App() {
  
  return (
    <>
  
      <Router>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/service' element={<Service/>}/>
           <Route path='/contact' element={<Contact/>}/>
           
          
           <Route path='/login' element={<Login/>}/>

           {/* <Route path='/admin' element={<Admin/>}/>
           <Route path='/admin/users' element={<UsersList/>}/>
           <Route path='/admin/librarians' element={<LibrarianData/>}/>
           <Route path='/admin/forum' element={<RemovePosts/>}/>
           <Route path='/admin/reports' element={<Reports role="admin"/>}/>
           <Route path='/admin/reports/mostreadbooks' element={<ReportMostReadBooks role="admin"/>}/>
           <Route path='/admin/reports/overduereturns' element={<ReportOverdueReturns role="admin"/>}/>
           <Route path='/admin/reports/userfines' element={<ReportUserFines role="admin"/>}/> */}
           
<Route path='/admin' element={<PrivateRoute allowedRoles={Access.Admin}><Admin/></PrivateRoute>} />
<Route path='/admin/users' element={<PrivateRoute allowedRoles={Access.UserList}><UsersList/></PrivateRoute>} />
<Route path='/admin/librarians' element={<PrivateRoute allowedRoles={Access.LibrarianData}><LibrarianData/></PrivateRoute>} />
<Route path='/admin/forum' element={<PrivateRoute allowedRoles={Access.CommonForum}><RemovePosts/></PrivateRoute>} />
<Route path='/admin/reports' element={<PrivateRoute allowedRoles={Access.Reports}><Reports role="admin"/></PrivateRoute>} />
<Route path='/admin/reports/mostreadbooks' element={<PrivateRoute allowedRoles={Access.ReportMostReadBooks}><ReportMostReadBooks role="admin"/></PrivateRoute>} />
<Route path='/admin/reports/overduereturns' element={<PrivateRoute allowedRoles={Access.ReportOverdueReturns} ><ReportOverdueReturns role="admin"/></PrivateRoute>} />
<Route path='/admin/reports/userfines' element={<PrivateRoute allowedRoles={Access.ReportUserFines} ><ReportUserFines role="admin"/></PrivateRoute>} />

           {/* <Route path='/librarian' element={<Librarian/>}/>
           <Route path='/librarian/addbook' element={<AddBook/>}/>
           <Route path='/librarian/userlist' element={<UserList/>}/>
           <Route path='/librarian/booklist' element={<BookList/>}/>
           <Route path='/librarian/requestlist' element={<RequestList/>}/>
           <Route path='/commonforum' element={<CommonForum/>}/>
           <Route path='/librarian/reports' element={<Reports role="librarian"/>}/>
           <Route path='/librarian/reports/mostreadbooks' element={<ReportMostReadBooks role="librarian"/>}/>
           <Route path='/librarian/reports/overduereturns' element={<ReportOverdueReturns role="librarian"/>}/>
           <Route path='/librarian/reports/userfines' element={<ReportUserFines role="librarian"/>}/> */}
            <Route path='/librarian' element={<PrivateRoute allowedRoles={Access.Librarian}><Librarian/></PrivateRoute>} />
            <Route path='/librarian/addbook' element={<PrivateRoute allowedRoles={Access.AddBook}><AddBook/></PrivateRoute>} />
            <Route path='/librarian/returns' element={<PrivateRoute allowedRoles={Access.BookReturns}><BookReturns/></PrivateRoute>} />
            <Route path='/librarian/userlist' element={<PrivateRoute allowedRoles={Access.UserList}><UserList/></PrivateRoute>} />
            <Route path='/librarian/booklist' element={<PrivateRoute allowedRoles={Access.BookList}><BookList/></PrivateRoute>} />
            <Route path='/librarian/requestlist' element={<PrivateRoute allowedRoles={Access.RequestList}><RequestList/></PrivateRoute>} />
            <Route path='/commonforum' element={<PrivateRoute allowedRoles={Access.CommonForum}><CommonForum/></PrivateRoute>} />
            <Route path='/librarian/reports' element={<PrivateRoute allowedRoles={Access.Reports}><Reports role="librarian"/></PrivateRoute>} />
            <Route path='/librarian/reports/mostreadbooks' element={<PrivateRoute allowedRoles={Access.ReportMostReadBooks}><ReportMostReadBooks role="librarian"/></PrivateRoute>} />
            <Route path='/librarian/reports/overduereturns' element={<PrivateRoute allowedRoles={Access.ReportOverdueReturns} ><ReportOverdueReturns role="librarian"/></PrivateRoute>} />
            <Route path='/librarian/reports/userfines' element={<PrivateRoute allowedRoles={Access.ReportUserFines} ><ReportUserFines role="librarian"/></PrivateRoute>} />

           <Route path='/user' element={
            <PrivateRoute allowedRoles={Access.User}>
               <User/>
            </PrivateRoute>
          }/>
           <Route path="user/book/:id" element={
           <PrivateRoute allowedRoles={Access.BookView}><BookView/></PrivateRoute>}/>
           
           <Route path='/commonforum' element={
           <PrivateRoute allowedRoles={Access.Forum}><Forum/></PrivateRoute>}/>
           
           <Route path='/Profile' element={ <PrivateRoute allowedRoles={Access.Profile}><Profile/></PrivateRoute>}/>
           <Route path='/bookhistory' element={
            <PrivateRoute allowedRoles={Access.BookHistory}><BookHistory/></PrivateRoute>}/>
           <Route path='/notification' element={
            <PrivateRoute allowedRoles={Access.Notification}><Notification/></PrivateRoute>}/>

        </Routes>
      </Router>
    
    </>
  );
}

export default App;
