import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import Register from './../components/Register';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryRegister } from './../actions/accountActions.js';

class RegisterContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired,
		message: PropTypes.string.isRequired,
		dispatch: PropTypes.func.isRequired,
		registered: PropTypes.bool.isRequired,
		isRegistering: PropTypes.bool.isRequired
	}
	// Переменная для чек-бокса.
	state = {
		knowRules: false
	}

	componentDidMount() {
	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
       changeHeightAwesomeBorder();
    }
	submitRegisterForm = (values, dispatch) => {
		console.log(values);
		const { site } = this.props;
		values.site = site;

		dispatch(tryRegister(site, values));
		
	}

	allowRegister = () => {
		this.setState({
			knowRules: !this.state.knowRules
		});
	}
	render() {
		return (
			<div className='contentWrapper'>
				<UserPanelContainer />
				<Container>
					<Register {...this.props}
						{...this.state}
						submitRegisterForm={this.submitRegisterForm} 
						allowRegister={this.allowRegister}
					/>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { 
		selectedSite,
		dataBySite
	} = state;
		
	const { 
		isLogged,
		isRegistering,
		registered,
		registerMessage
	} = dataBySite[selectedSite];


	return {
		site: selectedSite,
		isLogged,
		isRegistering,
		registered,
		message: registerMessage
	};
}

export default withRouter(connect(mapStateToProps)(RegisterContainer));