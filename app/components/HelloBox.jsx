import React from 'react'

export default class HelloBox extends React.Component {
	render() {
		return (
			<div className='hello' style={{backgroundColor: this.props.color}}>
				<div className='hello__content'>
					Hello, world!
				</div>
			</div>
		)
	}
}
