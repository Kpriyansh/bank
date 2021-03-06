import React from 'react';
import Styles from './Signin.module.css'
// let f = 0;

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            password: ''
        }
    }
    componentDidMount() {
        const data = window.localStorage.getItem('local-key');
        
        const obj = JSON.parse(data);
        this.setState(obj);
       
    }
    componentDidUpdate() {
       const obj={
           email:this.state.email,
           phone:this.state.phone,
           password:''
       }
        window.localStorage.setItem('local-key', JSON.stringify(obj));
        window.localStorage.removeItem('dashboard');

    }
    handleEmailChange = (event) => {
    
            this.setState({ email: event.target.value });
    }
    handlePhoneChange = (event) => {
        this.setState({ phone: event.target.value });
    }
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }
    handleSignin = () => {

        fetch('https://india1bank.herokuapp.com/auth/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data === 'Not found' || data === 'Incorrect password' || !data.username) {
                    alert(data);
                }
                else {

                    this.props.loadUser(data);
                    this.props.login();
                }

            })
            .catch(err => console.log(err));


    }
    render() {
        return (
            <div className={Styles.Box}>
                <article className={`br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5`}>
                    <main className="pa4 black-80 ">
                        <div className={`measure ${Styles.Form}`} style={{ textAlign: 'center', fontFamily: 'monospace' }} >
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className={`f1 fw8 ph0 mh0 ${Styles.Leg}`} style={{ color: '#ffc846' }} >Login</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" style={{ color: 'white' }} htmlFor="email-address">Email</label>
                                    <input
                                        defaultValue={this.state.email}
                                        onChange={this.handleEmailChange}
                                        className="br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email" name="email-address" id="email-address"
                                        required />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" style={{ color: 'white' }} htmlFor="email-address">Mobile no.</label>
                                    <input
                                        defaultValue={this.state.phone}
                                        onChange={this.handlePhoneChange}
                                        className="br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text" name="phone" id="phone"
                                        required />
                                </div>
                                <div className="mv3">
                                    <label className={`db fw6 lh-copy f6`} style={{ color: 'white' }} htmlFor="password">Password</label>
                                    <input
                                        onChange={this.handlePasswordChange}
                                        className="br2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password" name="password" id="password"
                                        required />
                                </div>

                            </fieldset>
                            <div className="">
                                <input
                                    onClick={this.handleSignin}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2"
                                    style={{ border: '2px solid black' }}
                                    type="submit"
                                    value="Login" />
                            </div>
                            <div className="lh-copy mt3">
                                <p onClick={this.props.register} className={`br2 f6 link dim black db ${Styles.Register}`} style={{ cursor: 'pointer', color: '#ffc846' }}>Register</p>

                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}
export default SignIn;