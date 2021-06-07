import React from 'react';

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            vote:0
        }
    }
    
    vote=() => {
        let value = this.state.vote;
        this.setState({vote:value+=1})
    }



    render(){
        
        


        
        return(
        <div>
            <h2>{this.props.title}</h2>
            <img src={this.props.img} alt={this.props.keyword} onClick={this.vote} />
            <p>{this.props.description}</p>
            <p> number of clicks : {this.state.vote } </p>
        </div>
        )
        }
} 




export default HornedBeast;