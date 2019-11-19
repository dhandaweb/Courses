import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './_features/store/store';
import './index.css';
import RecipeListingComp from './_features/components/RecipeListingComp';
import CourseList from './_features/components/CourseList';
import './_features/components/RecipeListing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {register} from './serviceWorker';
ReactDOM.render(
 <Provider store={configureStore()}>
  <CourseList />
 </Provider>,
 document.getElementById('root')
);
register();