require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import ImgFigure from './ImgFigure';

const imageDatas = require('../data/imageData.json');

let getImageURL = dataArr => {
	dataArr.forEach(item => {
		item.imageURL = require(`../images/${item.fileName}`);
	});
	return dataArr;
};

getImageURL(imageDatas);

class AppComponent extends React.Component {
	centerPos = {
		left: 0,
		right: 0
	};

	hPosRange = {
		leftSecX: [0, 0],
		rightSecX: [0, 0],
		y: [0, 0]
	};

	vPosRange = {
		x: [0, 0],
		topY: [0, 0],
	};

	constructor(props, context) {
		super(props, context);
		this.state = {
			imgsArrangeArr: [
				// {
				// 	pos: {
				// 		left: 0,
				// 		top: 0
				// 	}
				// }
			]
		};
	}
	
	// 重新布局所有图片
	rearrange(centerIndex) {
		
	}

	componentDidMount() {
		// 组件加载以后，为每张图片计算其位置的范围

		// 首先获取舞台的大小
		const stageDom = ReactDOM.findDOMNode(this.refs.stage);
		const stageW = stageDom.scrollWidth;
		const stageH = stageDom.scrollHeight;
		const halfStageW = Math.ceil(stageW / 2);
		const halfStageH = Math.ceil(stageH / 2);

		// 拿到一个imageFigure 的大小
		const imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0);
		const imgW = imgFigureDOM.scrollWidth;
		const imgH = imgFigureDOM.scrollHeight;
		const halfImgW = Math.ceil(imgW / 2);
		const halfImgH = Math.ceil(imgH / 2);

		// 计算中间图片的位置点
		this.centerPos = {
			left: halfStageW - halfImgW,
			top: halfStageH - halfImgH,
		};

		// 左右侧图片的位置点
		this.hPosRange.leftSecX[0] = -halfImgW;
		this.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
		this.hPosRange.rightSecX[0] = halfStageW - halfImgW;
		this.hPosRange.rightSecX[1] = stageW - halfImgW;
		this.hPosRange.y[0] = -halfImgH;
		this.hPosRange.y[1] = stageH - halfImgH;

		// 上侧图片的位置点
		this.vPosRange.topY[0] = - halfImgH;
		this.vPosRange.topY[1] = halfStageH - halfImgH * 3;
		this.vPosRange.x[0] = halfImgW - imgW;
		this.vPosRange.x[1] = halfImgW;

		this.rearrange(0);
	}

  render() {
  	let imageFigures = [];
  	let controllerUnits = [];

		imageDatas.forEach((data, index) => {
			if (!this.state.imgsArrangeArr[index]) {
				this.state.imgsArrangeArr[index] = {
					pos: {
						left: 0,
						top: 0
					}
				}
			}
			imageFigures.push(<ImgFigure data={data} ref={`imgFigure${index}`}/>)
		});

    return (
      <section className="stage" ref="stage">
				<section className="img-sec">
					{imageFigures}
				</section>
				<nav className="controller-nav">
					{controllerUnits}
				</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
