/**
 * Created by Vitca Razvan on 6/14/2017.
 */
const initialValue = 0;

export default (state = initialValue, action) => {
    console.log("wiiiiiii", action.payload);
    switch (action.type) {
        case 'CHANGE_OPACITY_RANGE':
            return action.value;
        default:
            return state;
    }
};
