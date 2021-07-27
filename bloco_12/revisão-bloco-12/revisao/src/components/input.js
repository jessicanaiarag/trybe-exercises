import React, { Component } from "react";
import Proptypes from 'prop-types'

class Input extends Component {

    render() {

        const { label, name, type, value, handleChange } = this.props;

        return (
            <section>
                <label>{label}</label>
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    Required={isRequired}
                />
            </section>

        )
    }
}

Input.Proptypes = {
    label: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    type: Proptypes.string.isRequired,
    value: Proptypes.string.isRequired,
    handleChange: Proptypes.func.isRequired,
    isRequired: Proptypes.bool,
}

Input.defaulProps = {
    isRequired:false
}


export default Input;