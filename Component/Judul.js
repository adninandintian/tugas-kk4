import React from 'react';
import {Text} from 'react-native';

export  default  class Judul extends React.Component{
	render(){
		return(
			<Text style={salon.judul}>Biodata</Text>
		);
	}
}
const salon  = {
	judul :{color : "#D15857",
	fontSize : 73,
	fontWeight : 'bold'
	}
}