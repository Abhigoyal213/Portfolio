import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai"; // Import the GitHub and Link icons

// Styled Components
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? "unset" : 3)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  max-height: ${({ expanded }) => (expanded ? "none" : "4.5em")};
  transition: max-height 0.4s ease-in-out, -webkit-line-clamp 0.4s ease-in-out;
`;

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;

// Adjust Card Height for Responsiveness
const Card = styled.div`
  width: 330px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  height: 100%;
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }

  &:hover ${Button} {
    display: block;
  }

  @media only screen and (max-width: 768px) {
    width: 100%; /* Ensure card takes full width on smaller screens */
  }
`;

// Increase Modal Size for Large Screens
const ModalContent = styled.div`
  background-color: rgba(
    10,
    10,
    10,
    0.85
  ); /* Slightly transparent black background */
  border: 3px solid #0a0a0a; /* Border with accent color */
  border-radius: 1rem; /* Rounded corners */
  padding: 1.5rem; /* Padding similar to p-6 */

  /* Accent color shadow for depth */
  box-shadow: 0 0 20px rgba(184, 9, 195, 0.6), 0 0 10px rgba(184, 9, 195, 0.4);

  width: 600px; /* Width of the modal */
  max-width: 90%; /* Responsive for smaller screens */
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 90%; /* Adjustments for smaller screens */
  }

  @media only screen and (min-width: 1200px) {
    width: 800px; /* Adjustments for larger screens */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
  border: 0.1px solid #854ce6;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};

  &:hover {
    border-color: ${({ theme }) => theme.primary}; // Change border on hover
  }
`;

const GitHubIcon = styled(AiOutlineGithub)`
  font-size: 20px;
  color: ${({ theme }) => theme.text_secondary};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.5); // Enlarges the icon on hover
  }
`;

const LiveLinkIcon = styled(AiOutlineLink)`
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.5); // Enlarges the icon on hover
  }
`;

// Modal Component
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* 40% transparent */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ProjectCards = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  const handleCardClick = () => {
    if (isModalOpen) {
      setIsModalOpen(false); // Close the modal if it's already open
    } else {
      setIsModalOpen(true); // Open the modal if it's closed
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openGitHubLink = (e) => {
    e.stopPropagation();
    window.open(project.github, "_blank"); // Opens GitHub link in a new tab
  };

  return (
    <>
      <Card
        onClick={handleCardClick}
        onMouseLeave={handleMouseLeave}
        tabIndex={0}
      >
        <Image
          src={project.image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "../fallback-image.png";
          }}
        />{" "}
        {/* Add error handling for images */}
        <TitleWrapper>
          <Title>{project.title}</Title>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {project.github && project.github !== "#" && (
              <GitHubIcon onClick={openGitHubLink} title="View Source on GitHub" />
            )}
            {project.liveUrl && (
              <LiveLinkIcon 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, "_blank");
                }}
                title="View Live App"
              />
            )}
          </div>
        </TitleWrapper>
        <Date>{project.date}</Date> {/* Date is now shown after the title */}
        <Tags>
          {project.tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <Description expanded={expanded}>{project.description}</Description>
        <Members>
          {project.members?.map((member, index) => (
            <Avatar key={index} src={member.img} />
          ))}
        </Members>
      </Card>

      {/* Modal for detailed view */}
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <div style={{ position: "relative" }}>
              <CloseButton onClick={closeModal} style={{ zIndex: 10 }}>×</CloseButton>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", paddingRight: "30px" }}>
                <h2>{project.title}</h2>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  {project.github && project.github !== "#" && (
                    <GitHubIcon onClick={openGitHubLink} title="View Source on GitHub" />
                  )}
                  {project.liveUrl && (
                    <LiveLinkIcon 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, "_blank");
                      }}
                      title="View Live App"
                    />
                  )}
                </div>
              </div>
              <Image
                src={project.image}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "../fallback-image.png";
              }}
            />
            <p>{project.description}</p>
            <Tags>
              {project.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>
            <Members>
              {project.members?.map((member, index) => (
                <Avatar key={index} src={member.img} />
              ))}
            </Members>
          </div>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ProjectCards;
