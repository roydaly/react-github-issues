import React from 'react';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Issues from './Issues';
import IssueShow from './IssueShow';
import Moment from 'react-moment';
import 'moment-timezone';
import ReactMarkdown from 'react-markdown';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


  class App extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        issues: [],
        // issueNumber: [],
    }
}

    // apiSubmit = (e) => {
    componentDidMount() {
        // e.preventDefault();
        axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100').then( result => {
          const issues = result.data;
        //   const issueNumber = result.data.number;
          console.log(issues);
          this.setState({
            issues,
            // issueNumber,
          })
        })
      }

    render() {
        const issues = Array.from(this.state.issues)
        // const issueNumber = Array.from(this.state.issueNumber);
      return (
        <Router>
              <header className="navbar">
                <Link to='/' className='link'> <i className="fab fa-github"></i></Link>{' '}
                <input type="text" placeholder="Search or jump to..."/>
                <Link className="link">Pull requests</Link>{' '}
                <Link to='/Issues' className="link">Issues</Link>{' '}
                <Link className="link">Marketplace</Link>{' '}
                <Link className="link">Explore</Link>{' '}
              </header>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Issues' 
          render={() => <Issues issues={this.state.issues} />}/>
          <Route exact path='/Issues/:id' 
              render={(props) => <IssueShow issues={this.state.issues}{...props}/>}/>
        </Router>
      )
    }
  }


export default App;