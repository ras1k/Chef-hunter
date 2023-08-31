import ReactPlayer from 'react-player'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const VideoPlayer = () => {
    return (
        <div className='my-10'>
            <SectionTitle
                subHeading={"Chef's"}
                heading={'Special Platters'}
            >
            </SectionTitle>
            <div className='flex items-center justify-center gap-4'>
                <ReactPlayer url='https://www.youtube.com/watch?v=__qtH1ly2Sg&ab_channel=BabishCulinaryUniverse' />
                <ReactPlayer url='https://www.youtube.com/watch?v=7fOY40FvF9Q&ab_channel=BabishCulinaryUniverse' />
            </div>
            <div className='flex items-center justify-center gap-4 mt-4'>
                <ReactPlayer url='https://www.youtube.com/watch?v=H-PxDQf-_Zg&ab_channel=ThyThan' />
                <ReactPlayer url='https://www.youtube.com/watch?v=giRSqhiN4oY&ab_channel=%EC%BF%A0%ED%82%B9%ED%95%98%EB%A3%A8CookingHaru%3A%29' />
            </div>


        </div>
    );
};

export default VideoPlayer;