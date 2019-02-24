import uuid from 'uuid';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
    items: [
        {id: uuid(), name: "item1"},
        {id: uuid(), name: "item2"},
        {id: uuid(), name: "item3"},
        {id: uuid(), name: "item4"},
    ]
};

// This method will return data on basis of actions
export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default: 
            return state;
    }
}