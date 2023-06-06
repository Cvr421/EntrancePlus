import React from 'react'
import "./Biology.css"
function Biology() {
    return (
        <div>
           
            <div class="container">
                 {/* left section */}
                <div class="left-section">
                    <h4>Chapter Name</h4>
                    <div class="content-section">
                        {/* <!-- Content from the database (horizontal layout) --> */}
                        <div className="content-item ">
                        <p>Planty Kindom</p>
                        </div>
                        <div className="content-item ">
                        <h5>Data 1</h5>
                        </div>
                        <div className="content-item ">
                        <h5>Data 1</h5>
                        </div>
                        <div className="content-item ">
                        <h5>Data 1</h5>
                        </div>
                        
                        
                        
                    </div>
                </div>
                {/* Right section */}
                <div class="right-section">
                    <h2>Chapter Content</h2>
                    <div class="content-section">
                        {/* <!-- Content from the database (horizontal layout) --> */}
                        <div className="content-item ">
                        <p>Planty Kindom</p>
                        </div>
                        <div className="content-item ">
                        <p>Planty Kindom</p>
                        </div>
                        <div className="content-item ">
                        <p>Planty Kindom</p>
                        </div>
                        <div className="content-item ">
                        <p>Planty Kindom</p>
                        </div>
                        <div className="content-item ">
                        <p>Planty Kindom</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Biology