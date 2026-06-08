import { useRef } from 'react'
import Input from './Input'
export const UseRefs = () => {
    // const usernameRef = document.getElementById('username');
    // const passwordRef = document.getElementById('password');
    // This is not the correct way to access DOM elements in React. We should use useRef instead. 
    // useRef is a hook that allows us to create a reference to a DOM element. We can then access the DOM element using the current property of the reference.
    const passwordRef = useRef(''); 
    const usernameRef = useRef('');
    const phoneRef = useRef('');
    
const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", usernameRef.current.value);
        console.log("Password:", passwordRef.current.value);
        console.log("Phone Number:", phoneRef.current.value);
}
    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <input type="text" placeholder='Enter your name' id='username' ref={usernameRef}/>
            <input type="text" placeholder='Enter your password' id='password' ref= {passwordRef}/>
            <Input type= "number" placeholder= "Enter your phone number" id= 'number' ref= {phoneRef}/>
            <button>Submit</button>
        </form>
    )

}