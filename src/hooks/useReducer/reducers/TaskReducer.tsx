export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoState {
    inputValue: string,
    todos: Todo[],
    length: number,
    completed: number,
}

export const initialState = {
    inputValue: "",
    todos: [],
    length: 0,
    completed: 0,
}

type TodoAction =
    { type: 'TASK_ADD', payload: Todo } |
    { type: 'TASK_EDIT', payload: string } |
    { type: 'TASK_TOGGLE', payload: number } |
    { type: 'TASK_DELETE', payload: number };

export function taskReducer(state: TodoState, action: TodoAction) {

    switch (action.type) {
        case 'TASK_ADD':
            console.log('TASK_ADD');
            return {...state, todos: [action.payload, ...state.todos], inputValue: '', length: state.length+1};
        case 'TASK_EDIT':
            console.log('TASK_EDIT', action.payload);
            return {...state, inputValue: action.payload};
        case 'TASK_TOGGLE': {
            const editedTodos = state.todos.map((task) => {
                if (task.id === action.payload) {
                    return { ...task, completed: !task.completed };
                    // task.completed = !task.completed;
                }
                return task;
            });

            console.log('TASK_TOGGLE', state, action.payload);
            return {...state, todos: editedTodos, completed: editedTodos.filter( (todo) => todo.completed).length};
        }
        case 'TASK_DELETE': {
            const editedTodos = state.todos.filter((task) => task.id !== action.payload);
            return {...state, todos: editedTodos, completed: editedTodos.filter( (todo) => todo.completed).length, length: editedTodos.length};
        }

        default:
            return state;

    }


}