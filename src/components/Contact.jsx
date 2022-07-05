import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
    const form = useRef();
    const send = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pr991lw', 'template_tgeu01p', form.current, '2oJjcD4hZ12p8q3nz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='text-white flex font-semibold'>
            <center>
                <div className='text-3xl'>
                    Contact
                </div>
                <form ref={form} className='p-4 m-4 flex flex-col w-80 md:w-96 ' onSubmit={send} action="post">
                    <label htmlFor="">Name</label>
                    <input name='name' placeholder='Name..' className='border-2 m-2 rounded-xl placeholder:text-lime-300 border-lime-300' type="text" />
                    <label htmlFor="">Email</label>
                    <input placeholder='Email..' name='email' className='border-2 placeholder:text-lime-300 m-2 rounded-xl border-lime-300' type="text" />
                    <label htmlFor="">Message</label>
                    <textarea placeholder='Message..' className='border-2 m-2 placeholder:text-lime-300 rounded-xl border-lime-300' name="message" id="" cols="30" rows="10"></textarea>
                    <input type='submit' className='p-2 border-2 border-lime-300 hover:bg-lime-300 rounded-xl text-white font-bold hover:text-black' value="Send" />
                </form>
            </center>
        </div>
    )
}

export default Contact
