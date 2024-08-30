// import React from "react";

// import Footer from "./Footer";
// import {
//   createBrowserRouter, 
//   createRoutesFromElements,
//   Route, 
//   RouterProvider
// } from 'react-router-dom'
// import "./App.css";
// import LoginForm from "./LoginForm";
// import RegisterForm from './RegisterForm'; 
// import Home from './Home';
// import Sections from './Sections';
// import Certificate from './Certificate_pages/Certificate';
// import Certificaterequest from "./Certificate_pages/Certificaterequest";
// import Studentpage from './Studentpage';



// import './data/firebase';
// import { getFirestore } from 'firebase/firestore';


// const db = getFirestore();


// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//     <Route path ="/"   >
//       <Route index element={<Home />} />
//       <Route path="/sections" element={<Sections />} />
//       <Route path="/register" element={<RegisterForm db={db} />} />
//       <Route path="/login" element={<LoginForm db={db} />} >
//         <Route path="student-page" element={<Studentpage />} />
//       </Route>
//         <Route path="/certificate"  >  
//           <Route index element={<Certificate/>} />
//           <Route path = "certificate-request" element={<Certificaterequest />} />
//         </Route>
//     </Route >
//   )
// )




// function App() {
 
//   return (
//     <div className="App">
//       <main className="main-content">
//         <RouterProvider router={router}/>
//       </main>
//       <Footer/>
//     </div>
//   );
// }
// export default App




import React, { useState } from 'react';
import Footer from "./Footer";
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import "./App.css";
import LoginForm from "./LoginForm";
import RegisterForm from './RegisterForm'; 
import Home from './Home';
import Sections from './Sections';
import Certificate from './Certificate_pages/Certificate';
import Certificaterequest from "./Certificate_pages/Certificaterequest";
import Studentpage from './Studentpage';



import './data/firebase';
import { getFirestore } from 'firebase/firestore';

const db = getFirestore();

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" >
      <Route index element={<Home />} />
      <Route path="/sections" element={<Sections />} />
      <Route path="/register" element={<RegisterForm db={db} />} />
      <Route path="/login" element={<LoginForm db={db} />} />

      <Route path="/student-page" element={<Studentpage />}>
          <Route path="/student-page/certificate" element={<Certificate />}>
              <Route path="certificat/student-page/certificatee-request" element={<Certificaterequest />} />
          </Route>
      </Route>
    </Route>

    )
  );

  return (
    <div className="App">
      <main className="main-content">
        <RouterProvider router={router}/>
      </main>
      <Footer  />
    </div>
  );
}

export default App;
