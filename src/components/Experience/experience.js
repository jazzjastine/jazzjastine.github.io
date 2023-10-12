import React from 'react'
import './experience.css'
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import cprog from '../../assets/cprog.png';
import bootstrap from '../../assets/bootstrap.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import java from '../../assets/javascript.png';
import gdsc from '../../assets/gdsc.jpg';
import cisco from '../../assets/cisco.jpg';
import sas from '../../assets/sas.png';
import ssc from '../../assets/ssc.jpg';


function experience() {
  return (
    <section id='experience'>
        <div class="expTitle">
            <p>Experiences</p>
        </div>

        <table class="row skills">
            <tr>
                <td class="column tech">
                    <img className="techSpec" src={cprog} alt="" />
                </td>
                <td class="column tech">
                    <img className="techSpec" src={html} alt="" />
                </td>
                <td class="column tech">
                    <img className="techSpec" src={css} alt="" />
                </td>
                <td class="column tech">
                    <img className="bs" src={bootstrap} alt="" />
                </td>
                <td class="column tech">
                    <img className="java" src={java} alt="" />
                </td>
                <td class="column tech">
                    <img className="reacts" src={react} alt="" />
                </td>
                <td class="column tech">
                    <img className="nodejs" src={node} alt="" />
                </td>
            </tr>
        </table>

        <div class="grid-container">
            <div class="grid-item">
                <img className="gdsc" src={gdsc} alt="" />
                <div className="orgText">
                    <p className="orgName">Google Developer Student Clubs - University of San Carlos</p>
                    <hr></hr>
                    <p className="orgPos">Student Consultant</p>
                    <p className="orgDate">August 2022 - Present</p>
                    <p className="orgPos">Lead/President</p>
                    <p className="orgDate">August 2021 - August 2022</p>
                    <p className="orgPos">Finance Lead</p>
                    <p className="orgDate">August 2020 - August 2021</p>
                </div>
            </div>
            <div class="grid-item">
                <img className="cisco" src={cisco} alt="" />
                <div className="orgText">
                    <p className="orgName">USC Computer and Information Sciences Council</p>
                    <hr></hr>
                    <p className="orgPos">Vice - President for Finance</p>
                    <p className="orgDate">September 2022 - June 2023</p>
                </div>
            </div>
            <div class="grid-item">
                <div className="orgBar">
                    <img className="sas" src={sas} alt="" />
                    <div className="orgText">
                        <p className="orgName">USC School of Arts and Sciences Student Council</p>
                        <hr></hr>
                        <p className="orgPos">Executive Secretary</p>
                        <p className="orgDate">September 2022 - June 2023</p>
                    </div>
                </div>
            </div>
            <div class="grid-item">
                <div className="orgBar">
                    <img className="ssc" src={ssc} alt="" />
                    <div className="orgText">
                        <p className="orgName">USC Supreme Student Council <br></br> A.Y. 2023 - 2024</p>
                        <hr></hr>
                        <p className="orgPos">Councilor</p>
                        <p className="orgDate">May 2023 - Present</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid-container-block">
            <div class="grid-block">
                <p className="orgAwards">AWARDS AND CERTIFICATIONS</p>
                <hr className="line"></hr>
                <span className="awardCompe"><span className="awardPlace">Mentee, </span>Startup Island PH Mentoring Program Sixth Cohort</span>
                <p className="awardDate">June - September 2023</p>
                <span className="awardCompe"><span className="awardPlace">4th Place, </span>DICT Philippine Startup Challenge 7</span>
                <p className="awardDate">December 2022</p>
                <span className="awardCompe"><span className="awardPlace">Top 6, </span>Top GDSC PH Chapters with the most impactful events</span>
                <p className="awardDate">December 2021</p>
                <span className="awardCompe"><span className="awardPlace">Participant, </span>Financial Literacy Innovation Challenge (PD x CLFI)</span>
                <p className="awardDate">April - May 2021</p>
            </div>
        </div>
    </section>
  )
}

export default experience