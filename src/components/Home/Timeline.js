import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaSchool } from "react-icons/fa";

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--3rdYear"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2024 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">3rd Year Computer Science student</h3>
        <h4 className="vertical-timeline-element-subtitle">Epitech</h4>
        <p>
          Learning C, C++, Python, and more.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="July 2023 — December 2023"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FaSchool />}
      >
        <h3 className="vertical-timeline-element-title">Bachelor's Degree</h3>
        <h4 className="vertical-timeline-element-subtitle">University Name</h4>
        <p>
          Description of the degree and achievements.
        </p>
      </VerticalTimelineElement>
      {/* Add more timeline elements as needed */}
    </VerticalTimeline>
  );
}

export default Timeline;