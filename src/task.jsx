import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey
  border-radius: 2px
  padding: 8px
  margin-bottom: 8px
  transition: background-color 0.2s ease
  background: ${props => props.isDragging ? 'lightgreen': 'white'}`

export default class task extends Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}>
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    )
  }
}
