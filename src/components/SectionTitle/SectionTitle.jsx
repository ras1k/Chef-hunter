

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12'>
            <p className='text-yellow-950 text-lg mb-2'>...{subHeading}...</p>
            <h3 className='text-4xl font-bold uppercase mb-4 text-yellow-950 border-y-4 py-8'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;