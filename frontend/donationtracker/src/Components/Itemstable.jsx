import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CashCollectionTable = () => {
    const [cashCollectionData, setCashCollectionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const CommitteName = 'Matyalammacommitte';

    useEffect(() => {
        axios.post('http://localhost:5000/collection/cashbycommitte', {
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
                        <th>Devotte</th>
                        <th>PhnNumber</th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>Transaction Mode</th>
                        <th>Committee Name</th>
                        <th>Collected By</th>
                        <th>Collected Date</th>
                    </tr>
                </thead>
                <tbody>
                    {cashCollectionData.length > 0 ? (
                        cashCollectionData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Devotte}</td>
                                <td>{item.PhnNumber}</td>
                                <td>{item.Email}</td>
                                <td>{item.ItemName}</td>
                                <td>{item.Quantity}</td>
                                <td>{item.CommitteName}</td>
                                <td>{item.CollectedBy}</td>
                                <td>{item.CollectedDate}</td>
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
