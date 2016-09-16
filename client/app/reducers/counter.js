import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export default function counter(state = 0, { type, payload }) {
    switch (type) {
        case INCREMENT_COUNTER:
        return state + payload;
        case DECREMENT_COUNTER:
        return state - payload;
        default:
        return state;
    }
}
