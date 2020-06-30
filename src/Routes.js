import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signin from "./user/Signin";
import signup from "./user/signup";
import Home from "./Core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import Dashboard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/Addcategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./Core/Shop";
import Product from './Core/Products';
import Cart from './Core/cart';
import orders from './admin/orders'
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/Signin" exact component={Signin} />
        <Route path="/signup" exact component={signup} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <Route path="/product/:productId" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
        <AdminRoute path="/admin/orders" exact component={orders} />
        <PrivateRoute path="/Profile/:userId" exact component={Profile} />
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute path="/admin/Product/update/:productId" exact component={UpdateProduct} />


      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
