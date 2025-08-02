import react from 'react';

const Getquote =() =>{


    return (
        <div>
            <h1 className="text-center mb-5 pt-5">Get a Quote</h1>
            <div className="container">
                <form> 
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>       
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">  
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                    </div>c 
                    <div className="mb-3">  
                        <label htmlFor="phone" className="form-label">Company name</label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter your company name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="3" placeholder="Enter your message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Getquote;