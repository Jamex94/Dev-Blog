import React, { useState } from "react";
import {
  Header,
  Main,
  Section,
  Text,
  Image,
  Badge,
  Link,
} from "@chakra-ui/react";

const AboutMe = () => {
  const [isLoading, setIsLoading] = useState(true);

  const data = {
    name: "James Trudeau",
    about: "Exploring new technologies and developing software solutions.",
    education: {
      degree: "Higher Technician in Multi-platform Applications Development",
    },
    work: {
      company: "ArteRevelo",
      title: "FrontEnd developer",
    },
    skills: [
      {
        label: "Python",
        icon: "python",
      },
      {
        label: "Java",
        icon: "java",
      },
      {
        label: "HTML5",
        icon: "html5",
      },
      {
        label: "CSS",
        icon: "css3",
      },
      {
        label: "JavaScript",
        icon: "javascript",
      },
      {
        label: "TypeScript",
        icon: "typescript",
      },
      {
        label: "React",
        icon: "react",
      },
      {
        label: "Node.js",
        icon: "node",
      },
      {
        label: "MySQL",
        icon: "mysql",
      },
      {
        label: "MongoDB",
        icon: "mongodb",
      },
      {
        label: "Git",
        icon: "git",
      },
      {
        label: "GitHub",
        icon: "github",
      },
      {
        label: "Visual Studio Code",
        icon: "visual-studio-code",
      },
      {
        label: "Adobe Premiere Pro",
        icon: "premiere",
      },
      {
        label: "Adobe After Effects",
        icon: "after-effects",
      },
      {
        label: "Photoshop",
        icon: "photoshop",
      },
      {
        label: "Blender",
        icon: "blender",
      },
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/jamextrudeau/",
      email: "alex.trudeau@engineer.com",
    },
  };

  const renderData = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <Main>
          <Header>
            <h1>{data.name}</h1>
          </Header>
          <Section>
            <Text>{data.about}</Text>
          </Section>
          <Section>
            <Text>
              <Badge icon={data.education.degree}>
                {data.education.degree}
              </Badge>
            </Text>
          </Section>
          <Section>
            <Text>
              <Badge icon={data.work.company}>
                {data.work.title}
              </Badge>
            </Text>
          </Section>
          <Section>
            <ul>
              {data.skills.map((skill) => (
                <li key={skill.label}>
                  <Badge icon={skill.icon}>{skill.label}</Badge>
                </li>
              ))}
            </ul>
          </Section>
          <Section>
            <ul>
              {data.social.map((social) => (
                <li key={social}>
                  <Link href={social}>
                    <Badge icon={social}>{social}</Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        </Main>
      );
    }
  };

  return renderData();
};

export default AboutMe;
