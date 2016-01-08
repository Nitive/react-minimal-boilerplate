import React from 'react'
import HelloBox from './HelloBox.jsx'

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<HelloBox color='aquamarine' />
				<HelloBox color='aliceblue' />
				<HelloBox color='#f5f5dc' />
			</div>
		)
	}
}
