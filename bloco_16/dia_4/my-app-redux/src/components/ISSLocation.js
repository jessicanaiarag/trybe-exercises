import React, { Component } from 'react';
import { connect } from 'react-redux';
import Marker from 'pigeon-marker';
import { Map } from 'pigeon-maps'
import { fetchISSLocationWhitThunk } from '../actions';
import Coordinates from '../components/Coordinates';

class ISSLocation extends Component {

    componentDidMount() {
        const { getLocation } = this.props;
        getLocation();
    }

    render() {
        const { latitude, longitude } = this.props;

        return (
            <main>
                <div className="map">
                    <Map
                        center={[0, 0]}
                        defaultWidth={450}
                        height={450}
                        minZoon={1.5}
                        maxZoon={8}
                        zoom={1.5}
                    >
                        <Marker anchor={ [latitude, longitude] } />
                    </Map>
                </div>
                <Coordinates latitude={latitude} longitude={longitude} />
            </main>
        );
    }
}

const mapStateToprops = (state) => ({
    latitude: state.issLocation.latitude,
    longitude: state.issLocation.longitude,
});

const mapDispatchToProps = (dispatch) => ({
   getLocation: () => dispatch(fetchISSLocationWhitThunk()),
});

export default connect(mapStateToprops, mapDispatchToProps)(ISSLocation);