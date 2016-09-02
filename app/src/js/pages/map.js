// React dependencies
import React from 'react';

// Map Dependencies
import GoogleMap from 'google-map-react';

// App dependencies
import googleMapsApiKey from '../config/key';

class MapPage extends React.Component {
    render() {
        const config = {
            center: {
                lat: 44,
                lng: -38
            },
            zoom: 1
        }
        return (
            <main className="mapPage">
                <h2 className="visuallyHidden">Map</h2>
                <GoogleMap
                    defaultCenter={ config.center }
                    defaultZoom={ config.zoom }
                    onGoogleApiLoaded={ ({map, maps}) => this.props.getLocation(this, map, maps) }
                    bootstrapURLKeys={{
                        key: googleMapsApiKey,
                        language: 'en'
                    }}
                />
                { /*<section>
                    <form>
                        <h2>Add a new category</h2>
                        <label htmlFor="categoryName">Category name:</label>
                        <input type="text" name="categoryName" id="categoryName" />
                        <input type="submit" value="Add Category" />
                    </form>
                    <form>
                        <h2>Add a new place</h2>
                        <label htmlFor="placeName">Place name:</label>
                        <input type="text" name="placeName" id="placeName" />
                        <input type="submit" value="Add place" />
                    </form>
                </section> */ }
            </main>
        )
    }
}
{ /* <p>There are many icons to chose from. <a href="http://map-icons.com/#icons">Click here to see the full list of icons</a>.</p> */ }

export default MapPage;