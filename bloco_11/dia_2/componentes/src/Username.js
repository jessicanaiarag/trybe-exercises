import React, { Component } from 'react'
import './UserName.css'
import PropTypes from 'prop-types';

class UserName extends Component {
    render() {
        const name = this.props.name
        return (<span className="name">{name}</span>)
    }
}

UserName.prototype = {
    name: PropTypes.string.isRequired
}

UserName.defaulProps = {
    name: 'Stranger'   
}

export default UserName