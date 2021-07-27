import React, { Component } from "react";

class Select extends Component {

    render() {

        const { name, label, value, handleChange, options } = this.props;

        return (
            <section>
                <label>{label}</label>
                <select
                    name={name}
                    value={value}
                    onChange={handleChange}
                >
                    <option value=""  ></option>
                    {options.map(option =>
                        <option key={option} value={option}>{option}</option>
                    )}
                </select>
            </section>
        )
    }
}

export default Select;