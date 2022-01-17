import React, { Component } from 'react';

const initData = {
    heading: "Make humanity",
    heading2: "healthy and happy",
    content: "We are... ",
    btnText: "Get Started",
    heroThumb: "/img/main.png"
    //heroThumb: "/img/main2.jpeg"
}

class HeroSection extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section id="home" className="section welcome-area bg-inherit h-100vh overflow-hidden">
                
                {/*보라색으로 삼각형으로 나오는 부분*/}
                {/* <div className="shapes-container">
                    <div className="bg-shape"/>
                </div> */}
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        {/* Welcome Intro Start */}
                        <div className="col-12 col-md-7">
                            <div className="welcome-intro">
                            <h2 class>{this.state.data.heading}</h2>
                            <h2 class>{this.state.data.heading2}</h2>
                            <p className="my-4">{this.state.data.content}</p>
                            {/* <a href="/#" className="btn">{this.state.data.btnText}</a> */}
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            {/* Welcome Thumb */}
                            <div className="welcome-thumb">
                            {/* <img src={this.state.data.heroThumb} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroSection;