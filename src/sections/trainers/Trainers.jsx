import './Trainers.scss';
import { trainers } from '../../constants';


const Trainers = () => {
    return (
        <div
            className='trainers'
            id='Trainers'

        >
            {trainers.map((trainer) => (
                <div key={trainer.id}
                    className='box-container'
                >

                    <div
                        className='box'
                    >
                        <img
                            src={trainer.imgURL}
                            alt="trainer"
                        />
                        <div
                            className='content'
                        >
                            <span>{trainer.title}</span>
                            <h3>{trainer.name}</h3>
                            <div
                                className='share'
                            >
                                <a href="#" className="facebook"></a>
                                <a href="#" className="twitter"></a>
                                <a href="#" className="pinterest"></a>
                                <a href="#" className="linkedin"></a>

                            </div>

                        </div>

                    </div>


                </div>
            ))}
        </div>
    )
}

export default Trainers