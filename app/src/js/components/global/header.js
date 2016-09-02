// React dependencies
import React from 'react';

class GlobalHeader extends React.Component {
    render() {
        return (
            <header>
                <p>Muppet</p>
                <p>A mapping app for all your places. Map it, you muppet!</p>
                <h1>Your places</h1>
                <form>
                    <select>
                        <option value="-1">Please select&hellip;</option>
                        <option value="all">Show all places</option>
                        <option value="people">Address Book: Friends &amp; Family</option>
                        <option value="jobs">Employment: Jobs and Interviews</option>
                        <option value="holidays">Holidays: Places visited</option>
                        <option value="new">Create new category&hellip;</option>
                    </select>
                </form>
            </header>
        )
    }
}

export default GlobalHeader;