
export let actionTypes = Object.freeze({
	BLUE_TO_PURPLE: 'BLUE_TO_PURPLE',
	PURPLE_TO_BLUE: 'PURPLE_TO_BLUE',
	RED_TO_GREEN: 'RED_TO_GREEN',
	GREEN_TO_RED: 'GREEN_TO_RED',
	SWAP_COMPONENTS: 'SWAP_COMPONENTS'
})

// Initialize states
const initialState = {
	isSwaped: true,
	isBlue: true,
	isPurple: false,
	isRed: true,
	isGreen: false,
}

// Manage states
export default function reducer(state = initialState, action) {
	switch(action.type) {
		case actionTypes.BLUE_TO_PURPLE: {
			return {
				...state,
				isBlue: false,
				isPurple: true
			}

			break
		}

		case actionTypes.PURPLE_TO_BLUE: {
			return {
				...state,
				isBlue: true,
				isPurple: false
			}

			break
		}

		case actionTypes.RED_TO_GREEN: {
			return {
				...state,
				isRed: false,
				isGreen: true
			}

			break
		}

		case actionTypes.GREEN_TO_RED: {
			return {
				...state,
				isRed: true,
				isGreen: false
			}

			break
		}

		case actionTypes.SWAP_COMPONENTS: {
			return {
				...state,
				isSwaped: state.isSwaped == true ? false : true
			}

			break
		}



	}

	return state
}
