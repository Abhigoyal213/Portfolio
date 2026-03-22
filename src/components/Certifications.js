import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "./constants";
import { fadeIn } from "../variants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  max-width: 1000px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 16px;
  }
`;

const Card = styled(motion.a)`
  width: 100%;
  background: var(--bg-card-solid, rgba(20, 20, 30, 0.4));
  border: 0.1px solid var(--accent);
  box-shadow: 0px 4px 24px var(--accent-glow);
  border-radius: 16px;
  padding: 0;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0px 0px 20px var(--accent-glow);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  border-bottom: 0.1px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  box-sizing: border-box;
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const CardBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const IconWrapper = styled.div`
  padding: 12px;
  border-radius: 12px;
  background: var(--accent-glow);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const IssuerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
`;

const Issuer = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: var(--accent);
  margin: 0;
`;

const Period = styled.span`
  font-size: 12px;
  font-family: monospace;
  color: var(--accent);
  white-space: nowrap;
`;

const CertTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
`;

const ViewCert = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 12px;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: var(--accent);
  }
`;

const Certifications = () => {
  return (
    <Container id="certifications">
      <Wrapper>
        <Desc style={{ color: "var(--accent)", marginBottom: "8px", fontWeight: "bold" }}>Continuous Learning</Desc>
        <Title style={{ marginTop: 0 }}>Certifications</Title>

        <CardContainer>
          {certifications.map((cert, index) => (
            <Card
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn("up", index * 0.15)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
            >
              <ImageWrapper>
                {cert.image ? (
                  <Img src={cert.image} alt={cert.title} />
                ) : (
                  <FaAward size={48} color="var(--accent)" style={{ opacity: 0.5 }} />
                )}
              </ImageWrapper>

              <CardBody>
                <CardHeader>
                  <IconWrapper>
                    <FaAward size={24} />
                  </IconWrapper>
                  <Details>
                    <IssuerRow>
                      <Issuer>{cert.issuer}</Issuer>
                      {cert.period && <Period>{cert.period}</Period>}
                    </IssuerRow>
                    <CertTitle>{cert.title}</CertTitle>
                    <ViewCert>
                      <span>View Certificate</span>
                      <FaExternalLinkAlt size={12} />
                    </ViewCert>
                  </Details>
                </CardHeader>
              </CardBody>
            </Card>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;
