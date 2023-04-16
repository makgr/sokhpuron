import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';
import AboutPage from '../pages/AboutPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} />} />
          <Route exact path="/login" render={(props) => <UserLoginPage {...props} key={Date.now()} />} />
          <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} />} />
          <Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} />} />
          <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} />} />
          <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} />} />
          <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} />} />
          <Route exact path="/productdetails/:code" render={(props) => <ProductDetailsPage {...props} key={Date.now()} />} />
          <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} />} />
          <Route exact path="/favourite" render={(props) => <FavouritePage {...props} key={Date.now()} />} />
          <Route exact path="/cart" render={(props) => <CartPage {...props} key={Date.now()} />} />
          <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} />} />
          <Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductSubCategoryPage {...props} key={Date.now()} />} />

        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute