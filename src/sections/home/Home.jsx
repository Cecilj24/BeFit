import './Home.scss';
import { Carousel } from 'react-responsive-carousel';
import { slideshows } from '../../constants';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Home = () => {
    return (
        <Carousel
            className='home'
            id='Home'
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
        >
            {slideshows.map((slideshow) => (
                <div key={slideshow.id}
                >
                    <img
                        src={slideshow.url}
                        alt={slideshow.name}
                        width="100%"
                        height="100%"




                    />

                    <div
                        className='textbox'
                    >
                        <span>Be strong, Be fit</span>
                        <h3 className='h3'>{slideshow.body}</h3>
                        <br />
                        <h3 className='h3'>{slideshow.body2}</h3>
                        <br />
                        <a href="#" className="btn">get started</a>
                    </div>

                </div>
            ))}


        </Carousel>
    )
}

export default Home

