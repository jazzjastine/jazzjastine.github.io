import React from 'react';
import './intro.css';
import bg from '../../assets/Jastine_1-removebg-preview.png';
import {Link} from 'react-scroll';

export const intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="name">I'm Jastine Guzman, <span className="aka">a.k.a. Tine</span> </span>
            <p className="description">I'm a determined student leader and an aspiring web developer, passionate <br/>about providing the best solutions to suit your needs and wants.</p>
            <Link><button className="btn">DOWNLOAD RESUME</button></Link>
        </div>
        <img src={bg} alt="" className="bg"/>
    </section>
  )
}

export default intro;