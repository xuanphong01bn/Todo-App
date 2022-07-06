import React from "react";
import nhanhan from "./nhanhan.jpg"
import "./ListTodo.scss"
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Color from "../HOC/Color";
class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Sleeping on bed' },
            { id: 'todo3', title: 'Doing Chore' },
        ],
        editTodo: {},// biến hứng sau khi edit
    }
    addNewTitle = (title) => {
        console.log('>>>check title: ', title);
        let currentTitle = this.state.listTodo;
        currentTitle.push(title);
        this.setState({
            listTodo: currentTitle,

        })
    }
    DeleteTitle = (a) => {  // a là item được lôi lên 
        let currentTitle = this.state.listTodo;
        currentTitle = currentTitle.filter(item => item.id !== a.id //item sinh ra ở hàm map
        )
        this.setState({
            listTodo: currentTitle,
        })
        toast.success('Delete done')
    }
    HandleEdit = (todo) => { // todo là cái item được lôi lên trong hàm render
        let { listTodo, editTodo } = this.state;

        let isEmpty = Object.keys(editTodo).length === 0;// nếu editTodo rỗng
        //save button, edittodo không rỗng vì giá trị của nó bằng item hiện tại (todo trong hàm này) trước khi sửa
        if (isEmpty === false && editTodo.id === todo.id) {
            let listTodoCopy = [...this.state.listTodo]; // sao chép
            // tìm index của todo cần sửa
            let index = listTodoCopy.findIndex((item) => item.id == todo.id);// item từ hàm map trong render
            listTodoCopy[index].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            return 0;
        }
        //edit button
        this.setState({
            editTodo: todo, // edit không trống, chuyển sang trạng thái nút save
        })

    }
    handleOnChange = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy,
        })
    }
    render() {
        let { listTodo, editTodo } = this.state;
        let isEmpty = Object.keys(editTodo).length === 0;// nếu editTodo rỗng
        console.log('>>> check empty object: ', isEmpty)
        return (
            <div className="include">
                <img src={nhanhan} className="nhanhan" alt="Kuwaga" />
                <p>Simple Todo app with React nhanhan &amp; Phong</p>
                <AddTodo
                    addNewTitle={this.addNewTitle}
                />
                <div className="list">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="list-detail" key={item.id}>
                                    {isEmpty ?
                                        <>
                                            {index + 1}-{item.title} <button className="edit-btn" onClick={() => this.HandleEdit(item)}>Edit</button>
                                        </>
                                        :
                                        <>
                                            {
                                                editTodo.id === item.id ?
                                                    <>
                                                        <input value={editTodo.title} onChange={(event) => this.handleOnChange(event)} />
                                                        <button onClick={() => this.HandleEdit(item)}>Save</button>
                                                    </>
                                                    :
                                                    <>
                                                        {index + 1}-{item.title} <button className="edit-btn" onClick={() => this.HandleEdit(item)}>Edit</button>
                                                    </>
                                            }
                                        </>
                                    }
                                    <button className="delete-btn" onClick={() => this.DeleteTitle(item)}>Delete</button>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        )
    }
}
export default Color(ListTodo);
