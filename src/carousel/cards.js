import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Card from "./card.js";

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
            content: <Card />
        },
        {
            key: '2',
            content: <Card />
        },
        {
            key: '3',
            content: <Card />
        },
        {
            key: '4',
            content: <Card />
        },
        {
            key: '5',
            content: <Card />
        },
        {
            key: '6',
            content: <Card />
        },
        {
            key: '7',
            content: <Card />
        },
        {
            key: '8',
            content: <Card />
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
            </div>
        );
    }
}
