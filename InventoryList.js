// InventoryList.js
import React, { Component } from 'react';
import { Button, Container, Table } from 'reactstrap';
import AppNavbar from './Navbar';
import { Link } from 'react-router-dom';

class InventoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventories: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('api/inventories')
            .then(response => response.json())
            .then(data => this.setState({ inventories: data, isLoading: false }));
    }

    removeInv = async (id) => {
        await fetch(`/api/inventory/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        console.log("Remove Done!");
        let updatedInventories = this.state.inventories.filter(i => i._id !== id);
        this.setState({ inventories: updatedInventories });
    }

    render() {
        const { inventories, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <AppNavbar />
                <Container>
                    <h3>Inventory List</h3>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventories.map(inventory =>
                                <tr key={inventory._id}>
                                    <td>{inventory.prodname}</td>
                                    <td>{inventory.qty}</td>
                                    <td>{inventory.price}</td>
                                    <td>{inventory.status}</td>
                                    <td>
                                        <Button size="sm" color="danger" onClick={() => this.removeInv(inventory._id)}>Delete</Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default InventoryList;
