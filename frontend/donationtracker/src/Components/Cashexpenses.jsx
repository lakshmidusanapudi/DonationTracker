import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/tables.css'

const CashExpensesCollectionTable = () => {
    const [cashCollectionData, setCashCollectionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const CommitteName = 'Matyalammacommitte';

    useEffect(() => {
        axios.post('http://localhost:5000/expenses/getcashexpenspesbycommitte', {
            CommitteName,
        }) 
            .then((response) => {
                console.log('Response Data:', response.data); 
                setCashCollectionData(response.data.result);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h2>Cash Collection Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Shop Owner Phone Number</th>
                        <th>Committee Name</th>
                        <th>Spent By</th>
                        <th>Transaction Mode</th>
                        <th>Receipt</th>
                    </tr>
                </thead>
                <tbody>
                    {cashCollectionData.length > 0 ? (
                        cashCollectionData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.ItemName}</td>
                                <td>{item.Quantity}</td>
                                <td>{item.Amount}</td>
                                <td>{item.ShopOwnerPhnNumber}</td>
                                <td>{item.CommitteName}</td>
                                <td>{item.SpentBy}</td>
                                <td>{item.TransactionMode}</td>
                                <td>{item.Receipt}</td> 
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CashExpensesCollectionTable;
