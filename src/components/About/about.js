import React from 'react';
import './about.css';
import AboutMePic from '../../assets/IMG-9381.JPG';

function about() {
  return (
    <section id='about'>
        <div class="row aboutrow">
            <div class="column">
                <img className="aboutImg" src={AboutMePic} alt="" />
            </div>
            <div class="column">
                <div class="aboutTitle">
                    <p>About Me</p>
                </div>
                <p className="desc aboutDesc1">I am a Computer Science undergraduate student from the University of San Carlos. I am a goal – driven leader who has led a few group projects and have participated in a number of organizations as well. I have worked on some web development and application development projects for the past 3 years.</p>
                <p className="desc aboutDesc2">I am always eager to help people and make their lives much easier and more efficient. I am able to do just that through technology and providing tech solutions to their problems. I hope to one day make a big impact in society, one code at a time.</p>
            </div>
        </div>
    </section>
  )
}

export default about