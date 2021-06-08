import React from 'react';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';





class Main extends React.Component{
    render(){
        return(


        <div>

        <CardGroup>

    {this.props.horndArray.map((items,index)=>{
    return(<HornedBeast title={items.title} 
                   description={items.description} 
                   images={items.image_url}
                   trueState={this.props.trueState}

                   />)
    })}
       </CardGroup>


        </div>
        )
    }
}

export default Main;