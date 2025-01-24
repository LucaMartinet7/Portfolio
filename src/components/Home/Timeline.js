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
        icon={<FaSchool />}
      >
        <h3 className="vertical-timeline-element-title">University</h3>
        <h4 className="vertical-timeline-element-subtitle">Epitech</h4>
        <p>
          2nd and 3rd year of the Epitech curriculum.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(207, 0, 99)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(207, 0, 99)' }}
        date="July 2023 — December 2023"
        iconStyle={{ background: 'rgb(207, 0, 99)', color: '#fff' }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Internship</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Geneva</h4>
        <p>
          - Facilitate the transfer from Confluence to SharePoint.<br />
          - Initiate possible transfer from Plone 4.3 to SharePoint or Plone 6.<br />
          - Observe how a help desk works and how to manage the services and the digital work environment.<br />
          - Assist team meetings and give feedback on new application releases.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2022 - 2023"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaSchool />}
      >
        <h3 className="vertical-timeline-element-title">University</h3>
        <h4 className="vertical-timeline-element-subtitle">Epitech</h4>
        <p>
          1st year of the Epitech curriculum.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;