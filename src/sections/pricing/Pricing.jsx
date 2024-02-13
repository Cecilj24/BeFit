import './Pricing.scss';

const Pricing = () => {
    return (
        <div
            className='pricing'
            id='Pricing'

        >
            <div
                className='information'
            >
                <span>pricing plan</span>
                <h3>affordable pricing <br /> plan for your</h3>
                <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Ipsam dolore excepturi ea suscipit <br /> fugiat cum
                    quae, rerum optio ?</p>
                <p> <i className="check"></i> cardio exercise </p>
                <p> <i className="check"></i> weight lifting </p>
                <p> <i className="check"></i> diet plans </p>
                <p> <i className="check"></i> overall results </p>
                <a href="#" className="btn">all pricing</a>
            </div>

            <div
                className='basic'
            >
                <h3>Basic Plan</h3>
                <div className="price"><span>$</span>30<span>/mo</span></div>
                <div className="list">
                    <p> <i className="check">&#10003;</i> personal training </p>
                    <p> <i className="check">&#10003;</i> cardio exercise </p>
                    <p> <i className="check">&#10003;</i> weight lifting </p>
                    <p> <i className="check">&#10003;</i> diet plans </p>
                    <p> <i className="check">&#10003;</i> overall results </p>
                </div>
                <a href="#" className="btn">get started</a>

            </div>
            <div
                className='premium'
            >
                <h3> Premium Plan</h3>
                <div className="price"><span>$</span>60<span>/mo</span></div>
                <div className="list">
                    <p> <i className="check">&#10003;</i> personal training </p>
                    <p> <i className="check">&#10003;</i> cardio exercise </p>
                    <p> <i className="check">&#10003;</i> weight lifting </p>
                    <p> <i className="check">&#10003;</i> diet plans </p>
                    <p> <i className="check">&#10003;</i> overall results </p>
                </div>
                <a href="#" className="btn">get started</a>

            </div>
        </div>
    )
}

export default Pricing