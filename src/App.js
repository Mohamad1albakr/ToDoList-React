import React,{Component} from 'react';
import ToDoItems from './Components/ToDoItems/toDoItems';
import AddItems from './Components/AddItems/addItems';


class App extends Component {
  state= {
    items : [
      {id:1,name:'Mohamad',age:26},
      {id:2,name:'Alex',age:20},
      {id:3,name:'Nour',age:29}
    ]
  }

  deleteItem = (id)=>{
let items=this.state.items.filter(item =>{
  
  return( item.id !== id);
  
});
this.setState({items})
  }
  
  addItem=(item)=>{
    item.id=Math.random();
    let items= this.state.items;
    items.push(item);
    this.setState({items})
  }
  render(){
    return(
    <div className="App container">
      <h1 className="text-center">To Do List</h1>
      <ToDoItems items={this.state.items} deleteItem={this.deleteItem} />
      <AddItems addItem={this.addItem}/>
    </div>
    
    )};
}

export default App;
