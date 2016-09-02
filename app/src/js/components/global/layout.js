// React dependencies
import React from 'react';

// Redux dependencies
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../config/mapping.js';

// App dependencies
import GlobalHeader from './header';
import GlobalFooter from './footer';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <GlobalHeader />
                {
                    // page content
                    React.cloneElement(this.props.children, this.props)
                }
                <GlobalFooter />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);