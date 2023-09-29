import './styles.css';

const HeroCard = () => {
    return (
        <div className='adopet-hero-card-container'>
            
            <div className='adopet-hero-card-img'>
                <h1>Img</h1>
            </div>
            <div className='adopet-hero-card-buttons'>
                <button className='btn btn-primary'>Quero Adotar</button>
                <button className='btn btn-primary'>Colocar para adoção</button>
            </div>
        </div>
    );
}

export default HeroCard;