require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


let imageDatas = require('json-loader!../data/images.json');
let yeomanImage = require('../images/001.jpg');
imageDatas = (function generateImageURL(imageDatasArr) {
    imageDatasArr.forEach(function (val, index) {
        let singleImageData = require('../images/' + val.name);
        imageDatasArr[index].singleImageData = singleImageData;
    });
    return imageDatasArr
})(imageDatas);

class AppComponent extends React.Component {
  render() {
	return (
	  <section className="stage">
		<section className="img-sec"></section>
		<nav className="controller-nav"></nav>
	  </section>
	);
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
