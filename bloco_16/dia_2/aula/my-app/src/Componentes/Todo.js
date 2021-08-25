import React from 'react';
import { connect } from 'react-redux'
import * as todoAction from '../actions/todoAction'


function Todo(props) {

    let textInput = React.createRef();

    const addTaskOnStore = () => {
        const value = textInput.current.value
        props.addTask(value)
    }

    return (
        <>
            <div>
                <input ref={textInput} className="input-todo" type="text" placeholder="Informe sua nova tarefa" />
            </div>
            <button onClick={addTaskOnStore} className="button-todo">Adicionar</button>
        </>

    )
}

const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => dispatch(todoAction.addTask(task))
})

export default connect(null, mapDispatchToProps)(Todo);