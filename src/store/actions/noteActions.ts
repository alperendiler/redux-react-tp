
export const ADD_TO_NOTE = 'ADD_TO_NOTE';

interface NoteAddForm {
    title: string;
    note: string;
  }

export function addToNote(values: NoteAddForm){
    return{
        type: ADD_TO_NOTE,
        payload: values
    }
}