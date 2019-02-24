import React from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getItems} from '../actions/itemActions';
import PropTypes from 'prop-types'

class ShoppingList extends React.Component {
    // THis is removed as from now data will be comming from redux
    // state= {
    //     items: [
    //         {id: uuid(), name: "item1"},
    //         {id: uuid(), name: "item2"},
    //         {id: uuid(), name: "item3"},
    //         {id: uuid(), name: "item4"},
    //     ]
    // };

    componentDidMount(){
        this.props.getItems();
    }

    render(){
        const {items} = this.props.item;
        return(
            <Container>
                <Button
                    color = "dark"
                    style = {{ marginBottom: '2rem' }}
                    onClick = {()=>{
                        const name = prompt('Enter item name');
                        if(name){
                            this.setState(state => ({
                                items: [...state.items,{id: uuid(), name: name}]
                            }));
                        }
                    }}
                >
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({id, name})=> (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }))
                                    }}>
                                    &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}

                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

// This is the list of props for this class
ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

// This method just parse the whole data to this.props
const mapStateToProps = (state) => ({
    item: state.item
});

// Here we are connecting the redux to the component
export default connect(mapStateToProps, {getItems})(ShoppingList);

