import { FC } from 'react'
import type * as CSS from 'csstype';

const h1Styles: CSS.Properties = {
  textAlign: 'center', // Type error on value
  fontSize: '700%',
  color: 'green',
  fontFamily: 'fantasy'
};

const h2Styles: CSS.Properties = {
	fontSize: '200%',
	color: 'green',
	fontFamily: 'fantasy'
  };

const background: CSS.Properties = {
	background: 'white'
};

const buttons: CSS.Properties = {
	display: 'block',
	width: '20%',
	border: '2px solid #555555',
	height: '50px',
	fontSize : "30px",
	textAlign: 'center',
	margin: 'auto',
	left: '50%',
	backgroundColor: '#00ba94',
};

const submitbutton: CSS.Properties = {
	display: 'block',
	width: '20%',
	border: '2px solid #555555',
	fontSize : "30px",
	textAlign: 'center',
	backgroundColor: '#00ba94',
};

const textarea: CSS.Properties = {
	width: '50%',
	height: '250px',
	padding: '12px 10px',
	boxSizing: 'border-box',
	border: '2px solid #ccc',
	borderRadius: '4px',
	float: 'left',
	color: 'black',
	margin: '0% 10%',
	backgroundColor: '#f8f8f8',
	fontSize: '16px',
};

const dropdown: CSS.Properties = {
	width: '20%',
};

const toppadding: CSS.Properties = {
	paddingTop: '20px',
};

const subheading: CSS.Properties = {
	fontSize: '250%',
	color: 'green',
	margin: '0% 20%',
	fontFamily: 'fantasy'
  };

function goToLogin() {
    window.location.href='/login';
}

const mainpage: FC = () => {
    return (
		<body style={background}>
			<h1 style={toppadding}></h1>
			<h1 style={h1Styles}><b><u>Lifeline</u></b></h1>
			<h2 style = {h2Styles}>At Lifeline, we are providing a way for anyone to report incidents anonymously. This will be done by bystanders or the victim reporting incidents which will automatically be sent to the police to be investigated.</h2>
			<br/>
			<button style = {buttons}>login</button>
			<br/>
			<br/>
			<br/>
			<h2 style = {h2Styles}>We're sorry this has happened, you're so courageous in coming forwards, even if in private! Please fill in below a description of the crime that took place, including as much detail as you can (what the perpetrator looked like, where it was, when etc). The more detail you can give us the better chance we have of delivering justice. Once you're done, choose the type of incident and press 'Submit'.</h2>
			<br/>
			<br/>
			<br/>
			<h2 style = {subheading}><b><u>What's the complaint? What crime was taking place?</u></b></h2>
			<select style = {dropdown} name="incidentDrop" id="incidentDrop">
				<option value="Theft">Theft</option>
				<option value="Rape">Rape</option>
				<option value="Violent Robbery">Violent Robbery</option>
				<option value="Assault (Sexual)">Assault (Sexual)</option>
				<option value="Assault (non-sexual)">Assault (non-sexual)</option>
				<option value="Homicide">Homicide</option>
				<option value="Stalking">Stalking</option>
				<option value="Harassment">Harassment</option> 
				<option value="Other">Other</option> 
			</select>
			<textarea name="userDesc" id="userDesc" style = {textarea}>Enter complaint..</textarea>
			<br/>
			<button style = {submitbutton}>submit</button>
		</body>
				)
}

export default mainpage