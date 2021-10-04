import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import heroImage from "../../Images/heroimage.png";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ShowrovChy/fake-data-assigntment-nine/main/fakedata.json"
    )
      .then((res) => res.json())
      .then((data) => setCourses(data.splice(0, 4)));
  }, []);

  //handle tutorial Reference Event
  const handleTutorialReference = () => {
    history.push("/reference");
  };

  //send to tutorial page by clicking start tutorial
  const sendToTutorials = () => {
    history.push("/tutorials");
  };
  /* banner-container d-flex mt-3 mb-5 p-3 */
  return (
    <div className="mb-5 ">
      <Row className=" align-items-center gy-5 mb-5 banner-container   ">
        <Col md={6} className="left-part  pt-5 ps-5">
          <div>
            <h1>
              Welcome To <span className="titleInSpan"> Codding School</span>
            </h1>
            <p className="mt-4">
              This is a free <b>programming learning </b> platform.You will get{" "}
              <br />
              lot of resources.Get seated with your goal and start learning.
            </p>
            <Button onClick={sendToTutorials} className="btn btnStyle">
              Start Learning
            </Button>
          </div>
        </Col>
        <Col
          md={6}
          className="hero-image right-part  justify-content-center align-items-center d-flex "
        >
          <img className="img-banner" src={heroImage} alt="" />
        </Col>
      </Row>

      <div>
        <div>
          <h1 className="text-center py-3 tutorial-text">Tutorials</h1>
        </div>

        <Row className="gy-5 tutorials-row px-3 mt-3">
          {courses.map((course) => (
            <Col md={6} className="">
              <div className="course-inside-card h-100 rounded-2">
                <div className="pt-5 px-4">
                  <img className="img-fluid" src={course.img} alt="" />
                </div>
                <div className="text-center p-2">
                  <h1>{course.name} </h1>
                  <p className="fw-bold">{course.shortIntro}</p>
                  <Button className=" btnStyle mt-3">
                    <Link
                      className="text-decoration-none text-white"
                      to={`/tutorial/${course.id}`}
                    >
                      {course.learnBtn}
                    </Link>
                  </Button>
                  <br />
                  <Button
                    onClick={handleTutorialReference}
                    className=" btnStyle mt-3"
                  >
                    {course.reference}
                  </Button>
                </div>
              </div>
            </Col>
            // <Course key={course.id} course={course}></Course>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;