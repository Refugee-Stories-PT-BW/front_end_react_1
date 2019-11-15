import React from 'react';
// import './App.css';
import { Link, Route } from 'react-router-dom'

//Components
import PageHeader from './components_stories/PageHeader';
import FormA from './components_stories/FormA';
import PageHeaderPhoto from  './components_stories/PageHeaderPhoto';
import FormWrapper from './components_stories/FormWrapper'
import SubmissionField from './components_stories/SubmissionField'
import CommentBox from './components_stories/CommentBox'
import Login_formA from './components_login/Login_formA'

function App() {
  return (
    <div>
      <Route path='/' render={PageHeader} />
      <Route path='/yourstory' render={FormWrapper} />
      <Login_formA />

    </div>
  );
}

export default App;

