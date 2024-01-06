import React from 'react'
import { Route } from 'react-router'
import NoteAdd from '../components/NoteAdd'
import Notes from '../components/Notes'
import { Container } from 'react-bootstrap'

type Props = {}

export default function Homepage({}: Props) {
  return (
    <>  
        <Container >
         <NoteAdd/>
         <Notes/>

        </Container>
    </>
  )

}