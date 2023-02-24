import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

const getTouches = (evt) => {
    return (
        evt.touches || evt.originalEvent.touches // browser API
    );
};

export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        enableSwipe: true,
        config: config.gentle
    };

    slides = [
        {
            key: '1',
            content: <img src="https://picsum.photos/800/800/?random" alt="1" />
        },
        {
            key: '2',
            content: <img src="https://picsum.photos/800/800/?random" alt="2" />
        },
        {
            key: '3',
            content: <img src="https://picsum.photos/600/800/?random" alt="3" />
        },
        {
            key: '4',
            content: <img src="https://picsum.photos/800/500/?random" alt="4" />
        },
        {
            key: '5',
            content: <img src="https://picsum.photos/800/800/?random" alt="5" />
        },
        {
            key: '6',
            content: <img src="https://picsum.photos/500/800/?random" alt="6" />
        },
        {
            key: '7',
            content: <img src="https://picsum.photos/800/600/?random" alt="7" />
        },
        {
            key: '8',
            content: <img src="https://picsum.photos/800/800/?random" alt="8" />
        }
    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value, 10) || 0
        });
    };

    handleTouchStart = (evt) => {
        if (!this.state.enableSwipe) {
            return;
        }

        const firstTouch = getTouches(evt)[0];
        this.setState({
            ...this.state,
            xDown: firstTouch.clientX,
            yDown: firstTouch.clientY
        });
    };

    handleTouchMove = (evt) => {
        if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = this.state.xDown - xUp;
        let yDiff = this.state.yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                /* left swipe */
                this.setState({
                    goToSlide: this.state.goToSlide + 1,
                    xDown: null,
                    yDown: null
                });
            } else {
                /* right swipe */
                this.setState({
                    goToSlide: this.state.goToSlide - 1,
                    xDown: null,
                    yDown: null
                });
            }
        }
    };

    render() {
        return (
            <div
                style={{ width: "80%", height: "500px", margin: "0 auto" }}
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
            >
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />
                <div
                    style={{
                        margin: "0 auto",
                        marginTop: "2rem",
                        width: "50%",
                        display: "flex",
                        justifyContent: "space-around"
                    }}
                >
                    <div>
                        <label>Go to slide: </label>
                        <input name="goToSlide" onChange={this.onChangeInput} />
                    </div>
                    <div>
                        <label>Offset Radius: </label>
                        <input name="offsetRadius" onChange={this.onChangeInput} />
                    </div>
                    <div>
                        <label>Show navigation: </label>
                        <input
                            type="checkbox"
                            checked={this.state.showNavigation}
                            name="showNavigation"
                            onChange={(e) => {
                                this.setState({ showNavigation: e.target.checked });
                            }}
                        />
                    </div>
                    <div>
                        <label>Enable swipe: </label>
                        <input
                            type="checkbox"
                            checked={this.state.enableSwipe}
                            name="enableSwipe"
                            onChange={(e) => {
                                this.setState({ enableSwipe: e.target.checked });
                            }}
                        />
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                this.setState({ config: config.gentle });
                            }}
                            disabled={this.state.config === config.gentle}
                        >
                            Gentle Transition
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                this.setState({ config: config.slow });
                            }}
                            disabled={this.state.config === config.slow}
                        >
                            Slow Transition
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                this.setState({ config: config.wobbly });
                            }}
                            disabled={this.state.config === config.wobbly}
                        >
                            Wobbly Transition
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                this.setState({ config: config.stiff });
                            }}
                            disabled={this.state.config === config.stiff}
                        >
                            Stiff Transition
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
