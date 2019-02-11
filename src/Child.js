import React, { Component } from 'react';
export default class Child extends React.Component{
    componentDidMount() {
        console.log("child");
        for (let i = 0; i < 20; i++) {
            console.log("i", i)
        }
    }
    render() {
        return (
            <div>child</div>
        )
    }
}