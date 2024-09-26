
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Reclaim Your Confidence</h1>
                    <p>Dallas Hair Extension Experts</p>
                    <a href="/contact" className="cta-btn">Book a Consultation</a>
                </div>
                <div className="hero-image">
                    <img src="/images/model.jpg" alt="Hair Model" />
                </div>
            </section>

            <section className="service-highlights">
                <h2>Our Services</h2>
                <div className="services">
                    <div className="service-card">
                        <h3>Hair Extensions</h3>
                        <p>Enhance your look with premium hair extensions.</p>
                    </div>
                    <div className="service-card">
                        <h3>Hair Coloring</h3>
                        <p>Get the color that defines your style.</p>
                    </div>
                    <div className="service-card">
                        <h3>Hair Treatment</h3>
                        <p>Luxurious treatments to nourish your hair.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
