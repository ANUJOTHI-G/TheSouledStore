import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from './apiService';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    const handleAddProduct = async () => {
        await createProduct(newProduct);
        setNewProduct({ name: '', description: '', price: '' });
        fetchProducts();
    };

    const handleDeleteProduct = async (id) => {
        await deleteProduct(id);
        fetchProducts();
    };

    const handleUpdateProduct = async (id, updatedProduct) => {
        await updateProduct(id, updatedProduct);
        fetchProducts();
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <h2>Add New Product</h2>
                <TextField
                    label="Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <TextField
                    label="Description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <TextField
                    label="Price"
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <Button onClick={handleAddProduct}>Add Product</Button>
            </div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                                    {/* Add Update functionality as needed */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AdminDashboard;
