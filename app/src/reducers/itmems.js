const items = (state=[], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log('add item');
            console.log(state);
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title
                }
            ]
        default:
            return state;
    }
}

export default items;