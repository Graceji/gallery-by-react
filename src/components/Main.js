require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

const imageDatas = require('../data/imageData.json');

let getImageURL = dataArr => {
	dataArr.forEach(item => {
		item.imageURL = require(`../images/${item.fileName}`);
	});
	return dataArr;
}

getImageURL(imageDatas);

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
