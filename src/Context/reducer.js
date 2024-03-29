export const initialState = {
	basket: [],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_ITEM_FROM_BASKET':
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
				return {
					...state,
					basket: [...newBasket],
				};
			} else {
				console.warn(
					`Can not remove product (id: ${action.id}) as it is not in the basket`
				);
			}

		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'EMPTY_BASKET':
			return {
				...state,
				basket: [],
			};

		default:
			return state;
	}
};

export default reducer;
