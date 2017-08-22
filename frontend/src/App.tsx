import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './screens/LoginScreen/UserLogin';
import AdminLogin from './screens/LoginScreen/AdminLogin';
import SignUp from './screens/SignUpScreen/SignUp';
import PrivateRoute from './PrivateRoute';
import UserDashboard from './screens/UserScreen/UserDashboard';
import Facility from './screens/UserScreen/Facility';
import AdminDashboard from './screens/AdminScreen/AdminDashboard';
import AdminFacility from './screens/AdminScreen/AdminFacility';
import ForgotPassword from './screens/ForgotPasswordScreen/ForgotPassword';
import ResetPassword from './screens/ForgotPasswordScreen/ResetPassword';


export default class App extends React.Component<any, any> {

  render() {

    return (
      <div>
        <Router>
          <div>

            <Route exact path="/" component={Login} />
            <Route path="/adminLogin" component={AdminLogin} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/resetPassword" component={ResetPassword} />
            <Route path="/userDashboard" component={UserDashboard}/>
            <Route path="/facility" component={Facility}/>
            <Route path="/adminDashboard" component={AdminDashboard}/>
            <Route path="/adminFacility" component={AdminFacility}/>

            {/* <Route path="/calendar" component={PrivateRoute(Sample, [''])} /> */}
          
          </div>

        </Router>

      </div >
    );
  }
}


