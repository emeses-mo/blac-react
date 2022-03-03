export const initialState = {
    basket: [],
    user: null
};
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
     switch (action.type) {
         case 'ADD_TO_BASKET':
             return {
                 ...state,
                 basket : [...state.basket, action.item],
             };

        case 'REMOVE_FROM_B':
           const i= state.basket.findIndex(
               (basketItem) => basketItem.id === action.id
           );
            let newB = [...state.basket];
            if(i>=0){
                newB.splice(i,1);
            }
            else{
                console.warn(`Cant remove product (id: ${action.id}) as its not in the Basket`)
            }
            return{
                ...state,
                basket: newB
            }
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }


        default:
            return state;
     }
};


export default reducer;