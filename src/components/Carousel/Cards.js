import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import Card from "./Card.js";
import './Card.css';

export default class Example extends Component {
    state = {
        goToSlide: 0,
        showNavigation: true,
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



    render() {
        return (
            <div
                style={{ width: "80%", height: "500px", margin: "0 auto" }}
            >
                <Carousel
                    slides={this.slides}
                    showNavigation={this.state.showNavigation}
                />
            </div>
        );
    }
}
