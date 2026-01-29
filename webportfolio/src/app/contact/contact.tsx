export default function Contact(){
    return(
        <div id="contact-form" className="me-md-5 me-5 my-5 vh-75">
            <h1 className="text-danger h1">Connect with Me!</h1>
            <p className="pe-3">Does my work align with your needs? If so, feel free to leave a message!</p>
            <div className="pe-5 pt-3 fs-2">
                <a href="#contact-form"
                    ><i className="p-2 bi bi-envelope-fill text-danger" /></a>
                <a href="www.linkedin.com/in/raymundcrystal"
                    ><i className="p-2 bi bi-linkedin text-danger"/></a>
                <a href="https://github.com/Reinigen"
                    ><i className="p-2 bi bi-github text-danger"/></a>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" className="text-start pe-3 mb-5">
                <input type="hidden" name="access_key" value="72ae4d1c-4d25-4178-9d35-0f91acc5e8e0" />
                <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name: </label>
                <input type="text" className="form-control" id="name" name="name" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address:</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    required
                />
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="message">Message:</label>
                <textarea className="form-control" id="message" name="message"  required>
                </textarea>
                </div>
                <button type="submit" className="btn btn-danger mb-5">Submit</button>
            </form>
        </div>
    )
}