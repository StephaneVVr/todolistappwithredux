import * as actions from './actions';

export const todos = (state = [], action) => { // On assigne une valeur par default pour le state
    switch(action.type) {
        case actions.ADD_TODO: {
            return [ ...state, action.todo]  // ensuite on modifie todos, on recupere toute les todos (l'état actuel de todo), et on ajoute la nouvelle todo (action.todo)
          }
        case actions.DELETE_TODO: {
            return state.filter( (t, i) => i !== action.index )
          }
        case actions.TOGGLE_TODO: {
            return state.map( (t, i) => {
                  if (i === action.index) {
                      t.done = !t.done
                  }
                  return t;
                })
            
           }

        default: {
            return state
        }
      }
}

export const filter = (state = actions.visibilityFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case actions.SET_FILTER: {
            return action.filter
    }
        default: {
            return state
        }
      }
}

// export const todosReducer = (state, action) => {
//  return {
//      todos: todoReducer(state.todos, action),  // on return seulement le state concerné par la modification
//      filter: filterReducer(state.filter, action)
//  }
// }
