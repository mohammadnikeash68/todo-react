import { useContext } from "react";
import { Context } from "./TodoContext";

const ListTodo = () => {
  const { listTodo, setListTodo } = useContext(Context);
  const handleClickIconRejectAndConfirm = (index)=>{
    const newListTodo = [...listTodo];
    newListTodo[index].done = !newListTodo[index].done;
    setListTodo([...newListTodo]);

  }
  const handleClickDeleteTodo = (id)=>{
    const list = listTodo.filter((item,index)=> item.id !== id);
    setListTodo([...list]);
  }
  if(listTodo.length){
  return (
    <>
      <ul className="list-group mt-2">
        {listTodo.map((item, index) => (
           
            <li key={index} className={`list-group-item d-flex justify-content-between ${item.done ? 'list-group-item-success' : ''}`}>
            {item.title}
            <span>
              <i onClick={()=>handleClickIconRejectAndConfirm(index)} className={`me-3 fas ${item.done ? 'fa-check text-success' : 'fa-times text-warning'}  pointer`}></i>
              <i onClick={()=>handleClickDeleteTodo(item.id)} className="me-3  fas fa-trash text-danger pointer"></i>
            </span>
          </li>
       
          
        ))}
      </ul>
    </>
  );
          }else{
            return <h2 className="text-center text-danger">هیچ لیستی وجود ندارد...</h2>
          }
};

export default ListTodo;
