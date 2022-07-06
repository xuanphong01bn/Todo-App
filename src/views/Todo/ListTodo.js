import React from "react";
import nhanhan from "./nhanhan.jpg"
import "./ListTodo.scss"
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Doing Homework' },
            { id: 'todo2', title: 'Sleeping on bed' },
            { id: 'todo3', title: 'Doing Chore' },
        ]
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
        currentTitle = currentTitle.filter(item => item.id !== a.id
        )
        this.setState({
            listTodo: currentTitle,
        })
        toast.success('Delete done')
    }
    render() {
        let { listTodo } = this.state;
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
                                    {index + 1}-{item.title} <button className="edit-btn">Edit</button>
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
export default ListTodo;
