import React, {Component} from 'react';

class Task extends Component {


    render() {
        return (
            <div className="Task">
                <span style = {{ textDecoration: this.props.todo.done ? 'line-through':'none' }}>
                    {this.props.todo.value}
                </span>
                <span>&nbsp;&nbsp;</span>
                <button onClick={()=>this.props.handleClick(this.props.index)}>{this.props.todo.done ? 'undo': 'compete'}</button>
            </div>
        )
    }
}

export default Task;
