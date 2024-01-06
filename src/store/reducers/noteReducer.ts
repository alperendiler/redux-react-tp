import { ADD_TO_NOTE } from "../actions/noteActions";
import { noteItems } from "../initialValues/noteItems";


const initialState ={
    noteItems: noteItems
}

  
type NoteAction = {
    type: any;
    payload: any;
  };
export default function noteReducer(state = initialState, action: NoteAction) {
    switch (action.type){
        case ADD_TO_NOTE:
            console.log(state);
        return{
            
            ...state ,
            noteItems: [...state.noteItems, {  note: action.payload }],

        };
  

        default:
            console.log(state);
            return state;
    }
}

