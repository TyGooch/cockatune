import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	handleGuestSubmit(e){
		e.preventDefault();
		const user = {username: 'TyGooch', password: 'password'};
		this.props.processForm({user});
	}

	navLink(){
		if (this.props.formType === "login") {
			return(
				<div className = "login-form-nav">
					{"Don't have an account?"}
					<br />
					<br />
					<Link to="/signup" className="login-form-nav-button">Sign Up</Link>
					<button className="login-form-nav-button" onClick={this.handleGuestSubmit}>Guest</button>

				</div>
			);
		} else {
			return(
				<div className = "login-form-nav">
					Already have an account?
					<br />
					<br />
					<Link to="/login" className="login-form-nav-button">Sign In</Link>
				</div>
			);
		}
	}

	optionName(){
		if (this.props.formType === "login") {
			return <div className="login-form-header">Sign In</div>;
		} else {
			return <div className="login-form-header">Sign Up</div>;
		}
	}

	errors() {
		return (this.props.errors.map( (error, i) => (
			error
		)));
	}

	render() {
		let userError;
		let passwordError;
		this.errors().forEach((error) => {
			if(error[0] === 'U' || error[0] === 'I'){
				userError = error;
			}
			if(error[0] === 'P'){
				passwordError = error;
			}
		});

		return (
				<form className="login-form-container">
					{ this.optionName() }
					<br />
					<div className="login-form">
						<div className = "login-error">{userError || <br />}</div>
							<input type="text"
								className = "login-input"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input"
								placeholder='Username'/>

						<div className = "login-error">{passwordError || <br />}</div>
							<input type="password"
								className = "login-input"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input"
								placeholder='Password'/>

						<br />
						<button className="login-submit" onClick={this.handleSubmit}>
							Go!
						</button>
						<br />
					</div>
					{ this.navLink() }
				</form>
		);
	}

}

export default SessionForm;
