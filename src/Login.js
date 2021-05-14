import React, { useState } from 'react';
import 'firebase/auth'
import './Signup.css';


 //const firebase = useFirebaseApp();

//TODO convert this to a functional component to use firebase hooks - (DONE Task !)
export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
    event.preventDefault();
    alert(`Email:  ${email} 
Password:   ${password}`);
  };

/* 
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            error: '',
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        //     .then(result => {
        //         if (!result.user.emailVerified) {
        //             this.setState({
        //                 ...this.state,
        //                 error: 'Please verify your email before to continue',
        //             })
        //             firebase.auth().signOut();
        //         }
        //     })
        //     .catch(error => {
        //         // Update the error
        //         this.setState({
        //             ...this.state,
        //             error: error.message,
        //         })
        //     })
    }
    */
    return (
        <>
            <h1>Log In</h1>
            <form
                onSubmit={ onSubmit }
            >
                <input type="text" placeholder="Email" name="email" onChange={(event) => setEmail(event.target.value)}/><br />
                <input type="password" placeholder="Password" name="password" onChange={(event) => setPassword(event.target.value)}/><br />
                <button type="submit">Log in</button>
                
            </form>
            
        </>
    )
};

export default Login;