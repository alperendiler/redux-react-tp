import {ErrorMessage, Field} from "formik";


type Props = {
	label: string;
	name: string;
	type?: string; 
};

const NoteInput= (props: Props) =>{
    return (
		<div className="mb-3">
			<h4><label className="form-label">{props.label}</label></h4>
			<Field
				name={props.name}
				type={props.type || "text"}
				className="form-control"
			/>
			<ErrorMessage name={props.name}>
				{message => <p className="text-danger">{message}</p>}
			</ErrorMessage>
		</div>
	);
}

export default NoteInput;