import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Left from './components/Left'
import Right from './components/Right'
import Center from './components/Center'

class App extends Component {

	render() {
		const { colors } = this.props // Initialize colors property
		return(
			<div style={{padding: "0px", margin: "0px"}} >
				<Left colors={colors}/>
				<Center />
				<Right colors={colors}/>
			</div>
			)
	}
}

// Mapping of state to props
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

export default connect(mapStateToProps, {})(App)
