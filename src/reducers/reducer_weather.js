import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            console.log('action payload:', action.payload);

            if (action.payload.cod == '404') {
                console.log('action payload cod 404:', action.payload);
                return action.payload
            }
            return state.concat([ action.payload.data ]);
        }

    return state;
}