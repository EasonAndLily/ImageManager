'use strict';

require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/iconfont.css');

import React from 'react';

class ControllerUnit extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        return (
            <span className="controller-unit" onClick={this.handleClick}>
            </span>
            );
    }
}

ControllerUnit.defaultProps = {

};

export default ControllerUnit;