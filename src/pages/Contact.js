import React from "react";
import NavBar from '../components/NavBar'
import './Contact.css'

export default function Contact() {
    return (
        <div>
            <NavBar/>
            <div id="contactMain">
                <br/><br/>
                <h2 style={{textAlign:"center"}}>Like what you see?</h2>
                <br></br>
                <div className = "card" id="formCard">
                    <h3 className="card-header">Contact Me</h3>
                    <form action="https://formsubmit.co/0dcfea91625437078565348294267901" method="POST">
                        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap"}}>
                            <div style={{marginRight:30}}>
                                <label for="nameInput" class="form-label mt-4">Name:</label>
                                <input type="text" class="form-control" id="nameInput" placeholder="Enter your name" required name="Name"/>
                            </div>
                            <div>
                                <label for="emailInput" class="form-label mt-4">Email address:</label>
                                <input type="email" class="form-control" id="emailInput" placeholder="Enter your email" required name="Email"/>
                            </div>

                        </div>
                        <br/>
                        <div>
                            <label for="subjectInput" class="form-label mt-4">Subject:</label>
                            <input type="text" class="form-control" id="subjectInput" required name="Subject"/>
                        </div>
                        <br/>
                        Message:
                        <textarea class="form-control" id="textInput" rows="4" required name="Message"/>
                        <br/>
                        <button className="btn btn-primary" id="submitButton" type="submit">Send</button>
                    </form>
                </div>


            </div>
        </div>
    );
}

// import React from "react";
// import NavBar from '../components/NavBar'
// import './Contact.css'

// export default function Contact() {
//     return (
//         <div>
//             <NavBar/>
//             <div id="contactMain">
//                 <br/><br/>

//                 <div className="card" id="imageCard">
//                     <img src = './gundam.jpg'
//                     alt="The life-sized gundam"
//                     id="contactImage"
//                     title="The life-sized Gundam Unicorn"
//                     />
//                 </div>

//                 <div id="contactText">
//                     <h1>Contact Me</h1>
//                     <br/>
                    
//                 </div>
                
//             </div>
//         </div>
//     );
// }