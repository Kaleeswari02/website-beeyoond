import "./about.css";

export default function AboutSection(){
    
    return(
       <section>
        <div className="container-fluid mt-xl-5">
           <div className="about-head-des"> <h1 className="text-spanone mt-xl-5" >About Us</h1></div>
            <div className="container about-para "><p className="bounce">At Beeyoond, we push the boundaries of digital storytelling through animation, gaming, AI, and immersive technology. Our team blends creativity with cutting-edge tech to deliver experiences that captivate and inspire.</p></div>
            <div>
                <div className="container-fluid imageSection">
                    <div className="container p-xl-5">
                    <div className="row">
                        <div className=" col-xl-6 p-xl-5">
                            <div className="Misson-section m-sec p-xl-3">
                                <h2 className="miss-head">Our mission</h2>
                                <p className="miss-subhead">To empower imagination through immersive technology.</p>
                                <p className="miss-para">At Beeyoond, our mission is to fuse creativity with innovation—delivering world-class 2D/3D animation, cutting-edge video editing, AI-driven experiences, and interactive gaming and metaverse solutions. We aim to transform ideas into engaging digital realities that connect, entertain, and inspire people across the globe.</p>
                            </div>
                        </div>
                        <div className=" col-xl-6 p-xl-5">
                            <div className="Misson-section v-sec p-xl-3">
                                <h2 className="miss-head">Our Vision</h2>
                                <p className="miss-subhead">To be a global pioneer in digital experiences.</p>
                                <p className="miss-para">We envision a future where technology and creativity are seamlessly intertwined. Beeyoond strives to lead the evolution of storytelling by building captivating virtual worlds, smart content, and interactive experiences that shape how people connect with entertainment, education, and each other.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
    )
}