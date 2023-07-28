import { useEffect, useState } from 'react';
import ChefData from './Chefdata';

const Chef = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(()=>{
        fetch('https://b7a10-chef-recipe-hunter-server-side-ras1k.vercel.app/chef')
        .then(res => res.json())
        .then(data => setChefData(data))
    },[])
    return (
        <div className=''>
            <div className='text-center'>
                <h2 className='lg:text-5xl bg-yellow-950 w-2/5 pt-2 pb-2 rounded-lg text-white font-bold mx-auto mt-10 mb-10'>Our Chefs</h2>
            </div>
            <div className='grid mx-auto md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    chefData.map(chef => <ChefData key={chef.id} chef={chef}></ChefData>)
                }
            </div>
        </div>
    );
};

export default Chef;