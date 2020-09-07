
export const FETCH_AUTHOR_SUCCESS = 'FETCH_AUTHOR_SUCCESS'
export const FETCH_AUTHOR_ERROR = 'FETCH_AUTHOR_ERROR'
export const FETCH_AUTHOR_PENDING = 'FETCH_AUTHOR_PENDING'


export function fetchAuthorSuccess(authors) {
return{
    type: FETCH_AUTHOR_SUCCESS,
    authors:authors
}
}

export function fetchAuthorError(error) {
    return{
        type: FETCH_AUTHOR_ERROR,
        error:error
    }
}

export function fetchAuthorPending() {
    return{
        type: FETCH_AUTHOR_PENDING,
    }
}