import React from 'react'

const page = () => {

    // lets create our functions here
    const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
e.preventDefault();
console.log("searched");

    }



    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
console.log(e.target.value);
    }

    const handleDelete=(e:React.MouseEvent<HTMLButtonElement>, id:number)=>{
        e.preventDefault();
        console.log(`post number ${id} has been deleted`);

    }
  return (
   
    <div className="eventExample">
    <form>
      <input
        type="text"
        placeholder="Search for anything..."
     onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </form>
    <form className="post">
      <h1>Lorem ipsum dolor sit amet consectetur 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
        voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
        harum neque itaque, eum reprehenderit non repellendus? Assumenda
        necessitatibus distinctio veniam eveniet.
      </p>
      <button onClick={()=>handleDelete(1,e)}>Delete</button>
    </form>
    <form className="post">
      <h1>Lorem ipsum dolor sit amet consectetur 2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
        voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
        harum neque itaque, eum reprehenderit non repellendus? Assumenda
        necessitatibus distinctio veniam eveniet.
      </p>
      <button onClick={()=>handleDelet(e,2)}>Delete</button>
    </form>
  </div>

  )
}

export default page
