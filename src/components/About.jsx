
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>With over 20 years of professional experience...</p>
            <div className="team">
                <div className="team-member">
                    <img src="/images/stylist1.jpg" alt="Stylist 1" />
                    <h3>Stylist 1</h3>
                </div>
                <div className="team-member">
                    <img src="/images/stylist2.jpg" alt="Stylist 2" />
                    <h3>Stylist 2</h3>
                </div>
            </div>
        </div>
    );
};

export default About;
