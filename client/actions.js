import { actionTypes } from './toggleReducer'

// Manage color thourgh dispatched actions
export function toggleColors(colors) {
	return dispatch => {
		if (colors.isBlue) {
			dispatch({type: actionTypes.BLUE_TO_PURPLE})
		}
		if (colors.isPurple) {
			dispatch({type: actionTypes.PURPLE_TO_BLUE})
		}
		if (colors.isRed) {
			dispatch({type: actionTypes.RED_TO_GREEN})
		}
		if (colors.isGreen) {
			dispatch({type: actionTypes.GREEN_TO_RED})
		}
	}
}

// Action to swap components background color
export function swapComponents() {
	return dispatch => {
		dispatch({type: actionTypes.SWAP_COMPONENTS})
	}
}
