import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

class UsersChart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newUsersByMonth:[],
      isLoaded:false
    }
  }
  componentDidMount(){
    const usersUrl = "http://localhost:8080/numOfUsers";
    fetch(usersUrl)
          .then(response => response.json())
          .then(json => this.setState({
              newUsersByMonth: json,
              isLoaded: true
    }));
  }
  render(){
    console.log(this.state.newUsersByMonth);
    if(this.state.isLoaded){
      return (
        <React.Fragment>
          <Title>New users in 2021</Title>
          <ResponsiveContainer>
            <LineChart
              data={this.state.newUsersByMonth}
              margin={{
                top: 10,
                right: 10,
                bottom: 0,
                left: 16,
              }}
            >
              <XAxis dataKey="month" >
              </XAxis>
              <YAxis >
                <Label
                  angle={270}
                  position="left"
                  style={{ textAnchor: 'middle'}}
                >
                Users (thousands)
                </Label>
              </YAxis>
              <Line type="monotone" dataKey="amount" dot={true} />
            </LineChart>
          </ResponsiveContainer>
        </React.Fragment>
      );
    } else {
        return(
          <div>
            <Title>New users in 2021</Title>
            loading...
          </div>
        )
    }
  }
}
export default UsersChart