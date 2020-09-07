import {fetchAuthorSuccess, fetchAuthorError, fetchAuthorPending} from '../actions/action'

function fetchAuthorActions() {
    console.log('fetching...')
    return dispatch => {
        dispatch(fetchAuthorPending())
        fetch('https://picsum.photos/list')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            console.log('fetch data :', res)
            dispatch(fetchAuthorSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchAuthorError(error));
        })
    }
}

export default fetchAuthorActions;
