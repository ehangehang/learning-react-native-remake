import React from 'react';
import {Text} from 'react-native';

export default class Title extends React.Component{
	render(){
		return(
		<Text style={salon.judul}> {this.props.judul} </Text>
		)
	}
}
const salon ={
	judul:{
color:'#f00',
fontSize:50,
backgroundColor:'#0f0'
	}
}