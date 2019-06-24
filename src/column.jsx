import React, { Component } from 'react'
import styled from 'styled-components'
import Task from './task'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px
  border: 1px solid lightgrey
  border-radius: 2px
  width:200px
  display:flex
  flex-direction:column`
const Title = styled.h3`
  padding: 8px`
const TaskList = styled.div`
  padding: 8px
  transition: background-color 0.3s ease
  background-color: ${props => props.isDraggingOver ? 'skyblue' : 'white'}
  flex-grow:1
  min-height:100px`


export class column extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}

export default column
