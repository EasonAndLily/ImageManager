'use strict';

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class ImageFigure extends React.Component {
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
    let styleObject = this.props.arRange.pos ? this.props.arRange.pos : {};
    styleObject['transform'] = this.props.arRange.rotate ? 'rotate(' + this.props.arRange.rotate + 'deg)' : 'rotate(0deg)';
    styleObject['zIndex'] = this.props.arRange.isCenter ? '101' : '';
    let imgFigureClassName = 'img-figure';
    imgFigureClassName += this.props.arRange.isInverse ? ' is-inverse' : '';
    return (
      <figure className={imgFigureClassName} style={styleObject} onClick={this.handleClick}>
        <img src={this.props.data.singleImageData} alt={this.props.data.title}/>
        <figcaption>
            <h2 className="img-title">
                {this.props.data.title}
            </h2>
            <div className="img-back" onClick={this.handleClick}>
              <p>
                  {this.props.data.description}
              </p>
            </div>
        </figcaption>
      </figure>
    );
  }
}

ImageFigure.defaultProps = {

};

export default ImageFigure;