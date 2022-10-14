import React, { useEffect, useState } from 'react'
import "./Professional.css"
import { AiOutlineLink, AiFillGithub } from "react-icons/ai"
import { IoMdMail } from "react-icons/io"
import { BiMobileAlt, BiSquare } from "react-icons/bi"
import { MdLocationOn } from "react-icons/md"
import { GrLinkedinOption } from "react-icons/gr"
import BounceLoader from "react-spinners/BounceLoader"
import {userdata } from "../data"

function Theme1() {
    const themes = ["#52A589","#7895B2","#B1B2FF","#FF9494","#886F6F","#FF87CA","#1572A1","#905E96","#92A9BD"]
    const [themeclr, Setthemeclr] = useState(themes[0])
    const [loading, setLoading] = useState(true);

    const loadFunc=()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
    }

    useEffect(() => {
        loadFunc()
        window.scrollTo({
            top: 0, left: 0, behavior: "smooth"
        })
    }, [])

    const print =()=>{
        window.print()
    }

    return (
        <>
        {loading?<BounceLoader className='loader' color="#643baa" size={150}/>:
        <>
        <div className='noprint'><button className='print-btn' onClick={print}>Download</button></div>
        <div className='resume-main'>
            <div className='resume'>
                <div className='sec1'>
                    <div>
                        <img className='resume-img' src={userdata.personal.image} alt=''></img>
                    </div>
                    <div>
                        <IoMdMail style={{ color: themeclr }} />
                        <div>{userdata.personal.email}</div>
                        <BiMobileAlt style={{ color: themeclr }} />
                        <div>{userdata.personal.mob}</div>
                        <MdLocationOn style={{ color: themeclr }} />
                        <div>{userdata.personal.city}, {userdata.personal.country}</div>
                        {userdata.link.portfolio? <>
                            <AiOutlineLink style={{ color: themeclr }} />
                            <div>{userdata.link.portfolio}</div>
                        </>:null}
                        <GrLinkedinOption style={{ color: themeclr }} />
                        <div>{userdata.link.linkedin}</div>
                        <AiFillGithub style={{ color: themeclr }} />
                        <div>{userdata.link.github}</div>
                    </div>

                    <div>
                        <div className='resume-head' style={{ color: themeclr }}>TECHNICAL SKILLS</div>
                        {userdata.personal.technicalskill.map((item,index)=>{
                            return(
                                <React.Fragment key={index}>
                                <div className='resume-list'>{item.skill}</div>
                                <div className='ratebar' style={{ color: themeclr }}>
                                    <div style={{ width: `${(item.rate/10)*100}%`, backgroundColor: themeclr, color: themeclr }}></div>
                                </div>
                                </React.Fragment>
                            )
                        })}
                        
                    </div>

                    <div>
                        <div className='resume-head' style={{ color: themeclr }}>INTERESTS</div>
                        {userdata.personal.interest.map((item,index)=>{
                            return(
                                <div key={index} className='resume-list'>{item.hobbie}</div>
                            )
                        })}
                    </div>
                </div>
                <div className='sec2'>
                    <div className='sec2-first text-white' style={{ backgroundColor: themeclr }}>
                        <div className='text-3xl' style={{"fontWeight":"bold"}}>{userdata.personal.name} {userdata.personal.lastname}</div>
                        <div className='py-1 text-base'>{userdata.personal.title}</div>
                        <div>
                        {userdata.personal.quote}
                        </div>
                    </div>
                    {userdata.experience[0].company?<div className='r-padding'>
                        <div className='resume-head resume-content-head' style={{ color: themeclr }}>WORK EXPERIENCE</div>
                        <div>
                            {userdata.experience.map((item,index) => {
                                return (
                                    <div key={index}>
                                        <div className='font-bold resume-title' style={{ color: themeclr }}>{item.worktitle}</div>
                                        <div className="resume-subhead">{item.company}</div>
                                        <div className='text-xs italic' style={{ color: themeclr }}>{item.yearfrom} - {item.present===true?"Present":item.yearto}</div>
                                        <div className='resume-des'>
                                            <BiSquare style={{ color: themeclr }} />
                                            <div>
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>:null}

                    {userdata.project[0].name?<div>
                        <div className='resume-head resume-content-head' style={{ color: themeclr }}>PERSONAL PROJECTS</div>
                        {userdata.project.map((item,index) => {
                            return (
                                <div key={index} className='resume-des resume-proj'>
                                    <BiSquare style={{ color: themeclr }} />
                                    <div className='resume-courses project'>
                                        <div className='resume-title'>{item.name}</div>
                                        <div style={{color: themeclr}}>{item.tech}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>:null}

                    {userdata.course[0].name?<div>
                        <div className='resume-head resume-content-head' style={{ color: themeclr }}>{`COURSES & TRAINING`}</div>
                        {userdata.course.map((item,index) => {
                            return (
                                <div key={index} className='resume-courses'>
                                    <div className='resume-title'>{item.name}</div>
                                    <div style={{color: themeclr}}>{item.provider}</div>
                                </div>
                            )
                        })}

                    </div>:null}

                    <div className='sec2-last'>
                        <div className='resume-head resume-content-head' style={{ color: themeclr }}>EDUCATION</div>
                        {userdata.education.map((item,index) => {
                            return (
                                <div key={index} className='sec2-last-main'>
                                    <div className='font-bold resume-title' style={{ color: themeclr }}>{item.degree}</div>
                                    <div className='resume-title'>{item.university}</div>
                                    <div className='text-xs italic' style={{ color: themeclr }}>
                                        <div>{item.yearfrom} - {item.yearto}</div>
                                        <div>{item.grade}{item.gradetype==="grade"?"/10":"%"}</div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
        </>}
        </>
    )
}

export default Theme1