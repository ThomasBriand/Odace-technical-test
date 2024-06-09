import Marquee from "react-fast-marquee";
import { Card } from "@mui/joy";
import './Caroussel.css';

function CarouselComponent() {
    return (
        
        <Marquee gradient={false}>
            <Card variant="outlined" className="carousel-card" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/kitkat.png"})`, backgroundColor: 'black'}}>
            </Card>
            <Card variant="outlined" className="carousel-card" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/logo-big-brain-base-png.png"})`, backgroundColor: 'black'}}>
            </Card>
            <Card variant="outlined" className="carousel-card" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/dunkin.png"})`, backgroundColor: 'black'}}>
            </Card>
            <Card variant="outlined" className="carousel-card" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/logo-big-brain-base-png.png"})`, backgroundColor: 'black'}}>
            </Card>
            <Card variant="outlined" className="carousel-card" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/redbull.png"})`, backgroundColor: 'black'}}>
            </Card>
            <Card variant="outlined" className="carousel-card" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/logo-big-brain-base-png.png"})`, backgroundColor: 'black'}}>
            </Card>
        </Marquee>
    );
}

export default CarouselComponent;