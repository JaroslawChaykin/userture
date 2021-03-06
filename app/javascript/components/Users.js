import React from "react"
import PropTypes from "prop-types"

class Users extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'users'}>
                    <h1>All Users</h1>
                    <ul>
                        {this.props.users.map(user => (
                            <li key={user.id}>{`${user.id} ${user.email} ${user.isadmin} ${user.username}`} </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.array
};
export default Users