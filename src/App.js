import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer";
import TopMenu from "./Pages/Shared/TopMenu";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import SingUp from "./Pages/Login/Login/SingUp";
import AuthProvider from "./context/AuthProvider";
import SelectedItem from "./Pages/Home/SelectedItem/SelectedItem";
import Cart from "./Pages/Home/Cart/Cart";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";



function App() {
  return (
    <div>
     <AuthProvider>
     <Router>
        <TopMenu />

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/item/:itemId'>
              <SelectedItem></SelectedItem>
          </Route>
          <PrivateRoute exact path='/cart'>
            <Cart></Cart>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/singUp'>
            <SingUp></SingUp>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer />
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
