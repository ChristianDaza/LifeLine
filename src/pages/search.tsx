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

const gridContainer: CSS.Properties = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    backgroundColor: '#808080',
    padding: '10px',
  };

const gridItem: CSS.Properties = {
    border: '1px solid rgba(0, 0, 0, 0.8)',
    padding: '20px',
    fontSize: '30px',
    textAlign: 'center',
}

const subheading: CSS.Properties = {
	fontSize: '250%',
	color: 'green',
    textAlign: 'center',
	margin: '0% 20%',
	fontFamily: 'fantasy'
  };

const dropdown: CSS.Properties = {
	width: '20%',
    padding: "20px"
};

const row: CSS.Properties = {
    content: "",
    display: 'table',
    clear: 'both',
}
  
const loginpage: FC = () => {
    return (
		<body style={background}>
			<h1 style={toppadding}></h1>
            <h1 style={h2left}>Lifeline</h1>
			<h1 style={h1Styles}><b><u>Search</u></b></h1>
            <h2 style = {h2Styles}>Here you as an officer can view all cases on our databases, and search for a certain type</h2>
            <br/>
            <h2 style = {h2Styles}><u>Filter by:</u></h2>
            <select style = {dropdown} name="incidentDrop" id="incidentDrop">
                <option value="Assault (non-sexual)">Assault (non-sexual)</option>
				<option value="Theft">Theft</option>
				<option value="Rape">Rape</option>
				<option value="Violent Robbery">Violent Robbery</option>
				<option value="Assault (Sexual)">Assault (Sexual)</option>
				<option value="Homicide">Homicide</option>
				<option value="Stalking">Stalking</option>
				<option value="Harassment">Harassment</option> 
				<option value="Other">Other</option> 
			</select>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style = {gridContainer}>
                <div style = {gridItem}>ID</div>
                <div style = {gridItem}>Description</div>
                <div style = {gridItem}>Image</div>  
                <div style = {gridItem}>13</div>
                <div style = {gridItem}>Last Thursday, I was walking home from work when she noticed someone following her. The guy came up to me, assaulted me and ran off. Despite there being a group of terrified schoolgirls who saw the whole thing, no one intervened.</div>
                <div style = {gridItem}>-</div>  
                <div style = {gridItem}>7</div>
                <div style = {gridItem}>On Monday I was assaulted by a hooded man. He looked about 6ft tall with a slight limp im his right leg.</div>
                <div style = {gridItem}>-</div>  
            </div>
		</body>
				)
}

export default loginpage