/**
 * Created by Vitca Razvan on 6/14/2017.
 */
const initialValue = 0;
var object;

export default (state = initialValue, action) => {
    console.log("wiiiiiii", action.payload);
    switch (action.type) {
        case 'CHANGE_BLACK_RANGE':
            object={
                value: action.value,
                color: action.color
            }
            return object;
        default:
            return state;
    }
};
