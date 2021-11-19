const items = (state=[], action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            console.log('add account');
            console.log(state);
            return [
                ...state,
                {
                    address: action.address,
                    balance: action.balance
                }
            ]
        default:
            return state;
    }
}

export default items;