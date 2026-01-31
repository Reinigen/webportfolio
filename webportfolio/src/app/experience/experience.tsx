"use client";

import { Badge } from "react-bootstrap";


type Experience = {
    company: string,
    title: string,
    years: string,
    description: string[],
    education: boolean
}
type PropType = {
    experience: Experience[]
}

const Experience = (props: PropType) => {
    const { experience }  = props

    return (
        <section id="experience" className="justify-content-center my-5 min-vh-100">
            <ul className="nav nav-pills justify-content-center p-3 my-3" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-danger fs-3 active rounded-pill" id="work-experience-tab" data-bs-toggle="pill" data-bs-target="#work-experience" type="button" role="tab" aria-controls="work-experience" aria-selected="true"> <h3 className="pt-2">Experience</h3></button>
                </li>
                <li className="nav-item md-ms-5" role="presentation">
                    <button className="nav-link text-danger fs-3 rounded-pill" id="education-tab" data-bs-toggle="pill" data-bs-target="#education" type="button" role="tab" aria-controls="education" aria-selected="false"><h3 className="pt-2 ">Education</h3></button>
                </li>

            </ul>
            <div className="tab-content m-md-5" id="myTabContent">
                <div className="tab-pane fade show active " role="tab-panel" aria-labelledby="work-experience-tab"  id="work-experience">
                    <div className="card-group row-cols-sm-12 row-cols-xl-3 row-cols-xxl-4 gap-4 justify-content-center">
                    {experience.map((company, index) => (
                        <div className="" key={index}>
                        {!company.education && (
                        <div className="card col-sm-12 p-5 bg-dark text-light border-danger" style={{ height: "100%"}}>
                                <h3 className="card-title fs-1 text-danger">{company.company}</h3>
                                <Badge pill bg="danger" className="text-uppercase text-wrap text-light" >{company.title}</Badge>
                                <h5 className="mt-3 text-danger ">{company.years}</h5>
                                <ul className="card-body">
                                    {company.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>))}
                                </ul>
                            </div>
                        )}
                        </div>
                    ))}           
                    </div>
                </div>
                <div className="tab-pane fade show" role="tab-panel" aria-labelledby="education-tab" id="education">
                    {experience.map((company, index) => (
                        <div className="mx-5" key={index}>
                        {company.education && (
                            <div className="text-start">
                                <h3 className="text-danger">{company.company} | {company.title}</h3>
                                <h5>{company.years}</h5>
                            </div>
                        )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
    )

}

export default Experience