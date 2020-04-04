import React, { Component } from 'react'

export default class Todo extends Component {
    state={
        item:"",
        todoItems:[]
    }

    onChangeHandler=(event)=>{
        var inputVal=event.target.value;
        this.setState({
            item:inputVal
        })
        
    }
    addData=()=>{
      
 
        this.state.todoItems.push(this.state.item)
        this.setState({
            todoItems:this.state.todoItems,
            item:''
        })
       // console.log(this.state.todoItems);
        
    }

    delete=(event)=>{
       this.state.todoItems.splice(event.target.id,1);
       this.setState({
           todoItems:this.state.todoItems
       })
    }

    render() {
        var itemList = this.state.todoItems.map((e,i)=>
        <li key={i}>{e}<span onClick={this.delete} id={i}><button>Delete</button></span></li>
        )
        return (
            <div>
                <div className="header">TODO LIST</div>
                <div className="body">
                    <ul>
                        <p>this is item list</p>
                        {itemList}
                    </ul>
                </div>
                <div className="footer">
                    <input type="text" value={this.state.item} onChange={this.onChangeHandler}></input>
                    <button onClick={this.addData}>Add</button>
                </div>
            </div>
        )
    }
}
