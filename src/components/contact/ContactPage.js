import React from 'react'
import {
    Route,
    Link,
} from 'react-router-dom';

const ContactPage = ({ match }) => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3">My Contacts</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul>
                            { /*use ~button to add double ` to build the link*/}
                            <li><Link to={`${match.url}/email`}>Email</Link></li>
                            <li><Link to={`${match.url}/phone`}>Phone</Link></li>
                            <li><Link to={`${match.url}/wechat`}>WeChat</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        {/*// *use ~button to add double ` to build the link**/}
                        <Route path={`${match.path}/email`} render={() => { return <h1>Emails</h1> }}/>
                        <Route path={`${match.path}/phone`} render={() => { return <h1>Phone</h1> }}/>
                        <Route path={`${match.path}/wechat`} render={() => { return <h1>WeChat</h1> }}/>
                        <Route path={`${match.path}/:id`} component={Child} />
                    </div>
                </div>
            </div>
        </div>
    );
}


const Child = ({ match }) => (
    <div>
        <h3>URL ID parameter: {match.params.id}</h3>
    </div>
);

export default ContactPage;