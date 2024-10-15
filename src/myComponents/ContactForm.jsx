import React, { useState } from 'react'
import emailjs from "emailjs-com"
import { useSelector } from 'react-redux'
import { Send } from 'lucide-react'
import { Flip, toast } from 'react-toastify'

const ContactForm = () => {

    const isDarkMode = useSelector(state => state.isDarkMode)

    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {

        if (name === "" || email === "" || message === "") {
            toast.warn("Please fill all fields", { theme: isDarkMode ? "dark" : "light", draggable: true, hideProgressBar: true, transition: Flip })
            return
        } else if (!email.includes("@")) {
            toast.warn("Please enter correct email", { theme: isDarkMode ? "dark" : "light", draggable: true, hideProgressBar: true, transition: Flip })
            return
        }

        const newName = name.trim()
        const newEmail = email.trim()
        const newMessage = message.trim()

        const formData = {
            from_name: newName,
            from_email: newEmail,
            message: newMessage,
            website_name: "https://toufikgouri.netlify.app"
        }

        try {
            await emailjs.send(serviceId, templateId, formData, publicKey)
            toast.success("Email sent successfully", { theme: isDarkMode ? "dark" : "light", draggable: true, hideProgressBar: true, transition: Flip })
        } catch (error) {
            toast.error("Something went wrong please try again later", { theme: isDarkMode ? "dark" : "light", draggable: true, hideProgressBar: true, transition: Flip })
            console.log(error);
        }
        setName("")
        setEmail("")
        setMessage("")
    } 

    return (
        <>
            <div className='mx-5 w-11/12 sm:w-2/5'>
                <form onSubmit={(e) => e.preventDefault()} className="FormComponent flex flex-col">
                    <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className='bg-transparent w-full my-2 p-2 outline-none border border-black/20 dark:border-white/20 rounded-md' placeholder='Name...' />
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='bg-transparent w-full my-2 p-2 outline-none border border-black/20 dark:border-white/20 rounded-md' placeholder='Email...' />
                    <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className='bg-transparent w-full my-2 p-2 outline-none border border-black/20 dark:border-white/20 rounded-md resize-none' placeholder='Message...' />
                    <button type='submit' onClick={(e) => handleSubmit(e)}
                        className="w-full my-2 p-2 outline-none rounded-md border border-black/20 dark:border-white/20 hover:bg-slate-500/20 flex justify-center items-center">
                        Send <Send className='inline-block size-4 ms-1' />
                    </button>
                </form>
            </div>
        </>
    )
}

export default ContactForm

