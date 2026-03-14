// Projects.jsx
import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  CardContainer,
} from "../components/ProjectsStyle";
import ProjectCard from "./ProjectCards"; // Adjust the import according to your file structure
import { projects } from "../components/constants";
import Modal from "./Modal"; // Import the modal

const Projects = () => {
  const toggle = "all";
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>

        <CardContainer>
          {projects
            .filter(
              (project) => toggle === "all" || project.category === toggle
            )
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openModal(project)} // Pass the project to the modal
              />
            ))}
        </CardContainer>
      </Wrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject} // Pass the selected project to the modal
      />
    </Container>
  );
};

export default Projects;
