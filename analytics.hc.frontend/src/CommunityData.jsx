import React, { Component } from 'react';

class CommunityData extends Component{
    constructor(props){
        super(props)
        this.state = {
            communities:[],
            isLoaded:false
        }
    }

    componentDidMount(){
        fetch('http://my-json-server.typicode.com/aniquedavla/demo/communities')
            .then(response => response.json())
            .then(json => this.setState({
                communities: json,
                isLoaded: true
            }))
    }

    render(){
        let {isLoaded, communities} = this.state
        if(isLoaded){
            return(
                <div>
                    <h2>Community Data</h2>
                    <ul>
                        {communities.map(aCommunity =>(
                            <p key={aCommunity.id}>{aCommunity.name}</p> 
                        ))
                        }
                    </ul>
                </div> 
            );        
        } else {
            return(
                <div>Loading community data...</div>
                
            );
        }
        
    }
}

export default CommunityData