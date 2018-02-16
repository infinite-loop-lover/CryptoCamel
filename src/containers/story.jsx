import { Contact } from "../components/contact";

const Story = (props) => {
    return (
        <>
        <div id="story">
            <div className="container">
                <div className='row section-title'>
                    <h2>Story of Camels Rabble</h2>
                </div>
                <div className="row logo">
                    <div className="col-xs-12 col-md-6 logo-detail"> 
                        <p> The Camels Rabble story will be revelated on 27th September. <br />stay tuned!!</p>
                    </div>
                    <div className="col-xs-12 col-md-6 logo-img">
                        <img alt="" src="img/full-story.gif" style={{borderRadius:'14px'}} />
                    </div>
                </div>
            </div>
        </div>
        <Contact />
        </>
    );
};

export default Story;