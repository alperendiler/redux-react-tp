import { Form, Formik } from 'formik'
import React from 'react'
import NoteInput from '../utilities/customFormControls/NoteInput';
import { useDispatch } from 'react-redux';
import { addToNote } from '../store/actions/noteActions';
import Button from 'react-bootstrap/Button';

type Props = {}

interface ProductAddForm {
	title: string;
	note: string
}
export default function NoteAdd({}: Props) {
    const initialValues: ProductAddForm  ={
        title: "",
		note: ""
	
    };

    const dispatch = useDispatch();


  return (
    <>
        <Formik
         initialValues={initialValues}
         onSubmit={values => {
            dispatch(addToNote(values));
        }}
         >
            <Form>
            <NoteInput name="title" label="Başlık"></NoteInput>
            <NoteInput name="note" label="Notunuz"></NoteInput>

            <Button variant="success" type='submit'>Ekle</Button>
            </Form>
        </Formik>

    </>
  )
}