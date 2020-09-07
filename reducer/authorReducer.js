import {FETCH_AUTHOR_SUCCESS, FETCH_AUTHOR_ERROR, FETCH_AUTHOR_PENDING} from '../actions/action'

const initialState = {
    pending: false,
    authorsList:[],
    error:null,
}

export default function authorReducer (state = initialState, action) {
    console.log('action:',action)
    switch(action.type) {
        case FETCH_AUTHOR_PENDING:{
            return{
                ...state,
                pending:true
            }
        }
        case FETCH_AUTHOR_SUCCESS:{
            return{
                ...state,
                pending:false,
                authorsList:action.authors
            }
        }
        case FETCH_AUTHOR_ERROR:{
            return{
                ...state,
                pending:false,
                error:action.error
            }
        }
        default:
            return state
    }
}
export const getAuthor = state => state.authorsList
export const getAuthorError = state => state.error
export const getAuthorPending = state => state.pending