import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import Navbars from './components/Routing/layout/Navbar';
import { Store } from './redux/Store';

let App = () => {

  //Props driling concept hook
  // let [app, setApp] = useState({
  //   userInfo : {
  //     author : 'Sathya',
  //     channel : 'Something new'
  //   }
  // });

  return (
    <React.Fragment>

      {/* Not need to Routing module */}
      {/* <nav className="navbar navbr-dark bg-dark navbar-expand-sm">
        <div className="container">
          <a href="/" className="navbar-brand mb-0 h1 text-white">Maya Blogs</a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item px-4">
                <a href="/" className="nav-link">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* ==> Event Binding */}
      {/* <CounterClass/>
      <br></br>
      <Counter/> */}
      {/* <MessageCard/> */}

      {/* ==> Conditinal looping and Component Interactions */}
      {/* <Register/> */}
      {/* <AuthUser/> */}
      {/* <HobbySelector/> */}
      {/* <HobbySelectorRadio/> */}
      {/* <ParentComponent/> */}
      {/* <ParentCard/> */}

      {/* ==> Props-drilling example */}
      {/* <ComponentA userInfo={app.userInfo}/> */}

      {/* ==> useEffect example */}
      {/* <DigitalWatch/> */}

      {/* ==> useContext example */}
      {/* <ComponentOne/> */}

      {/* ==> Http Axios */}
      {/* <UserList/> */}

      {/* ==> Contact App */}
      {/* <ContactApp/> */}

      {/* ==> Github Search App */}
      {/* <GithubSearchApp/> */}

      {/* ==> React Router -concept  */}

      <Provider store={Store}>
        <Navbars />
      </Provider>
    </React.Fragment>
  );
}

export default App;
