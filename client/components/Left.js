import React, {Component, PropTypes} from 'react'

class Left extends Component {

	render() {
		const { colors } = this.props
		let componentBg = 'blue' // Initialize background color
		if (colors.isBlue && colors.isSwaped){
			componentBg = "blue"
		} else if(colors.isPurple && colors.isSwaped) {
				componentBg = "purple"
		} else if(colors.isRed && !colors.isSwaped) {
				componentBg = "red"
		} else if(colors.isGreen && !colors.isSwaped) {
			componentBg = "green"
		}
		// return colored background
		return <div className={`left-component ${componentBg}`}> </div>
	}

}

export default Left
