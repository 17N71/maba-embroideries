import React, { useId } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import useInput from "../../../hooks/useInput"
import Button from "../../Button"
import buildForm from "./buildForm.module.scss"
import axios from "axios"
interface IFormInput {
	Name: string
	Email: string
	FirstName: string
	Message: string
}
const BuildTogetherForm = () => {
	const nameId = useId()
	const emailId = useId()
	const firstNameId = useId()
	const messageId = useId()
	const [email, changeEmail] = useInput("")
	const [name, changeName] = useInput("")
	const [firstName, changeFirstName] = useInput("")
	const [textArea, changeTextArea] = useInput("")
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>()
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		axios({
			method: "POST",
			url: "https://formbold.com/s/6vWB9",
			data,
		})
	}
	const pattern =
		/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/g
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={buildForm.form}>
			<label
				htmlFor={nameId}
				className={`${buildForm.field} ${buildForm.name}`}
			>
				<span className={buildForm.alt}>Name</span>
				<input
					required={true}
					className={errors.Name ? buildForm.requried : ""}
					{...register("Name", { required: true })}
					value={name}
					placeholder={"Rishab Jain"}
					id={nameId}
					onChange={changeName}
				/>
			</label>
			<label
				htmlFor={emailId}
				className={`${buildForm.field} ${buildForm.email}`}
			>
				<span className={buildForm.alt}>Email</span>
				<input
					className={errors.Email ? buildForm.requried : ""}
					required={true}
					{...register("Email", {
						required: true,
						pattern,
					})}
					placeholder='Enter your email address'
					value={email.toString()}
					id={emailId}
					onChange={changeEmail}
				/>
			</label>
			<label
				htmlFor={firstNameId}
				className={`${buildForm.field} ${buildForm.firstName}`}
			>
				<span className={buildForm.alt}>Firm Name*</span>
				<input
					className={errors.FirstName ? buildForm.requried : ""}
					required={true}
					{...register("FirstName")}
					value={firstName}
					onChange={changeFirstName}
					id={firstNameId}
					placeholder={"Aadidev Trade Organisation"}
				/>
			</label>
			<label
				htmlFor={messageId}
				className={`${buildForm.field} ${buildForm.message}`}
			>
				<div className={buildForm.messageAlt}>
					<span className={buildForm.alt}>How may we help you?</span>
					<span className={buildForm.alt}>{textArea.length}/ 180</span>
				</div>
				<textarea
					required={true}
					className={errors.Message ? buildForm.requried : ""}
					max={180}
					maxLength={180}
					{...register("Message", { max: 180 })}
					value={textArea}
					onChange={changeTextArea}
					placeholder={
						"I would like to know more about your processes. Also, do you charge for samples? i have an order for about 50 peices of flower embroidery. You can email me the details, much thanks!"
					}
					id={messageId}
				/>
			</label>
			<Button type='submit' className={buildForm.button}>
				Send Message
			</Button>
		</form>
	)
}

export default BuildTogetherForm
