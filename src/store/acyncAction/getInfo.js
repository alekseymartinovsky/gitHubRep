import axios from 'axios';

import {URL} from '../../constants';

import {loadInfo} from '../topReducer';

export const getInfo = (settings) => {
    let lang = '';
    if(settings.lang !== 'all'){
        lang = "language:" + settings.lang + '&';
    }
    return function(dispatch){
        axios({
            method: "get",
            url: URL + lang + 'stars:>1&sort=stars&order=desc&per_page=' + settings.pages + '&type=Repositories',
            responseType: "json",
        })
        .then((response)=>dispatch(loadInfo(response.data)));
    }
}