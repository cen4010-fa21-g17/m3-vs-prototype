/* eslint-disable react/no-unescaped-entities */
import React, {Component} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { CardHeader, colors, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import ProfilePicChanger from './ProfilePicChanger';
import pic1 from "../Pics/pic1.jpg";
import pic2 from "../Pics/pic2.jpg";

class Features extends Component{
  constructor(props){
    super(props);
    this.state={
      profileImage: ''
    }
  }

  handleImageChange = (profileImage) => {
    this.setState({
      profileImage
    })
  }
  render(){
    return(
      <div className = "feature">
      <h3>Hello</h3>
      <Avatar size={64} icon = "user" src ={this.state.profileImage} />
      <ProfilePicChanger handleImageChange ={this.handleImageChange} pic1={pic1} pic2 ={pic2}/>
      </div>
    );

  }
   
}


export default Features;
