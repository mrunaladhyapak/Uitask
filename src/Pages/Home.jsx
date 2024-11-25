import { useState, useRef } from 'react'
import {
    Tabs, Tab, Nav, Row, Col, Button, Overlay, Tooltip
} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rabbitriders from "../assets/images/rabbitriders.jpg";
import easterbunny from "../assets/images/easterbunny.png";
import astronaut from "../assets/images/astronaut.png";
import img1 from "../assets/images/cartoon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowDown, faCircleArrowLeft, faCircleInfo, faClockRotateLeft, faDroplet, faFile, faFolder } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const firstTabRef = useRef(null);
    const secondTabRef = useRef(null);
    const thirdTabRef = useRef(null);
    const fourthTabRef = useRef(null);
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);
    const [showFourth, setShowFourth] = useState(false);
    const images = [
        { id: 1, src: img1, alt: "Image 1" },
        { id: 2, src: easterbunny, alt: "Image 2" },
        { id: 3, src: rabbitriders, alt: "Image 3" },
        { id: 4, src: img1, alt: "Image 4" },
        { id: 5, src: easterbunny, alt: "Image 5" },

    ];
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };
    const sectionOneRef = useRef(null);
    const sectionTwoRef = useRef(null);

    const settings = {
        dots: false, // Display dots for navigation
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides at a time
        slidesToScroll: 1,
        centerMode: true, // Center the active slide
        // centerPadding: "0", // Remove extra padding

    };

    return (
        <div className='homestyle'>
            <div className='div-style'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className='bg-dark'>
                        <Col sm={3} className='mx-auto' style={{
                            background: "#f3b50a",
                            position: "sticky",
                            top: "0",
                            zIndex: "9",
                        }}>
                            <Nav variant="pills" className="flex-row justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        <FontAwesomeIcon icon={faCircleArrowLeft} className='icostyle' ref={target} onClick={() => setShow(!show)} />
                                        <Overlay target={target.current} show={show} placement="bottom">
                                            {(props) => (
                                                <Tooltip id="overlay-example" {...props}>
                                                    Back
                                                </Tooltip>
                                            )}
                                        </Overlay>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <FontAwesomeIcon icon={faDroplet} className='icostyle' ref={firstTabRef}
                                            onClick={() => setShowFirst(!showFirst)} />
                                        <Overlay target={firstTabRef.current}
                                            show={showFirst} placement="bottom">
                                            {(props) => (
                                                <Tooltip id="overlay-example" {...props}>
                                                    Recent,live and upcoming NFT drops.
                                                </Tooltip>
                                            )}
                                        </Overlay>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        <FontAwesomeIcon icon={faFolder} className='icostyle' ref={secondTabRef} onClick={() => setShowSecond(!showSecond)} />
                                        <Overlay target={secondTabRef.current}
                                            show={showSecond} placement="bottom">
                                            {(props) => (
                                                <Tooltip id="overlay-example" {...props}>
                                                    This is your wallet inventory.An overview of all NFTs you received out of the MoonBoxes.
                                                </Tooltip>
                                            )}
                                        </Overlay>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">
                                        <FontAwesomeIcon icon={faClockRotateLeft} className='icostyle' ref={thirdTabRef} onClick={() => setShowThird(!showThird)} />
                                        <Overlay target={thirdTabRef.current}
                                            show={showThird} placement="bottom">
                                            {(props) => (
                                                <Tooltip id="overlay-example" {...props}>
                                                    This is your history.An overview of your MoonBox NFT claims.
                                                </Tooltip>
                                            )}
                                        </Overlay>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">
                                        <FontAwesomeIcon icon={faCircleInfo} className='icostyle' ref={fourthTabRef} onClick={() => setShowFourth(!showThird)} />
                                        <Overlay target={fourthTabRef.current}
                                            show={showFourth} placement="bottom">
                                            {(props) => (
                                                <Tooltip id="overlay-example" {...props}>
                                                    This is your history.An overview of your MoonBox NFT claims.
                                                </Tooltip>
                                            )}
                                        </Overlay>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={12} className=''>
                            <Tab.Content className='bg-dark p-5'>
                                <Tab.Pane eventKey="first" className='text-center'>
                                    <Row className='justify-content-center'>
                                        <Col lg="6">
                                            <Row>
                                                <Col lg="6">
                                                    <div style={{ borderTop: "3px solid #f3b50a" }}></div>
                                                    <p className='txtstyle py-3'>
                                                        <span className='text-white'> Buy MoonBoxes </span>
                                                        and expand your NFT collection
                                                    </p>
                                                    <div style={{ borderTop: "1px solid #f3b50a" }}></div>
                                                    <p className='subtxt py-3'>
                                                        Buying MoonBoxes is a unique way to acquire NFTs and build your collection.
                                                        It is built on the Binance Smart Chain,MoonRiver,Polygon,Ethereum and DogeChain.Only available on
                                                        <span className='text-white'>MoonBoxes.io</span>
                                                    </p>
                                                    <div className='text-start'>
                                                        <Button className="btnstyle me-3">Buy A MoonBox</Button>
                                                        <Button className='arrowdwnbtn' onClick={() => scrollToSection(sectionOneRef)}>
                                                            <FontAwesomeIcon icon={faCircleArrowDown} className='arrow' />
                                                        </Button>

                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <img src={rabbitriders} className='imgstyle' />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row className='justify-content-center'>
                                        <Col lg="6">
                                            <Row>
                                                <Col lg="6">
                                                    <div style={{ borderTop: "3px solid #f3b50a" }}></div>
                                                    <p className='txtstyle py-3'>
                                                        <span className='text-white'> Buy MoonBoxes </span>
                                                        and expand your NFT collection
                                                    </p>
                                                    <div style={{ borderTop: "1px solid #f3b50a" }}></div>
                                                    <p className='subtxt py-3'>
                                                        Buying MoonBoxes is a unique way to acquire NFTs and build your collection.
                                                        It is built on the Binance Smart Chain,MoonRiver,Polygon,Ethereum and DogeChain.Only available on
                                                        <span className='text-white'>MoonBoxes.io</span>
                                                    </p>
                                                    <div className='text-start'>
                                                        <Button className="btnstyle me-3">Buy A MoonBox</Button>
                                                        <Button className='arrowdwnbtn' >
                                                            <FontAwesomeIcon icon={faCircleArrowDown} className='arrow' />
                                                        </Button>
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <img src={easterbunny} className='imgstyle' />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row className='justify-content-center'>
                                        <Col lg="6">
                                            <Row>
                                                <Col lg="6">
                                                    <div style={{ borderTop: "3px solid #f3b50a" }}></div>
                                                    <p className='txtstyle py-3'>
                                                        <span className='text-white'> Buy MoonBoxes </span>
                                                        and expand your NFT collection
                                                    </p>
                                                    <div style={{ borderTop: "1px solid #f3b50a" }}></div>
                                                    <p className='subtxt py-3'>
                                                        Buying MoonBoxes is a unique way to acquire NFTs and build your collection.
                                                        It is built on the Binance Smart Chain,MoonRiver,Polygon,Ethereum and DogeChain.Only available on
                                                        <span className='text-white'>MoonBoxes.io</span>
                                                    </p>
                                                    <div className='text-start'>
                                                        <Button className="btnstyle me-3">Buy A MoonBox</Button>
                                                        <Button className='arrowdwnbtn' >
                                                            <FontAwesomeIcon icon={faCircleArrowDown} className='arrow' />
                                                        </Button>
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <img src={rabbitriders} className='imgstyle' />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row className='justify-content-center'>
                                        <Col lg="6">
                                            <Row>
                                                <Col lg="6">
                                                    <div style={{ borderTop: "3px solid #f3b50a" }}></div>
                                                    <p className='txtstyle py-3'>
                                                        <span className='text-white'> Buy MoonBoxes </span>
                                                        and expand your NFT collection
                                                    </p>
                                                    <div style={{ borderTop: "1px solid #f3b50a" }}></div>
                                                    <p className='subtxt py-3'>
                                                        Buying MoonBoxes is a unique way to acquire NFTs and build your collection.
                                                        It is built on the Binance Smart Chain,MoonRiver,Polygon,Ethereum and DogeChain.Only available on
                                                        <span className='text-white'>MoonBoxes.io</span>
                                                    </p>
                                                    <div className='text-start'>
                                                        <Button className="btnstyle me-3">Buy A MoonBox</Button>
                                                        <Button className='arrowdwnbtn' >
                                                            <FontAwesomeIcon icon={faCircleArrowDown} className='arrow' />
                                                        </Button>
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <img src={easterbunny} className='imgstyle' />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <Row className='justify-content-center'>
                                        <Col lg="6">
                                            <Row>
                                                <Col lg="6">
                                                    <div style={{ borderTop: "3px solid #f3b50a" }}></div>
                                                    <p className='txtstyle py-3'>
                                                        <span className='text-white'> Buy MoonBoxes </span>
                                                        and expand your NFT collection
                                                    </p>
                                                    <div style={{ borderTop: "1px solid #f3b50a" }}></div>
                                                    <p className='subtxt py-3'>
                                                        Buying MoonBoxes is a unique way to acquire NFTs and build your collection.
                                                        It is built on the Binance Smart Chain,MoonRiver,Polygon,Ethereum and DogeChain.Only available on
                                                        <span className='text-white'>MoonBoxes.io</span>
                                                    </p>
                                                    <div className='text-start'>
                                                        <Button className="btnstyle me-3">Buy A MoonBox</Button>
                                                        <Button className='arrowdwnbtn' >
                                                            <FontAwesomeIcon icon={faCircleArrowDown} className='arrow' />
                                                        </Button>
                                                    </div>
                                                </Col>
                                                <Col lg="6">
                                                    <img src={rabbitriders} className='imgstyle' />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

                {/* <Row >
                    <Col>
                        <div className="carousel-container" ref={sectionOneRef}>
                            <button className="carousel-button" onClick={handlePrev}>
                                &lt;
                            </button>
                            <div className="carousel-wrapper">
                                {images.map((image, index) => {
                                    const position =
                                        index === activeIndex
                                            ? "active"
                                            : index === (activeIndex - 1 + images.length) % images.length
                                                ? "left"
                                                : index === (activeIndex + 1) % images.length
                                                    ? "right"
                                                    : "hidden";

                                    return (
                                        <div key={image.id} className={`carousel-slide ${position}`}>
                                            <img src={image.src} alt={image.alt} />
                                        </div>
                                    );
                                })}
                            </div>
                            <button className="carousel-button" onClick={handleNext}>
                                &gt;
                            </button>
                        </div>
                    </Col>
                </Row> */}


                <Row>
                    <Col lg={12} className='mx-auto bg-dark'>
                        <Row>
                            <Col lg={7} className='mx-auto ' style={{ overflow: 'hidden' }}>
                                <Slider {...settings} className="custom-slider">
                                    {images.length > 0 &&
                                        images.map((v) => {
                                            return (
                                                <>
                                                    <Row>
                                                        <Col lg="12" className='mx-auto' style={{ textAlign: "-webkit-center" }}>
                                                            <img src={v.src} className='sliderimg' />
                                                        </Col>
                                                    </Row>
                                                </>
                                            )
                                        })
                                    }
                                </Slider>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="justify-content-center bg-dark">
                    <Col lg="6">
                        <Row>
                            <Col lg="5">
                                <div style={{ borderTop: "3px solid #f3b50a" }}></div>
                                <p className='txtstyle py-3'>
                                    <span className='text-white'> MoonBoxes.io </span>
                                    your base to purchase NFTs
                                </p>
                                <div style={{ borderTop: "1px solid #f3b50a" }}></div>
                            </Col>
                            <Col lg="2"></Col>
                            <Col lg="4">
                                <div style={{ borderTop: "1px solid #f3b50a" }}></div>
                                <p className='subtxt py-3'>
                                    <span className='text-white'>MoonBoxes.io</span> Offers you a
                                    complete overview of upcoming active & recent NFT drops.

                                </p>
                                <p className='subtxt py-3'>
                                    <span className='text-white'>MoonBoxes.io</span> Offers you a
                                    complete overview of upcoming active & recent NFT drops.

                                </p>
                                <div className='text-start'>
                                    <Button className="btnstyle me-3" onClick={() => scrollToSection(sectionTwoRef)}>Explore</Button>

                                </div>
                            </Col>
                            <Col lg="1"></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center bg-dark py-5" ref={sectionTwoRef}>
                    <Col lg="6">
                        <Row>
                            <Col lg="5">
                                <div style={{ borderTop: "3px solid #f3b50a" }}></div>
                                <p className='txtstyle py-3'>
                                    <span className='text-white'> MoonBoxes.io </span>
                                    your base to purchase NFTs
                                </p>
                                <div style={{ borderTop: "1px solid #f3b50a" }}></div>
                                <div className='text-start mt-3'>
                                    <Button className="btnstyle me-3 mb-3">
                                        Contact Us
                                    </Button>

                                </div>
                                <div className='text-start mt-3'>

                                    <Button className="btnstyle me-3 mb-3">
                                        <FontAwesomeIcon icon={faFile} className='me-2' />
                                        Application Form
                                    </Button>
                                </div>
                            </Col>
                            <Col lg="1"></Col>
                            <Col lg="5">
                                <img src={astronaut} className='imgstyle' />
                            </Col>
                            <Col lg="1"></Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
