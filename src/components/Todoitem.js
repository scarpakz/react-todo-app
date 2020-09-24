import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {
    getObjectsWithStyle = () =>{
        return {
            background: '#f0f0f0',
            fontFamily: 'sans-serif',
            borderBottom: 'solid 1px lightgray',
            padding: '10px',
            display: 'flow-root',
        }
    }

    descriptionStyle = () => {
        return{
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    deleteButtonStyle = () => {
        return {
            background: 'red',
            padding: '15px',
            border: 'none',
            fontFamily: 'sans-serif',
            borderRadius: '5px',
            float: 'right',
            color: '#fff',
            cursor: 'pointer'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getObjectsWithStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                <span style={this.descriptionStyle()}>{ title }</span>
                <button style={this.deleteButtonStyle()} onClick={this.props.deleteItem.bind(this,id)} >Delete Item</button>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Todoitem
