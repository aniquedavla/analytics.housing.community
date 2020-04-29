import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import Title from "./Title"

const HighLevelList = ({highLevelData}) => {
    return(
        <div>
            <Title>At a high level</Title>
            <List>
                <ListItem>
                <ListItemText primary={"Number of Communities:"} />
                </ListItem>
                <ListItem>
                <ListItemText primary="Total number of listings:" />
                </ListItem>
                <ListItem>
                <ListItemText primary="Total registered users:" />
                </ListItem>
                <ListItem>
                <ListItemText primary="Total page views:" />
                </ListItem>
            </List>
        </div>
    );
}
export default HighLevelList

