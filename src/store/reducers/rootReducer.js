const initState = {
	token: "jakis tam token",
};

const rootReducer = (state = initState, action) => {
	if (action.type === "UPDATE_TOKEN") {
		state.token = action.token;
		console.log("STATE Z REDUCERA: " + state.token);
	}

	return state;
};

export default rootReducer;
