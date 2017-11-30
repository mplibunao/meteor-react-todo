import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
import Task from './Task';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: ""
    };
  }

  // handleSubmit(event) {
  //   event.preventDefault();
 
  //   // Find the text field via the React ref
  //   const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
  //   Tasks.insert({
  //     text,
  //     createdAt: new Date(), // current time
  //   });
 
  //   // Clear form
  //   ReactDOM.findDOMNode(this.refs.textInput).value = '';
  // }

 renderTasks() {
   return this.props.tasks.map(task => {
        return <Task key={task._id} task={task} />
   });
 }

 handleKeyPress = (event) => {
   //event.preventDefault();

   if (event.key === "Enter") {
     console.log("yo");
     let text = this.state.newTask;
     Tasks.insert({
      text,
      createdAt: new Date()
     });

     this.setState({ newTask: "" });
   }
 }

 render() {
   return (
     <div className="container">
       <header>
        <h1>Todo List</h1>
          <input
            type="text"
            onChange={(event) => this.setState({ newTask: event.target.value })}
            onKeyPress={this.handleKeyPress}
            ref="textInput"
            placeholder="Type to add new tasks"
          />
      </header>
        

       <ul>
         {this.renderTasks()}
       </ul>
     </div>
   );
 }
}

export default withTracker(() => {
    return {
        tasks: Tasks.find({}).fetch(),
    };
})(App);