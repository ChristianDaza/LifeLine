import { FC } from 'react'
import type * as CSS from 'csstype';

const h1Styles: CSS.Properties = {
  textAlign: 'center', // Type error on value
  fontSize: '700%',
  color: 'green',
  fontFamily: 'fantasy',
  margin: '0% 40%',
};

const h2Styles: CSS.Properties = {
	fontSize: '200%',
	color: 'green',
	fontFamily: 'fantasy'
  };

const h2left: CSS.Properties = {
	fontSize: '200%',
	color: 'green',
	fontFamily: 'fantasy',
    float: 'left',
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

const loginbars: CSS.Properties = {
    width: '100%;',
    padding: '12px 45%',
    textAlign: 'center',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
}

const submitbutton: CSS.Properties = {
	display: 'block',
	width: '20%',
	border: '2px solid #555555',
	fontSize : "30px",
	textAlign: 'center',
    margin: 'auto', 
	backgroundColor: '#00ba94',
};

const toppadding: CSS.Properties = {
	paddingTop: '20px',
};

const subheading: CSS.Properties = {
	fontSize: '250%',
	color: 'green',
    textAlign: 'center',
	margin: '0% 20%',
	fontFamily: 'fantasy'
  };

const loginpage: FC = () => {
    return (
		<body style={background}>
			<h1 style={toppadding}></h1>
            <h1 style={h2left}>Lifeline</h1>
			<h1 style={h1Styles}><b><u>Login</u></b></h1>
            <br/>
            <h2 style = {subheading}><b><u>Username</u></b></h2>
            <label><b>Username</b></label>
            <input type="text" style = {loginbars} placeholder="Username" name="uname" id ="uname" required></input>.
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style = {subheading}><b><u>Password</u></b></h2>
            <label><b>Password</b></label>
            <input type="text" style = {loginbars} placeholder="Password" name="psw" id ="psw" required></input>.
            <button style = {submitbutton}>submit</button>

		</body>

				)
}

export default loginpage