import React from 'react';
import Styles from './Register.module.css'
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            phone: '',
        }
    }
    componentDidMount() {
        const data = window.localStorage.getItem('local-key');
  
        const obj = JSON.parse(data);
        this.setState(obj);
       
    }
    componentDidUpdate() {
       
        window.localStorage.setItem('local-key', JSON.stringify(this.state));
        window.localStorage.removeItem('dashboard');

    }
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
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
    handleRegister = () => {
        fetch('https://india1bank.herokuapp.com/auth/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password
            })

        })
            .then(response => response.json())
            .then(data => {

                if (data.username) {
                    this.props.loadUser(data);
                    this.props.signin();
                }
                else {
                    alert('Invalid...data or user already exist !');

                }

            })
            .catch(console.log);


    }
    render() {
        return (

            <div>
                <h4 onClick={this.props.login} className={`dim ${Styles.topL}`}>Login</h4>

                <div className={Styles.Box}>
                    <article className={`br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5`}>
                        <main className="pa4 black-80 ">
                            <div className={`measure ${Styles.Form}`} style={{ textAlign: 'center', fontFamily: 'monospace' }} >
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                    <legend className={`f1 fw8 ph0 mh0 ${Styles.Leg}`} style={{ color: '#ffc846' }}>Register</legend>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="name" style={{ color: 'white' }}>Name</label>
                                        <input defaultValue={this.state.name} onChange={this.handleNameChange} className="br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" required />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="email-address" style={{ color: 'white' }}>Email</label>
                                        <input defaultValue={this.state.email} onChange={this.handleEmailChange} className="br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" required />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="email-address" style={{ color: 'white' }}>Mobile no.</label>
                                        <input defaultValue={this.state.phone} onChange={this.handlePhoneChange} className="br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="phone" id="phone" required />
                                    </div>
                                    <div className="mv3">
                                        <label className={`db fw6 lh-copy f6`} htmlFor="password" style={{ color: 'white' }}>Password</label>
                                        <input onChange={this.handlePasswordChange} className="br2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" required />
                                    </div>


                                </fieldset>
                                <div>
                                    <input
                                        onClick={this.handleRegister}
                                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br2"
                                        style={{ border: '2px solid black', cursor: 'pointer' }}
                                        type="submit"
                                        value="Register" />
                                </div>

                            </div>
                        </main>
                    </article>
                </div>
            </div>
        );
    }
}
export default Register;