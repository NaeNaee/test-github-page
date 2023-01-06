import React from 'react';
import {useQuery} from "react-query";

function App() {
    const query = useQuery(['animal'], () => fetch('https://restcountries.com/v3.1/all').then(res => res.json()))
    const data: any[] = query.data || [];

    return (
        <div>
            <h1>Country v1</h1>

            {
                query.isFetching && <span>Loading...</span>
            }

            <ul>
                {
                    data.map(d => (
                        <li>{d.name.common}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;
