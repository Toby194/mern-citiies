import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

export default function AllCities() {
    const [cities, setCities] = useState(null);
    const [hasError, setHasError] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/cities')
            .then(res => setCities(res.data))
            .catch(() => setHasError(true))
    }, []);

    function handleDelete(id) {
        axios.delete('http://localhost:8000/api/cities/' + id)
            .then(() => setCities(cities.filter(city => city._id !== id)))
    }
    
    if(hasError) return 'Something went wrong!';
    
    if(cities == null) return 'Loading...';

    return (
        <div>
            <h1>All Cities</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map(city => (
                        <tr key={city._id}>
                            <td>
                                <Link to={'/cities/' + city._id}>
                                    {city.name}
                                </Link>
                            </td>
                            <td>{city.population}</td>
                            <td>
                                <button onClick={() => 
                                    handleDelete(city._id)}>
                                        Delete
                                </button>{' '}
                                <button onClick={() => 
                                    navigate('/cities/' + city._id + '/edit')}>
                                        Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

