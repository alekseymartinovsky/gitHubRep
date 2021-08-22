import {LOAD, EMPTY_DATA} from '../constants';

const defaultStore = [];

export const topReducer = (state = defaultStore, action) => {
    switch(action.type){
        case LOAD:
            return [action.payload];
        case EMPTY_DATA:
            return []; 
        default:
            return state;
    }
}

export const loadInfo = (payload) => ({type: LOAD, payload});
export const cleanData = (payload) => ({type: EMPTY_DATA, payload});