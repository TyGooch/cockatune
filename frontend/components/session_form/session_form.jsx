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

	navLink(){
		if (this.props.formType === "login") {
			return(
				<div className = "login-form-nav">
					OR
					<br />
					<br />
					<Link to="/signup" className="login-form-nav-button">Sign Up</Link>
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

	// renderErrors(){
	// 	return(
	// 		<ul className="login-errors">
	// 			{this.props.errors.map( (error, i) => (
	// 				<li key={`error-${i}`}>
	// 					{error}
	// 				</li>
	// 			))}
	// 		</ul>
	// 	);
	// }
	renderErrors(){
		return(
			<ul className="login-errors">
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
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
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{ this.optionName() }
					<br />
					<div className="login-form">
						<div className = "login-error">{userError || <br />}</div>
							<input type="text"
								className = "login"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input"
								placeholder='Username'/>

						<div className = "login-error">{passwordError || <br />}</div>
							<input type="password"
								className = "login"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input"
								placeholder='Password'/>

						<br />
						<input className="login-submit" type="submit" value="Go!" />
						<br />
					</div>
					{ this.navLink() }
				</form>
			</div>
		);
	}

}

export default SessionForm;
