import React from 'react';
import './intro.css';
import bg from '../../assets/Jastine_1-removebg-preview.png';

export const intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <div className="introduction">
              <span className="name">I'm Jastine Guzman,</span>
              <span className="aka">a.k.a. Tine</span>
            </div>
            <p className="description">I'm a determined student leader and an aspiring web developer, passionate <br/>about providing the best solutions to suit your needs and wants.</p>
            <a className="btn" href="https://drive.google.com/file/d/1fSTK2bJm30gexwICBj-QZ3qqthqDGQgo/view" target="_blank" rel="noopener noreferrer">DOWNLOAD CV</a>
        </div>
        <img src={bg} alt="" className="bg"/>
    </section>
  )
}

export default intro;