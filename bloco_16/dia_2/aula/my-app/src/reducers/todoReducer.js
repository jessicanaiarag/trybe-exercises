const INITIAL_STATE = {
    tasks: [ 'uma task', 'segunda task', 'alo turma 13'],
    counterTask: 3
}

function todoReducer(state = INITIAL_STATE, action) {
    if (action.type === 'ADD_TASK') {
        return {
            tasks: [ ...state.tasks, action.task ],
            counterTask: state.counterTask + 1
        }
    }
    return state
}

export default todoReducer;