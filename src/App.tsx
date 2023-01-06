import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useQuery} from "react-query";

function App() {
    const query = useQuery(['animal'], () => fetch('https://apistest-fpipo.md.go.th/Animal').then(res => res.json()))
    const data: any[] = query.data || [];

    return (
        <div>
            <ul>
                {
                    data.map(d => (
                        <li>{d.animalName}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;
