// React dependencies
import React from 'react';

class MapPage extends React.Component {
    render() {
        return (
            <main>
                <section>
                    <h2>Map</h2>
                    <div id="map"></div>
                </section>
                <section>
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
                    { /* <p>There are many icons to chose from. <a href="http://map-icons.com/#icons">Click here to see the full list of icons</a>.</p> */ }
                </section>
            </main>
        )
    }
}

export default MapPage;