import React from 'react';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';
import Title from "./Title"

class HighLevelList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            highLevelData: [],
            isLoaded: false
        }
    }
    componentDidMount(){
        fetch('http://34.70.95.142:8080/highLevelData')
              .then(response => response.json())
              .then(json => this.setState({
                  highLevelData: json,
                  isLoaded: true
              }));
      }
    render(){
        if(this.state.isLoaded){
            return(
                <div>
                    <Title>At a high level</Title>
                    <List>
                        <ListItem>
                        <ListItemText primary={"Number of Communities:"} />
                        {this.state.highLevelData.numberOfCommunities}
                        </ListItem>
                        <ListItem>
                        <ListItemText primary="Total number of listings:" />
                        {this.state.highLevelData.totalNumberOfListings}
                        </ListItem>
                        <ListItem>
                        <ListItemText primary="Total registered users:" />
                        {this.state.highLevelData.totalRegisteredUsers}
                        </ListItem>
                        <ListItem>
                        <ListItemText primary="Total page views:" />
                        {this.state.highLevelData.totalPageViews}
                        </ListItem>
                    </List>
                </div>
            );
        } else {
            return(
                <div>
                <Title>At a high level</Title>
                <List>loading...</List>
            </div>
            );
        }
    }
}
export default HighLevelList

