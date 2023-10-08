import React from 'react'
import './projects.css'
import a from '../../assets/a.png'
import b from '../../assets/b.png'
import c from '../../assets/c.png'
import d from '../../assets/d.png'
import e from '../../assets/e.png'
import f from '../../assets/f.png'
import g from '../../assets/g.png'


function projects() {
  return (
    <section id="projects">
        <div class="projTitle">
            <p>Projects</p>
        </div>
        <div className="grid-container-proj">
            <div className="grid-item-pic">
                <img className="projectPic" src={a} alt="" />
            </div>
            <div className="grid-item-text">
                <p className="projectName">JAM Homemade Goodies</p>
                <p className="projectDesc">An informational website about the JAM Homemade Goodies business, its products and contact information. This project used C# ASP.NET and Entity Framework.</p>
            </div>
            <div className="grid-item-pic">
                <img className="projectPic" src={b} alt="" />
            </div>
            <div className="grid-item-text">
                <p className="projectName">Little Chef</p>
                <p className="projectDesc">A recipe mobile application that provides recipes with video and text instructions, allows user to user communication and recipe sharing, and provides digital tools for cooking and baking. I was responsible for the UI/UX design of this project and I used Figma to create it.</p>
            </div>
            <div className="grid-item-pic">
                <img className="projectPic" src={c} alt="" />
            </div>
            <div className="grid-item-text">
                <p className="projectName">Just Tine</p>
                <p className="projectDesc">A personal blog website that shows various pictures, articles and information about the travel experience and lifestyle of Jastine Guzman. This project is a one-page static website that used only HTML, CSS and Bootstrap.</p>
            </div>
            <div className="grid-item-pic">
                <img className="projectPic" src={d} alt="" />
            </div>
            <div className="grid-item-text">
                <p className="projectName">it’s a date!</p>
                <p className="projectDesc">An online calendar website that organizes your schedule and tasks. This project was built using PHP and MySql.</p>
            </div>
            <div className="grid-item-pic">
                <img className="projectPic" src={e} alt="" />
            </div>
            <div className="grid-item-text">
                <p className="projectName">Electroworx Services</p>
                <p className="projectDesc">An online booking system and informational website that shows what the business is all about, its services, and contact information. This website includes a booking feature that will let you book an appointment with a technician. This website was built using ReactJS and NodeJS.</p>
            </div>
            <div className="grid-item-pic">
                <img className="projectPic" src={f} alt="" />
            </div>
            <div className="grid-item-text">
                <p className="projectName">Pureline</p>
                <p className="projectDesc">An online database system for a water refilling business. All the transaction information, employee data and sales list are included and organized. This project used PHP and MySql.</p>
            </div>
            <div className="grid-item-pic">
                <img className="projectPic" src={g} alt="" />
            </div>
            <div className="grid-item-text">
                <p className="projectName">Autobar</p>
                <p className="projectDesc">A mobile application for bar establishments that contains an e-wallet feature, POS, and reward system. C# Xamarin was used to build the project and I used Figma for the UI/UX design. </p>
            </div>
        </div>
    </section>
  )
}

export default projects