## Rednder Array Data In React

We Use Map To Render List Data

{todos.map((item)=>{
  return <Todo key={item.id} todo={item}/>
})}



## Real World Problem
Suppose We have Render List Data From Api.. We Have Do This in Below

1. First Define State
const [data, setData] = useSatr([])


2. Fetch Data Via useEffect. So When Page is Rendering Data Came First. Thene Set This Data
into State

useEffect((()=>{
  cosnt data = axios.get(// Api Data)
  setData(data)
}),[])

3. Use Map.. List The Data