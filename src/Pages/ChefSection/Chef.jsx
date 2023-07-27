import { useEffect, useState } from 'react';
import ChefData from './Chefdata';

const Chef = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefData(data))
    },[])
    return (
        <div>
            <div className='grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    chefData.map(chef => <ChefData key={chef.id} chef={chef}></ChefData>)
                }
            </div>
        </div>
    );
};

export default Chef;