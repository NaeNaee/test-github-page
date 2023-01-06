import {useQuery} from "react-query";
import Country from "./Country";
import { CountryDto } from "./model";

function App() {
    const query = useQuery<CountryDto[]>(['animal'], () => fetch('https://restcountries.com/v3.1/all').then(res => res.json()))
    const data = query.data || [];

    return (
        <div style={{padding:'10px'}}>
            <h1>Country v1</h1>

            {
                query.isFetching && <span>Loading...</span>
            }

<div style={{display:'flex',flexWrap:'wrap'}}>
                {
                    data.map(d => (
                        <Country data={d} key={d.name.official}/>
                    ))
                }
                </div>
        </div>
    );
}

export default App;
