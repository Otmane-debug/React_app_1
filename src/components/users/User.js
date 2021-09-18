import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class User extends Component {
    render() {

        const { login, avatar_url, html_url, repos_url } = this.props.user;

        return (
            <div>
                <div className="card">
                            <img class="card-img-top" src={avatar_url} alt="user_avatar" />
                            <div className="card-body">
                                <h4 className="card-title">{login}</h4>
                                <p className="card-text">
                                    <Link className="btn btn-primary" to={'/users/'+login} >Show More</Link>
                                    <Link className="btn btn-warning" to={'/users/'+repos_url} >Repository</Link>
                                </p>
                            </div>
                        </div>
            </div>
        )
    }
}
