import React from "react";
import { Carousel } from "react-bootstrap";

const Carousal = () => {
    return (
        <Carousel data-bs-theme="dark" className="mt-5">
            <Carousel.Item>
                <img className="d-block w-100 resheight" src="./images/carousal/1.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 resheight" src="./images/carousal/2.jpg" alt="Second slide" />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 resheight" src="./images/carousal/3.jpg" alt="Third slide" />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousal;
