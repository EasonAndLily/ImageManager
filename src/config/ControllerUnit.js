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
        if(this.props.arRange.isCenter) {
            this.props.inverse();
        } else {
            this.props.center();
        }
        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        var controllerUnitClassName = 'controller-unit';
        if (this.props.arRange.isCenter) {
            controllerUnitClassName += ' is-center';
            if (this.props.arRange.isInverse) {
                controllerUnitClassName += ' is-inverse';
            }
        }
        return (
            <span className={controllerUnitClassName} onClick={this.handleClick}>
            </span>
        );
    }
}

ControllerUnit.defaultProps = {

};

export default ControllerUnit;