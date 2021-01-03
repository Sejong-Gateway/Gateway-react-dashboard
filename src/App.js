import React from 'react';
import {Route} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import LogInPage from './pages/LogInPage';
import UserListPage from './pages/UserListPage';
import SubjectPage from './pages/SubjectPage';

const GlobalStyle = createGlobalStyle`
  h1{
    margin:0;
    padding:0;
    font-size: 30px;
    font-weight: bold;
    color: #707070;
  }
  h2{
    margin:0;
    padding:0;
    font-size: 20px;
    font-weight: bold;
    color: #707070;
  }
  h3{
    margin:0;
    padding:0;
    font-size: 19px;
    font-weight: bold;
    color: #707070;
  }
  h4{
    margin:0;
    padding:0;
    font-size: 18px;
    font-weight: bold;
    color: #707070;
  }
`;
function App() {
  return (
    <>
    <GlobalStyle/>
    <Route exact component = {LogInPage} path ='/logIn'></Route>
    <Route exact component = {UserListPage} path ='/user'></Route>
    <Route exact component = {SubjectPage} path ='/subject'></Route>
    </>
  );
}

export default App;
