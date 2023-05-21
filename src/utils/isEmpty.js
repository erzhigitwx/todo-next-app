export function isEmpty(todos) {
    let total = 0;
    todos.map(({ done }) => {
        if (!done) {
            total += 1
        }
    })
    return !!total;
}