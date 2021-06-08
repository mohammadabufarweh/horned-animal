import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:0
        }
    }
    
    votes=() => {
        let value = this.state.num;
        this.setState({num:value+=1})

        this.props.trueState();
    }

    render(){

        return(
        <div>
            <Card style={{ width: '18rem' , height:'35rem' }}>
             <Card.Img variant="top" src={this.props.images} onClick={this.votes} />
             <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
              ❤️ = {this.state.num}
             </Card.Text>

             <Card.Text>
              {this.props.description}
             </Card.Text>

             </Card.Body>
             </Card>
        </div>
        )
        }
} 

export default HornedBeast;