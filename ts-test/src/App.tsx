import React, {useState}from 'react'
import {useForm} from 'react-hook-form'
interface Form {
age:number;
}
function App(){
  const {register, handleSubmit, formState:{errors}} = useForm()
  const [result, setResult] = useState('')  
  const onSubmit = (data: any) => {
    setResult(JSON.stringify(data))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="number" placeholder="Age" {...register('age',{required:true, min: 17, max: 40})} />
      {errors.age?.type === 'required' && (<p>Age is required</p>)}
      {errors.age?.type === 'min' && (<p>Minimum age is 17</p>)}
      {errors.age?.type === 'max' && (<p>Maximum age is 40</p>)}
      <input type="submit" />
      <p>{result}</p>
    </form>
  )
}
export default App;