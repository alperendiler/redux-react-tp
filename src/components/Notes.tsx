import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import Button from 'react-bootstrap/Button';

type Props = {}

export default function Notes({}: Props) {
    const { noteItems } = useSelector((state: RootState) => state.note);
    return (
   <>
   {
    noteItems.map((noteItem,index) =>(
        <div className="card pt-2em " key={index}  >
        <div className="card-body">
          <h3 className="card-title">{noteItem.note.title}</h3>
          <hr />

          <p className="card-text">{noteItem.note.note}</p>
          <Button variant="success">Notu Güncelle</Button>
          <Button variant="success" >Notu Sil</Button>
        </div>
      </div>
    ))
   }
      
   
   </>
  )
}