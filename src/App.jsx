import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();

    const copyTask = [...task]

    copyTask.push({title, details})

    setTask(copyTask)
    // console.log(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 items-start flex-col p-10 '>
        
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* input for heading */}
        <input 
        type='text' 
        placeholder='Enter notes' 
        className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        {/* input for detail */}
        <textarea
        type='text'
        placeholder='Enter details'
        className='px-5 h-32 w-full py-2 font-medium flex items-start flex-row border-2 outline-none rounded'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}        
        />

        <button className='bg-white w-full font-medium outline-none text-black px-5 py-2 rounded active:scale-95'>Add Notes</button>

      </form>
      <div className=' lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap item-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
        {task.map(function(elem, idx){
          return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black bg-cover pt-9 pb-4 px-4 bg-[url('https://png.pngtree.com/png-clipart/20190921/original/pngtree-beige-note-illustration-png-image_4763158.jpg')]">
            <div>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight text-sm font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>delete</button>
          </div>
        })}
      </div>
          
      </div>
      
    </div>
  )
}

export default App
