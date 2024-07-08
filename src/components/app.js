// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Register from './components/Register';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/products" component={ProductList} roles={['buyer', 'seller']} />
          {/* Add more protected routes as needed */}
          <Route path="/" component={ProductList} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
