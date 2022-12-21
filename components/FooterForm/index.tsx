import Button from "../Button"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState, useId } from "react"
import form from "./form.module.scss"
import axios from "axios"
import { BsArrowRight } from "react-icons/bs"
import Title from "./../Title/index"
type Inputs = {
	email: string
}
const FooterForm = () => {
	const [email, setEmial] = useState<string>("")
	const emailId = useId()
	const pattern =
		/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/g
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		axios({
			method: "POST",
			url: "https://formbold.com/s/6vWB9",
			data,
		})
	}
	return (
		<div>
			<Title variant='h4' className={form.title}>
				Stay in Touch
			</Title>
			<form onSubmit={handleSubmit(onSubmit)} className={form.form}>
				<div className={`${form.fields} ${errors.email ? form.required : ""}`}>
					<input
						placeholder='Enter your email address'
						required={true}
						id={emailId}
						{...register("email", {
							required: true,
							pattern,
						})}
						onChange={(e) => setEmial(e.target.value)}
						className={`${form.emailField}`}
					/>
					<Button type='submit' className={form.btn}>
						<BsArrowRight size={24} title={"subscribe"} />
					</Button>
				</div>
				<label htmlFor={emailId} className={form.aboutSubscribe}>
					No spam, only exciting updates and announcements
				</label>
			</form>
		</div>
	)
}

export default FooterForm
