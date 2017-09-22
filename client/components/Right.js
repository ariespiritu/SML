import React, {Component, PropTypes} from 'react'

class Right extends Component {

	render() {
		const { colors } = this.props
		let componentBg = 'red' // Initialize background color
		// Identify background
		if (colors.isRed && colors.isSwaped){
			componentBg = "red"
		} else if(colors.isGreen && colors.isSwaped) {
				componentBg = "green"
		} else if(colors.isBlue && !colors.isSwaped) {
				componentBg = "blue"
		} else if(colors.isPurple && !colors.isSwaped) {
			componentBg = "purple"
		}
		// return background color
		return <div className={`right-component ${componentBg}`}> </div>
	}

}

export default Right
