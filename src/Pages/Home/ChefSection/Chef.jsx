import { useEffect, useState } from 'react';
import ChefData from './Chefdata';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Chef = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(()=>{
        fetch('https://b7a10-chef-recipe-hunter-server-side-ras1k.vercel.app/chef')
        .then(res => res.json())
        .then(data => setChefData(data))
    },[])
    return (
        <div className=''>
            <SectionTitle
                subHeading={'Meet our'}
                heading={'Chefs'}
            >
            </SectionTitle>
            <div className='grid mx-auto md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    chefData.map(chef => <ChefData key={chef.id} chef={chef}></ChefData>)
                }
            </div>
        </div>
    );
};

export default Chef;