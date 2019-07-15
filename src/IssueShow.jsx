import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router-dom';

const IssueShow = (props) => {
    let issue = props.issues.find((issue) => {
        return issue.id === parseInt(props.match.params.id)

    })
    return (
        <div className='issue-show'>
            <h3>{issue.title}</h3>
            <h3>#{issue.id}</h3>
            <ReactMarkdown source={issue.body}/>
            <p>Created: {moment(issue.created_at).format('ll')}</p>
            <Link to='/'>Go Home!</Link> | <Link to='/Issues'>Go Back To Issues!</Link>
        </div>
    )
    
}

export default IssueShow;