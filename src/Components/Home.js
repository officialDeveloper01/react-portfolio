import React from 'react';
import Lottie from  "lottie-react";
import mobile from "../LottieFiles/mobile-first.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { IoLogoGameControllerB } from "react-icons/io";


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>NAMAN JAIN</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={mobile} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am fluent in <b>Python</b> and know a bit of <b>C++</b> and am working on a few 
            projects in the <b>React</b> stack.<br />
            I plan to learn <b>Next.js</b>, <b>C#</b> and<b> Rust</b> in the near future. <br /><br />
            Also, I love <b>Playing video Games</b>  <IoLogoGameControllerB style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home