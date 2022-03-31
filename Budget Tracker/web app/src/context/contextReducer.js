
const contextReducer = (state, action) => {
  let transactions;

  //Using switch case to define actions 

  switch (action.type) {
    case 'DELETE_TRANSACTION':
      transactions = state.filter((transaction) => transaction.id !== action.payload);

      localStorage.setItem('transactions', JSON.stringify(transactions));

      return transactions;
    case 'ADD_TRANSACTION':
      transactions = [action.payload, ...state];

      localStorage.setItem('transactions', JSON.stringify(transactions));

      return transactions;

     case "REMOVE":
            return { users: state.users.filter(user => user._id !== action.payload) }
            
    default:
      return state;
  }
};


//exporting the properties
export default contextReducer;