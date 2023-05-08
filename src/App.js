import React from 'react';
// import { Counter } from './features/counter/Counter';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
import Login from './Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(loginuser({
          email: userAuth.email,
          uid: userAuth.uid,
          photoURL: userAuth.photoURL,
          displayName: userAuth.displayName
        }))
      }
      else {

      }
    })
  }, [])

  return (
    <>
      {
        !user ? (<Login />) : (
          <div className="app_wrapper">
            <Header />
            <div className="app_body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </div>
        )
      }
    </>
  );
}


export default App;
