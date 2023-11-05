import React from 'react'

export default function ContactUs() {
    return (
        <section
            style={{ background: "linear-gradient(180deg, #f2f6fa 0%, #fff 100%)" }}
        >
            <div id="Contact" className="container text-center">
                <h2 className="p-4" style={{ color: "#203e59" }} data-aos="fade-up">
                    CONTACT
                </h2>
                <p data-aos="fade-up">
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                    aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                    quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                    sit in iste officiis commodi quidem hic quas.
                </p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div
                                className="card shadow p-3 mb-4 bg-body-tertiary rounded"
                                data-aos="fade-up"
                            >
                                <div className="card-body">
                                    <i
                                        className="fa fa-location-dot fa-xl mb-4 "
                                        style={{ color: "#ffc107" }}
                                    />
                                    <h4 style={{ color: "#777777" }}>Our Address</h4>
                                    <em>A108 Adam Street, New York, NY 535022</em>
                                </div>
                            </div>
                            <div className="row pt-4 pb-3 ">
                                <div
                                    className="col-md-6  "
                                    data-aos="fade-up"
                                    data-aos-duration={2000}
                                >
                                    <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                        <div className="card-body">
                                            <i
                                                className="fa-sharp fa-regular fa-envelope fa-xl"
                                                style={{ color: "#ffc107" }}
                                            />
                                            <h4 style={{ color: "#777777" }}>Email Us</h4>
                                            <em>info@example.com</em>
                                            <em>contact@example.com</em>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration={2500}
                                >
                                    <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                        <div className="card-body">
                                            <i
                                                className="fa fa-phone-volume fa-xl"
                                                style={{ color: "#ffc107" }}
                                            />
                                            <h4 style={{ color: "#777777" }}>Call Us</h4>
                                            <em>+1 5589 55488 55</em>
                                            <em>+1 5589 55488 55</em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded"
                            data-aos="fade-up"
                        >
                            <form className="row g-3 bg-light">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputPassword4"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div className="col-12">
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        placeholder="Message"
                                        rows={5}
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="col-12">
                                    <button
                                        type="button"
                                        className="btn btn-warning p-2"
                                        style={{ color: "white" }}
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
