import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/tables.css'

const CashCollectionTable = () => {
    const [cashCollectionData, setCashCollectionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const CommitteName = 'Matyalammacommitte';

    useEffect(() => {
        axios.post('http://localhost:5000/expenses/getitemusagebycommitte', {
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
            <h2>Item Expense Data</h2>
            <table>
                <thead>
                    <tr>
                    ItemName,Quantity,Purpose,SpentBy,CommitteName
                        <th>ItemName</th>
                        <th>Quantity</th>
                        <th>Purpose</th>
                        <th>SpentBy</th>
                        <th>Committee Name</th>
                    </tr>
                </thead>
                <tbody>
                    {cashCollectionData.length > 0 ? (
                        cashCollectionData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.ItemName}</td>
                                <td>{item.Quantity}</td>
                                <td>{item.Purpose}</td>
                                <td>{item.SpentBy}</td>
                                <td>{item.CommitteName}</td>
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

export default CashCollectionTable;
