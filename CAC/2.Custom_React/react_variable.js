// Pass Variable to React Function

function App() {
  const name = "React";
  return <h1>Hello {name}</h1>
}

/*
{} -> This is used to pass variable to React Function

This called Evaluated Expression. Mean We Can pass Only Final
output to this expression. No JS Statement Allowed.

We Cant Write Like This: {if(true) return "Hello"}

*/