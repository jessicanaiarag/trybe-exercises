import React, { Component } from 'react';


class Coordinates extends Component {

    render() {
        const { latitude, longitude } = this.props;

        return (
            <div>
                {latitude} - {longitude}
            </div>
        );
    }
}

export default Coordinates;