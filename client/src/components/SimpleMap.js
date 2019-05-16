import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
    center: {
    lat: 31.4638,
    lng: -96.0580
    },
    zoom: 8
};


render() {
    return (
      // Important! Always set the container height explicitly
    <div style={{ height: '90vh', width: '90%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBNjK-4QEbG4WDz58VnROVulgwJL4Lz4jE" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
        <AnyReactComponent
            lat={32.76923}
            lng={-96.80188}
            text="#"
        />
        <AnyReactComponent
            lat={31.4638}
            lng={-96.0580}
            text="#"
        />
        <AnyReactComponent
            lat={32.7689}
            lng={-96.80161}
            text="#"
        />
        <AnyReactComponent
            lat={32.76858}
            lng={-96.80136}
            text="#"
        />
        <AnyReactComponent
            lat={32.76547}
            lng={-96.79871}
            text="#"
        />
        <AnyReactComponent
            lat={32.76085}
            lng={-96.79085}
            text="#"
        />
        <AnyReactComponent
            lat={32.74977}
            lng={-96.77262}
            text="#"
        />
         <AnyReactComponent
            lat={32.73795}
            lng={-96.76711}
            text="#"
        />
         <AnyReactComponent
            lat={32.76547}
            lng={-96.79871}
            text="#"
        />
         <AnyReactComponent
            lat={32.76547}
            lng={-96.79871}
            text="#"
        />
         <AnyReactComponent
            lat={32.76547}
            lng={-96.79871}
            text="#"
        />
         <AnyReactComponent
            lat={32.76547}
            lng={-96.79871}
            text="#"
        />

        </GoogleMapReact>
    </div>
    );
    }
}

export default SimpleMap;