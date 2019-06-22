import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import initialData from './initial-data'
import Column from './column'
import '@atlaskit/css-reset'

class App extends Component {
  state = initialData

  render() {
    return  this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

      return <Column key={column.id} column={column} tasks={tasks}/>
    })
  }
}




ReactDOM.render(<App />, document.getElementById('root'));
