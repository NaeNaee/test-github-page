import { CountryDto } from "./model";

type Props={
    data:CountryDto;
}

const Country=({data}:Props)=>{
    return(
        <div style={{border:'1px solid black',width:'200px',height:'auto',margin:'5px',padding:'5px'}}>
            <div>name: {data.name.official}</div>
            <div>
                <img src={data.flags.png} alt="flag" style={{width:'auto',height:'50px'}}/>
            </div>
        </div>
    );
}

export default Country;