import React, { Component } from 'react';

export default class ImgFigure extends Component {
	render() {
		const {data} = this.props;
		return (
			<figure className="img-figure">
				<img src={data.imageURL} alt={data.title} />
				<figcaption>
					<h2 className="img-title">
						{data.title}
					</h2>
				</figcaption>
			</figure>
		)
	}
}