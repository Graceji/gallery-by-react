require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
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
  render() {
  	let imageFigures = [];
  	let controllerUnits = [];
		imageDatas.forEach(data => {
			imageFigures.push(<ImgFigure data={data} />)
		});

    return (
      <section className="stage">
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
