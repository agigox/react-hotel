import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailError: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            address: e.target.address.value
        }
        this.props.addUser(user);
        this.props.history.push('/order-summary');
    }
    handleChange = (e) => {
        console.log(e.target.value)
        if(e.target.value !== '') {
            this.setState({
                emailError: false
            })
        } else {
            this.setState({
                emailError: true
            })
        }
    }
    render() {

        const emailError = this.state.emailError ? 'Email is Required' : '';
        return (
            <div className="containerForm">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label for="name">Nom</label>
                        <input type='text' name='name' id="name" placeholder="Votre nom.."/>
                    </div>
                    <div for="surname">
                        <label>Prénom</label>
                        <input type='text' name='surname' id="suename" placeholder="Votre prénom.."/>
                    </div>
                    <div>
                        <label for="addresse">Adresse</label>
                        <textarea name='address' id='address' placeholder="Votre adresse.."></textarea>
                    </div>
                    <div>
                        <label for='email' >Email</label>
                        <input type='text' name='email' onChange={this.handleChange} id='email' placeholder="Votre email.."/>
                        <div className="error-message">{emailError}</div>
                    </div>
                    <input type='submit' value='Submit' disabled={this.state.emailError}/>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    addUser: (data) => {
        dispatch({ type: 'ADD_USER', playload: data })
    }
});

export default withRouter(connect(null, mapDispatchToProps)(UserDetails));