import { combineReducers } from 'redux'

import commentsReducer from './reducers/commentsReducer'
import postsReducer from './reducers/postsReducer'


const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
})

// export rootReducer with persist capabilities
export default rootReducer
