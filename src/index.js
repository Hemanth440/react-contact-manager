import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import ContactListComponent from './components/content/contact-list/contact-list.component';
import ContactFormComponent from './components/content/contact-form/contact-form.component';
import Carousel from './components/content/carousal/carousal.component';
import configureStore from './store/configure-store';
import ProductsCarousel from './components/content/products-carousal/product-carousal.component';

// const store = configureStore(thunk);

// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App>
//                 <Switch>
//                     <Route path="/contact-list" component={ContactListComponent} />
//                     <Route path="/contact-form" component={ContactFormComponent} />
//                     <Redirect from="*" to="/contact-list" />
//                 </Switch>
//             </App>
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <ProductsCarousel />,
    document.getElementById('root')
  );
