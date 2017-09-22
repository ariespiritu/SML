import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

// Actions
import { toggleColors, swapComponents } from '../actions'

class Center extends Component {

	_toggleColors(colors) {
		this.props.toggleColors(colors)
	}

	_swapComponents() {
		this.props.swapComponents()
	}

	render() {
		const { colors } = this.props
		return(
			<div className="center-component" >
				<button onClick={ () => {this._toggleColors(colors)}} >Toggle</button>
				<button onClick={ () => {this._swapComponents()}}>Swap</button>
			</div>
		)
	}

}

// Mapping of state to properties
function mapStateToProps(state) {
	return {
		colors : {
			isBlue: state.toggle.isBlue,
			isPurple: state.toggle.isPurple,
			isRed: state.toggle.isRed,
			isGreen: state.toggle.isGreen,
			isSwaped: state.toggle.isSwaped
		}
	}
}

export default connect(mapStateToProps, { toggleColors, swapComponents })(Center)
