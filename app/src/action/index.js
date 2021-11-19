export const addItem = (id, title) => ({
    type: 'ADD_ITEM',
    id,
    title
});

export const addAccount = (address, balance) => ({
    type: 'ADD_ACCOUNT',
    address,
    balance
});