import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddItem extends Component{
    divInputItemStyle = () => {
        return{
            display: 'flex'
        }
    }

    inputStyle = () => {
        return{
            width: '100%',
            fontSize: '15px'
        }
    }

    btnStyle = () => {
        return{
            padding: '5px 30px',
            backgroundColor: '#09c',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
        }
    }

    state = {
        title: ''
    }

    inputChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => {
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }
    
    render(){
        return(
            <div className="additem" style={this.divInputItemStyle()}>
                <input name="title" type="text" value={this.state.title} onChange={this.inputChange} style={this.inputStyle()}/>
                <button onClick={this.onSubmit} style={this.btnStyle()}>Add Item</button>
            </div>
        )
    }
}

AddItem.propTypes = {
    todo: PropTypes.object.isRequired,
    addTodo: PropTypes.func.isRequired
}
export default AddItem