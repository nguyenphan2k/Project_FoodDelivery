export const actionType = {
     SET_USER: 'SET_USER',
     SET_FOOD_ITEMS: 'SET_FOOD_ITEMS'
}

const reducer = (state, action) => {
     switch (action.type) {
          case actionType.SET_USER:
               return {
                    ...state,
                    user: action.user,
               }
          default:
               return state; 
          case actionType.SET_FOOD_ITEMS:
               return {
                    ...state,
                    foodItems: action.foodItems,
               }
     }
}
export default reducer