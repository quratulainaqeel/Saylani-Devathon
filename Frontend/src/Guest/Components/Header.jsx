import React from 'react'
import { MdPersonSearch } from 'react-icons/md'
import {AiOutlineSchedule} from 'react-icons/ai'
 import {HiOutlineLightBulb} from 'react-icons//hi2'
import {FaUserDoctor} from 'react-icons/fa6'
export default function Header() {
    return (
        < >
            <div style={{ textAlign: 'center' }}>
                <img src="https://wallpapercave.com/wp/wp2789220.jpg" alt="" height={520} width={'99.7%'} />
            </div>
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className=" card">
                            <div className=" card-body">
                                <div className="card-text text-center ">
                                    <MdPersonSearch className='text-danger' style={{ fontSize: 50 }} />
                                    <h5 style={{ color: "#203e59" }}>Search Doctor</h5>
                                    <small >
                                        We're here to help whenever you feel it but keeping you healthy is our better priority
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className=" card">
                            <div className=" card-body">
                                <div className="card-text text-center ">
                                    <FaUserDoctor className='text-success my-1' style={{ fontSize: 40 }} />
                                    <h5 style={{ color: "#203e59" }} >Check Doctor Profile</h5>
                                    <small >
                                        We're here to help whenever you feel it but keeping you healthy is our better priority
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className=" card">
                            <div className=" card-body">
                                <div className="card-text text-center ">
                                    <AiOutlineSchedule className='text-primary' style={{ fontSize: 50 }} />
                                    <h5 style={{ color: "#203e59" }}>Schedule Appoinment</h5>
                                    <small >
                                        We're here to help whenever you feel it but keeping you healthy is our better priority
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className=" card">
                            <div className=" card-body">
                                <div className="card-text text-center ">
                                    <HiOutlineLightBulb className='text-warning' style={{ fontSize: 45 }} />
                                    <h5 style={{ color: "#203e59" }}>Get your Solution</h5>
                                    <small >
                                        We're here to help whenever you feel it but keeping you healthy is our better priority
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
