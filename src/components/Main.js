require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
//import ImageFigure from '../ImageFigure.js'

//let ImageFigure = require('ImageFigure.js');
let imageDatas = require('json-loader!../data/images.json');
let yeomanImage = require('../images/001.jpg');
imageDatas = (function generateImageURL(imageDatasArr) {
    imageDatasArr.forEach(function (val, index) {
        let singleImageData = require('../images/' + val.name);
        imageDatasArr[index].singleImageData = singleImageData;
    });
    return imageDatasArr
})(imageDatas);


class ImageFigure extends React.Component {
  render() {
    return (
      <figure className="img-figure">
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

class AppComponent extends React.Component {
	Constant: {
		centerPos: { //中心坐标
			left: 0,
			right: 0
		},
		hPosRang: {//水平方向取值范围
			leftSecX: [0, 0],
			rightSecX: [0, 0],
			Y: [0, 0]
		},
		vPosRang: {//垂直方向取值范围
			x: [0, 0],
			tpY : [0, 0]
		}
	},

  render() {
  	let controllerUnits = [];
  	let imgFigures = [];
  	imageDatas.forEach(function(val, index) {
  		imgFigures.push(<ImageFigure data={val}/>);
  	});


	return (
	  <section className="stage">
		<section className="img-sec">
			{imgFigures}
		</section>
		<nav className="controller-nav"></nav>
	  </section>
	);
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
