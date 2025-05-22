"use client"; // If you're using App Router (Next.js 13+), include this
import './portfolio.css'
import { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import classnames from "classnames";

export default function TabbedContent() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
   <div className="container-fluid p-xl-5">
    <div className="container p-xl-5">
    <div className="about-head-des"> <h1 className="text-spanone mt-xl-5" >Portfolio</h1></div>
    <div className="row">
        <div className="col-xl-12">
        <Nav tabs>
            <NavItem>
                <NavLink className={classnames({ active: activeTab === "1" })} onClick={() => toggle("1") } > <span className="nav-items-color">All</span> </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={classnames({ active: activeTab === "2" })} onClick={() => toggle("2")} ><span className="nav-items-color">Animation (2D/3D)</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={classnames({ active: activeTab === "3" })} onClick={() => toggle("3")} > <span className="nav-items-color">Video Editing</span> </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={classnames({ active: activeTab === "4" })} onClick={() => toggle("4")} ><span className="nav-items-color">AI & Automation</span></NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={classnames({ active: activeTab === "5" })} onClick={() => toggle("5")} ><span className="nav-items-color">Game Development</span></NavLink>
            </NavItem>
      </Nav>

      <TabContent activeTab={activeTab} className="mt-4">
        <TabPane tabId="1">
        <Row>
            <Col sm="3">
              <Card body className='card-space'>
                <img src='/images/portfolio1.jpg' alt=''/>
                <CardText className='card-text-style'>
                From stylized 2D animations to hyper-realistic 3D renders, we bring stories to life with stunning visuals and motion
                </CardText>
              </Card>
            </Col>
            <Col sm="3">
               <Card body className='card-space'>
              <img src='/images/portfolio2.jpg' alt=''/>
               <CardText className='card-text-style'>
                We craft compelling narratives with high-quality video editing tailored for marketing, entertainment, and education.
                </CardText>
              </Card>
            </Col>
            <Col sm="3">
               <Card body className='card-space'>
              <img src='/images/portfolio4.jpg' alt=''/>
               <CardText className='card-text-style'>
                Smarter workflows, personalized experiences, and intelligent solutions powered by AI.
                </CardText>
              </Card>
            </Col>
            <Col sm="3">
               <Card body className='card-space'>
              <img src='/images/portfolio5.jpg' alt=''/>
               <CardText className='card-text-style'>
                Step into the future with interactive, persistent digital worlds.
                </CardText>
              </Card>
            </Col>
        </Row>
        <Row>
            <Col sm="3">
               <Card body className='card-space'>
                <img src='/images/portfolio1.jpg' alt=''/>
               <CardText className='card-text-style'>
                From stylized 2D animations to hyper-realistic 3D renders, we bring stories to life with stunning visuals and motion
                </CardText>
              </Card>
            </Col>
            <Col sm="3">
               <Card body className='card-space'>
              <img src='/images/portfolio2.jpg' alt=''/>
               <CardText className='card-text-style'>
                We craft compelling narratives with high-quality video editing tailored for marketing, entertainment, and education.
                </CardText>
              </Card>
            </Col>
            <Col sm="3">
               <Card body className='card-space'>
              <img src='/images/portfolio4.jpg' alt=''/>
               <CardText className='card-text-style'>
                Smarter workflows, personalized experiences, and intelligent solutions powered by AI.
                </CardText>
              </Card>
            </Col>
            <Col sm="3">
               <Card body className='card-space'>
              <img src='/images/portfolio5.jpg' alt=''/>
               <CardText className='card-text-style'>
                Step into the future with interactive, persistent digital worlds.
                </CardText>
              </Card>
            </Col>
        </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="4">
             <Card body className='card-space'>
                <img src='/images/portfolio1.jpg' alt=''/>
               <CardText className='card-text-style'>
                From stylized 2D animations to hyper-realistic 3D renders, we bring stories to life with stunning visuals and motion
                </CardText>
              </Card>
            </Col>
            <Col sm="4">
             <Card body className='card-space'>
                <img src='/images/portfolio1.jpg' alt=''/>
               <CardText className='card-text-style'>
                From stylized 2D animations to hyper-realistic 3D renders, we bring stories to life with stunning visuals and motion
                </CardText>
              </Card>
            </Col>
            <Col sm="4">
             <Card body className='card-space'>
                <img src='/images/portfolio1.jpg' alt=''/>
               <CardText className='card-text-style'>
                From stylized 2D animations to hyper-realistic 3D renders, we bring stories to life with stunning visuals and motion
                </CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
            <Row>
                <Col sm="4">
                 <Card body className='card-space'>
                <img src='/images/portfolio2.jpg' alt=''/>
                   <CardText className='card-text-style'>
                    We craft compelling narratives with high-quality video editing tailored for marketing, entertainment, and education.
                    </CardText>
                </Card>
                </Col>
                <Col sm="4">
                 <Card body className='card-space'>
                <img src='/images/portfolio2.jpg' alt=''/>
                   <CardText className='card-text-style'>
                    We craft compelling narratives with high-quality video editing tailored for marketing, entertainment, and education.
                    </CardText>
                </Card>
                </Col>
                <Col sm="4">
                 <Card body className='card-space'>
                <img src='/images/portfolio2.jpg' alt=''/>
                   <CardText className='card-text-style'>
                    We craft compelling narratives with high-quality video editing tailored for marketing, entertainment, and education.
                    </CardText>
                </Card>
                </Col>
            </Row>
        </TabPane>
        <TabPane tabId="4">
            <Row>
                <Col sm="6">
                 <Card body className='card-space'>
                <img src='/images/portfolio4.jpg' alt=''/>
                   <CardText className='card-text-style'>
                    With supporting text below as a natural lead-in to additional content.
                    </CardText>
                </Card>
                </Col>
                <Col sm="6">
                 <Card body className='card-space'>
                <img src='/images/portfolio4.jpg' alt=''/>
                   <CardText className='card-text-style'>
                    With supporting text below as a natural lead-in to additional content.
                    </CardText>
                </Card>
                </Col>
            </Row>
        </TabPane>
        <TabPane tabId="5">
            <Row>
                <Col sm="4">
                 <Card body className='card-space'>
                <img src='/images/portfolio5.jpg' alt=''/>
                   <CardText className='card-text-style'>
                    We craft compelling narratives with high-quality video editing tailored for marketing, entertainment, and education.
                    </CardText>
                </Card>
                </Col>
                <Col sm="4">
                 <Card body className='card-space'>
                <img src='/images/portfolio5.jpg' alt=''/>
                   <CardText className='card-text-style'>
                    We craft compelling narratives with high-quality video editing tailored for marketing, entertainment, and education.
                    </CardText>
                </Card>
                </Col>
                <Col sm="4">
                 <Card body className='card-space'>
                <img src='/images/portfolio5.jpg' alt=''/>
                   <CardText className='card-text-style'>
                    We craft compelling narratives with high-quality video editing tailored for marketing, entertainment, and education.
                    </CardText>
                </Card>
                </Col>
            </Row>
        </TabPane>
      </TabContent>
      
        </div>
    </div>
    </div>
   </div>
  );
}
