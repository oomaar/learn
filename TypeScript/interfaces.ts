// function showTodo(todo: {title: string, text: string}) {
//     console.log("🚀 ~ file: interfaces.ts ~ line 2 ~ todo", todo.title + ":" + todo.text);
// };
// let myTodo = {title: "Trash", text: " Take out trash"};
// console.log("🚀 ~ file: interfaces.ts ~ line 2 ~ showTodo", showTodo(myTodo));

interface Todo {
    title: string,
    text: string
};

function showTodo(todo: Todo) {
    console.log("🚀 ~ file: interfaces.ts ~ line 2 ~ todo", todo.title+ ":" +todo.text);
};
let myTodo = {title: "Trash", text: " Take out trash"};
console.log("🚀 ~ file: interfaces.ts ~ line 16 ~ showTodo", showTodo(myTodo));