## onClick
We use onClick Method When Click on Bottton.
It Create new Event 

onClick accepted a Function / Callback

onClick={()=> setMethod(data)}


## We Can Pass Data Via onClick Method

const addValue = (data)=>{
  setColor(data)
}

onClick={()=> addValue('red')}

*In Here red is a fucntion with argument which call via call-back*