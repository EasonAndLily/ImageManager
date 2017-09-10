require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Utils from '../config/utils.js';
import ImageFigure from '../config/ImageFigure.js';

let imageDatas = require('json-loader!../data/images.json');

imageDatas = Utils.generateImageURL(imageDatas);
class AppComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imagesRangeArr: [
				{
					pos: {
						left: '0',
						top: '0'
					},
					rotate: 0, //存放图片的旋转角度
					isInverse: false, //存放图片的正反面
					isCenter: false //图片是否居中
				}
			]
		};
		this.setImagesRangeArr = this.setImagesRangeArr.bind(this);
	}

	Constants = Utils.Constants;

	componentDidMount() {
		//计算舞台的宽高
		let stageDOM = ReactDOM.findDOMNode(this.refs.stage);
		let stageWidth = stageDOM.scrollWidth;
		let stageHeight = stageDOM.scrollHeight;
		let halfStageWidth = Math.ceil(stageWidth / 2);
		let halfStageHeight = Math.ceil(stageHeight / 2);

		//计算图片的宽高
		let imageFigureDom = ReactDOM.findDOMNode(this.refs.imageFigure0);
		let	imageWidth = imageFigureDom.scrollWidth;
		let imageHeight = imageFigureDom.scrollHeight;
		let halfImageWidth = Math.ceil(imageWidth / 2);
		// let halfImageHeight = Math.ceil(imageHeight / 2);

		//计算中心图片的位置
		this.Constants.centerPos = {
			left: halfStageWidth - 150,
			top: halfStageHeight - 180
		};

		this.Constants.hPosRang = {
			//leftSecX: [-halfImageWidth, halfStageWidth - imageWidth -150],
			//rightSecX: [halfStageWidth + 150, stageWidth - halfImageWidth],
			//Y: [-imageHeight, stageHeight - halfImageHeight]
			leftSecX: [0, halfStageWidth - imageWidth -150],
			rightSecX: [halfStageWidth + 150, stageWidth - imageWidth],
			Y: [0, stageHeight - imageHeight]
		};

		this.Constants.vPosRang = {
			x: [halfStageWidth - 150 - halfImageWidth, halfStageWidth],
			//topY : [-halfImageWidth, stageHeight - 180 - imageHeight]
			topY : [0, stageHeight - 180 - imageHeight]
		};

		this.setState({
			imagesRangeArr: Utils.rearRange(this.state.imagesRangeArr, 0)
		});
	}
	setImagesRangeArr() {
		this.setState({
	            imagesRangeArr: this.state.imagesRangeArr
	        });
	}
	render() {
		//let controllerUnits = [];
		let imgFigures = [];
		imageDatas.forEach(function(val, index) {
			if (!this.state.imagesRangeArr[index]) {
				this.state.imagesRangeArr[index] = {
					pos: {
						left: 0,
						top: 0
					},
					rotate: 0,
					isInverse: false,
					isCenter: false
				}
			}

			imgFigures.push(<ImageFigure data={val} key={val.name} ref={'imageFigure' + index}
				arRange={this.state.imagesRangeArr[index]}
				inverse={Utils.inverse(this.state.imagesRangeArr[index], this, this.setImagesRangeArr)}
				center={Utils.center(this, this.state.imagesRangeArr, index)}/>);
		}.bind(this));


		return (
		  <section className="stage" ref="stage">
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
