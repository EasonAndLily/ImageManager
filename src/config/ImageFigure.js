'use strict';

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class ImageFigure extends React.Component {
  render() {
    let styleObject = this.props.arRange.pos ? this.props.arRange.pos : {};
    return (
      <figure className="img-figure" style={styleObject}>
        <img src={this.props.data.singleImageData} alt={this.props.data.title}/>
        <figcaption>
            <h2 className="img-title">
                {this.props.data.description}
            </h2>
        </figcaption>
      </figure>
    );
  }
}

ImageFigure.defaultProps = {

};

export default ImageFigure;