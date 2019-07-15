import React from 'react';
import {Link} from 'react-router-dom';


const IssuesIndex = (props) => {
    const issues = props.issues.map((issue, i) => (
        <div key={i}>
            <div className='issue-show'>
                <Link to={`/issues/${issue.id}`}> <h3 className='title'> {issue.title}</h3> </Link>{' '}
                <p>{issue.title}</p>
            </div>
        </div>
    ))

    return (
        <div className='issue-box'>
            <h1>100 open issues:</h1>
            {issues}
        </div>
    );

}





export default IssuesIndex;




// const Issues = (props) => {
//     let content = props.issues.map( (issue,i) => <p> {issue.title} - {issue.number}</p>)
//     return content
// }