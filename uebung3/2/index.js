function programmer(programmers) {
    return programmers.reduce((prev, curr) => {
        if (prev.hasOwnProperty(curr.lang)) {
            prev[curr.lang]++
        } else {
            prev[curr.lang] = 1;
        }
        return prev;
    }, {});
}

const langs = programmer([
    {name: 'Klaus', lang: 'javascript'}, 
    {name: 'Peter', lang: 'php'}, 
    {name: 'Maria', lang: 'javascript'}, 
    {name: 'Jürgen', lang: 'c'},
]);

console.log(langs);