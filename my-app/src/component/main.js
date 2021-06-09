import React from 'react';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';
import formInformation from './formInformation';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class Main extends React.Component {
    render() {
        return (

            <div>
                <Form >
                    <Form.Group controlId="hornsSelected">
                        <Form.Label>Number of horns</Form.Label>
                        <Form.Control as="select">
                            <option>Any</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>more than 3</option>
                        </Form.Control>

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <CardGroup>
                    {this.props.horndArray.map((items, index) => {
                        return (<HornedBeast title={items.title}
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