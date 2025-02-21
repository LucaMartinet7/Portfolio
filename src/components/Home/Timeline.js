import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaSchool } from "react-icons/fa";

const transparentBackground = "transparent";

const contentStyle = {
  background: transparentBackground,
  color: '#fff',
  textAlign: 'left',
  boxShadow: 'none',
  border: 'none',
};

const arrowStyle = {
  borderRight: `7px solid ${transparentBackground}`,
};

const iconStyle = {
  background: "#2283d3",
  color: '#fff',
};

const timelineContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

function Timeline() {
  return (
    <div style={timelineContainerStyle}>
      <VerticalTimeline layout="1-column">
        {/* 3rd Year - Most Recent */}
        <VerticalTimelineElement
          className="vertical-timeline-element--3rdYear"
          contentStyle={contentStyle}
          contentArrowStyle={arrowStyle}
          date="2024 - present"
          iconStyle={iconStyle}
          icon={<FaSchool />}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '0.5em' }}>University</h3>
          <h4 style={{ textAlign: 'center', margin: '0.3em 0' }}>Epitech - 3<sup>rd</sup> Year</h4>
          <h5 style={{ textAlign: 'center', marginBottom: '1em' }}>Berlin</h5>
          <h5 style={{ marginBottom: '0.5em' }}>Projects:</h5>
          <ul style={{ paddingLeft: '1.2em' }}>
            <li>
              <strong>My Pgp</strong>
              <br />
              <small>
                <strong>Language:</strong> Python
                <br />
                Implements symmetric and asymmetric cryptography inspired by secret exchanges.
              </small>
            </li>
            <li>
              <strong>Neural Network</strong>
              <br />
              <small>
                <strong>Language:</strong> Python
                <br />
                Generates and analyzes chessboard states without external ML libraries.
              </small>
            </li>
            <li>
              <strong>Area</strong>
              <br />
              <small>
                <strong>Language:</strong> Dart, Python, MySQL
                <br />
                An automation platform similar to IFTTT/Zapier, linking triggers to automated responses.
              </small>
            </li>
            <li>
              <strong>R-Type</strong>
              <br />
              <small>
                <strong>Language:</strong> C++
                <br />
                A 2D multiplayer side-scrolling space shooter with a custom server-client network system.
              </small>
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* 2nd Year Academic */}
        <VerticalTimelineElement
          className="vertical-timeline-element--2ndYear"
          contentStyle={contentStyle}
          contentArrowStyle={arrowStyle}
          date="2023 - 2024"
          iconStyle={iconStyle}
          icon={<FaSchool />}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '0.5em' }}>University</h3>
          <h4 style={{ textAlign: 'center', margin: '0.3em 0' }}>Epitech - 2<sup>nd</sup> Year</h4>
          <h5 style={{ textAlign: 'center', marginBottom: '1em' }}>Barcelona</h5>
          <h5 style={{ marginBottom: '0.5em' }}>Projects:</h5>
          <ul style={{ paddingLeft: '1.2em' }}>
            <li>
              <strong>Arcade</strong>
              <br />
              <small>
                <strong>Language:</strong> C++
                <br />
                A platform for playing games with various graphic libraries, dynamically loading games via .so files.
              </small>
            </li>
            <li>
              <strong>Trading</strong>
              <br />
              <small>
                <strong>Language:</strong> Python
                <br />
                Simulates buying and selling stocks based on fluctuating market prices interactively.
              </small>
            </li>
            <li>
              <strong>ImageCompressor</strong>
              <br />
              <small>
                <strong>Language:</strong> Haskell
                <br />
                Implements a parallelized K-means algorithm to compress images.
              </small>
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Internship during 2nd Year */}
        <VerticalTimelineElement
          className="vertical-timeline-element--internship"
          contentStyle={contentStyle}
          contentArrowStyle={arrowStyle}
          date="July 2023 — December 2023"
          iconStyle={iconStyle}
          icon={<FaBriefcase />}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '0.5em' }}>Internship</h3>
          <h4 style={{ textAlign: 'center', margin: '0.3em 0' }}>University of Geneva</h4>
          <h5 style={{ textAlign: 'center', marginBottom: '1em' }}>Geneva</h5>
          <h5 style={{ marginBottom: '0.5em' }}>Responsibilities:</h5>
          <ul style={{ paddingLeft: '1.2em' }}>
            <li>Facilitated the transfer from Confluence to SharePoint.</li>
            <li>Initiated a potential transfer from Plone 4.3 to SharePoint or Plone 6.</li>
            <li>Observed help desk operations and digital work environment management.</li>
            <li>Assisted in team meetings and provided feedback on new application releases.</li>
          </ul>
        </VerticalTimelineElement>

        {/* 1st Year */}
        <VerticalTimelineElement
          className="vertical-timeline-element--1stYear"
          contentStyle={contentStyle}
          contentArrowStyle={arrowStyle}
          date="2022 - 2023"
          iconStyle={iconStyle}
          icon={<FaSchool />}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '0.5em' }}>University</h3>
          <h4 style={{ textAlign: 'center', margin: '0.3em 0' }}>Epitech - 1<sup>st</sup> Year</h4>
          <h5 style={{ textAlign: 'center', marginBottom: '1em' }}>Paris</h5>
          <h5 style={{ marginBottom: '0.5em' }}>Projects:</h5>
          <ul style={{ paddingLeft: '1.2em' }}>
            <li>
              <strong>Minishell 1 &amp; 2</strong>
              <br />
              <small>
                <strong>Language:</strong> C
                <br />
                Recreated bash functionality in C.
              </small>
            </li>
            <li>
              <strong>My RPG</strong>
              <br />
              <small>
                <strong>Language:</strong> C
                <br />
                Developed a custom RPG using CSFML.
              </small>
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
