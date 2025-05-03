import React from 'react';
import ProjectBox from './ProjectBox';
import chunkymonkey from "../images/chunkymonkey.png"
import fashionstore from "../images/fashionstore.png"
import starbattle from "../images/starbattle.png"
import dict from "../images/vocabulary.gif"
import resumeb from "../images/resumebuilder.png"
import fingerspeeds from "../images/fingerspeeds.png"
import chefai from "../images/chefai.png"
import evm from "../images/evm.png"
import parking from "../images/parking.png"
import { connect } from 'react-redux';
const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={starbattle} projectName="Star Battle" projectKey="Starbattle" />
        <ProjectBox projectPhoto={chunkymonkey} projectName="Chunky Monkey App" projectKey="chunkeymonkey" />
        <ProjectBox projectPhoto={dict} projectName="Pocket Dictonary App" projectKey="PocketDict" />
        <ProjectBox projectPhoto={fashionstore} projectName="Fashion Store" projectKey="FashionStore" />
        <ProjectBox projectPhoto={resumeb} projectName="Resume Builder" projectKey="ResumeBuilder"/>
        <ProjectBox projectPhoto={fingerspeeds} projectName="Finger Speeds" projectKey="FingerSpeeds"/>
        <ProjectBox projectPhoto={connect} projectName="Connect" projectKey="Connect"/>
        <ProjectBox projectPhoto={chefai} projectName="Chef AI" projectKey="ChefAI"/>
        <ProjectBox projectPhoto={evm}  projectName="EVM" projectKey="EVM"/>
        <ProjectBox projectPhoto={parking} projectName="Parking Allotment System" projectKey="ParkingAllotment"/>
      </div>

    </div>
  )
}

export default Projects