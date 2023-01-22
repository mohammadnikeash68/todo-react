import { useContext } from "react";
import { useState } from "react";
import { Context } from "./TodoContext";
const FormTodo = ()=>{
    const [todo,setTodo] = useState("");
    const {listTodo,setListTodo} = useContext(Context);
    const handleChangeTodo = (e)=>{
        setTodo(e.target.value);
    }
    const handleSubmitSaveTodo = (e)=>{
        e.preventDefault();
        setListTodo([...listTodo,{id:Math.random(),title:todo,done:false}]);
    }
    return(
        <>
            <h4 className="text-center text-info ">ثبت کارها</h4>
            <form onSubmit={handleSubmitSaveTodo}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control me-2"
                    onChange={handleChangeTodo} value={todo}/>
                    <button type="submit" className="btn btn-success">ثبت</button>
                </div>
            </form>
        </>
    );
}
export default FormTodo;