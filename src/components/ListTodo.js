const ListTodo = ({ todos, deleteTodo }) => {

  return (
    <ul>
      {
        todos &&
          todos.length > 0 ?
            (
              todos.map(todo => {
                return (
                  <li key={todo._id} onClick={() => deleteTodo(todo.id)}>{todo.action}
                )
              })
            )
            :
            (
              <li>No todo(s) left</li>
            )
      }
    </ul>
  )
}

export default ListTodo
