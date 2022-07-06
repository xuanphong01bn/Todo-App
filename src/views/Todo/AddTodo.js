import React from "react";
import "./ListTodo.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class AddTodo extends React.Component {
    state = {
        title: '',
    }
    onChangeInput = (event) => {
        this.setState({
            title: event.target.value,
        })
    }
    handleAdd = () => {
        console.log(this.state.title);
        // this.props.addNewTitle({

        // })
        if (this.state.title) {
            this.props.addNewTitle({
                id: Math.floor(Math.random() * 11),
                title: this.state.title,
            })
            toast.success('Thêm thành công')
        }
        if (!this.state.title) {
            toast.error('Missing Input')
        }

        this.setState({
            title: '',
        })
    }
    render() {
        return (
            <div className="add ">
                <input value={this.state.title} onChange={(event) => this.onChangeInput(event)} /> <span><button onClick={() => this.handleAdd()} style={{ cursor: "pointer" }}>Add</button></span>
            </div>
        )
    }
}
export default AddTodo;