import React, { useState } from "react";
import styled from "styled-components";

const Blogs = ({ value }) => {
  return (
    <>
      {value.map((item) => {
        return (
          <Blog>
            <Img src={item.img} alt={item.title} />
            <Heading>{item.title}</Heading>
            <ImgText>{item.desc}</ImgText>
          </Blog>
        );
      })}
    </>
  );
};

const allWork = [
  {
    img: "./img/pf1-1.jpg",
    title: "Graphics Design",
    desc: "UI/UX is the first thing that interacts with the users and so needs to be impeccable. Open xcell has a highly creative user experience research and design team.",
  },
  {
    img: "./img/pf1-2.jpg",
    title: "Web Development",
    desc: "In a mobile-first world, customers and workers want more ways to engage with your brand",
  },
  {
    img: "./img/pf1-3.jpg",
    title: "App Development",
    desc: "Harness the power of modern web frameworks to build progressive web apps that scale, Interactive, feature-filled, and highly interactive.",
  },
  {
    img: "./img/pf1-4.jpg",
    title: "Digital Marketing",
    desc: "Web based advertising, otherwise called advanced promoting, is the key business device for ventures today as it empowers them to saddle the intensity of the web to take their business to the following level.",
  },
  {
    img: "./img/pf1-5.jpg",
    title: "SEO Service",
    desc: "A site ought to be advanced for web search tools to be noticeable and get its objective traffic. We offer solid SEO administrations that drive your site to top inquiry rankings and increment your online reach.",
  },
  {
    img: "./img/pf1-6.jpg",
    title: "Product Design",
    desc: "Product design is the process designers use to blend user needs with business goals to help brands make consistently successful products. Product designers work to optimize the user experience in the solutions they make for their users-and help their brands by making products sustainable for longer-term business needs.",
  },
];

const AllWork = () => {
  return (
    <Container>
      <Blogs value={allWork} />
    </Container>
  );
};
const iosDevelopment = [
  {
    img: "./img/pf1-1.jpg",
    title: "Graphics Design",
    desc: "UI/UX is the first thing that interacts with the users and so needs to be impeccable. Open xcell has a highly creative user experience research and design team.",
  },
  {
    img: "./img/pf1-3.jpg",
    title: "App Development",
    desc: "Harness the power of modern web frameworks to build progressive web apps that scale, Interactive, feature-filled, and highly interactive.",
  },
];
const IosDevelopment = () => {
  return (
    <Container>
      <Blogs value={iosDevelopment} />
    </Container>
  );
};

const androidDevelopment = [
  {
    img: "./img/pf1-1.jpg",
    title: "Graphics Design",
    desc: "UI/UX is the first thing that interacts with the users and so needs to be impeccable. Open xcell has a highly creative user experience research and design team.",
  },
  {
    img: "./img/pf1-3.jpg",
    title: "App Development",
    desc: "Harness the power of modern web frameworks to build progressive web apps that scale, Interactive, feature-filled, and highly interactive.",
  },
];
const AndroidDevelopment = () => {
  return (
    <Container>
      <Blogs value={androidDevelopment} />
    </Container>
  );
};
const webDevelopment = [
  {
    img: "./img/pf1-2.jpg",
    title: "Web Development",
    desc: "In a mobile-first world, customers and workers want more ways to engage with your brand",
  },
  {
    img: "./img/pf1-4.jpg",
    title: "Digital Marketing",
    desc: "Web based advertising, otherwise called advanced promoting, is the key business device for ventures today as it empowers them to saddle the intensity of the web to take their business to the following level",
  },
  {
    img: "./img/pf1-5.jpg",
    title: "SEO Service",
    desc: "A site ought to be advanced for web search tools to be noticeable and get its objective traffic. We offer solid SEO administrations that drive your site to top inquiry rankings and increment your online reach.",
  },
];
const WebDevelopment = () => {
  return (
    <Container>
      <Blogs value={webDevelopment} />
    </Container>
  );
};
const design = [
  {
    img: "./img/pf1-6.jpg",
    title: "Product Designer",
    desc: "Product design is the process designers use to blend user needs with business goals to help brands make consistently successful products. Product designers work to optimize the user experience in the solutions they make for their users-and help their brands by making products sustainable for longer-term business needs.",
  },
];
const Design = () => {
  return (
    <Container>
      <Blogs value={design} />
    </Container>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all-work");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <TitleBox>
        <Title>
          Our Recent <span style={{ color: "#d17f1b" }}>Works</span>
        </Title>
      </TitleBox>
      <FlexBox>
        <TabTitle
          onClick={() => handleTabClick("all-work")}
          active={activeTab === "all-work"}
        >
          <Text>ALL WORK</Text>
        </TabTitle>
        <TabTitle
          onClick={() => handleTabClick("ios-development")}
          active={activeTab === "ios-development"}
        >
          <Text>IOS DEVELOPMENT</Text>
        </TabTitle>
        <TabTitle
          onClick={() => handleTabClick("android-development")}
          active={activeTab === "android-development"}
        >
          <Text>ANDROID DEVELOPMENT</Text>
        </TabTitle>
        <TabTitle
          onClick={() => handleTabClick("web-development")}
          active={activeTab === "web-development"}
        >
          <Text>WEB DEVELOPMENT</Text>
        </TabTitle>
        <TabTitle
          onClick={() => handleTabClick("ui/ux-design")}
          active={activeTab === "ui/ux-design"}
        >
          <Text>UI/UX DESIGN</Text>
        </TabTitle>
      </FlexBox>
      <div style={{ width: "80%", margin: "0 auto" }}>
        {activeTab === "all-work" && <AllWork />}
        {activeTab === "ios-development" && <IosDevelopment />}
        {activeTab === "android-development" && <AndroidDevelopment />}
        {activeTab === "web-development" && <WebDevelopment />}
        {activeTab === "ui/ux-design" && <Design />}
      </div>
    </>
  );
};

export default Portfolio;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;

  @media (max-width: 1352px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 20px;

  @media (max-width: 395px) {
    padding: 5px;
  }
`;

const Img = styled.img`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    -webkit-transform: scale(0.94);
    transform: scale(0.94);
  }
  @media (max-width: 395px) {
    width: 100%;
  }
`;

const Heading = styled.h1`
  color: var(--color--primary);
  font-size: 1.5em;
  font-weight: 600;
  word-break: break-word;
`;

const ImgText = styled.p`
  color: black;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5;
  word-break: break-word;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  color: var(--color--primary);
  border-bottom: 3px solid #d17f1b;
  font-size: 40px;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;
const TabTitle = styled.div`
  margin: 2rem;
  padding: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  line-height: 1;
  position: relative;
  z-index: 1;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to right,
    #d17f1b,
    #d17f1b 50%,
    var(--color--primary) 50%
  );

  background-size: 200% 100%;
  background-position: ${(props) => (props.active ? "0" : "-100%")};
  transition: all 0.5s ease-in-out;

  &:before {
    content: "";
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    background: #d17f1b;
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    background-position: 0%;
  }

  &:hover:before {
    width: 100%;
  }
  ${(props) =>
    props.active &&
    `background-position: 0%;
&:before {
  width: 100%;
}
`}

  @media (max-width: 1200px) {
    margin: 0.2rem;
    padding: 0.2rem;
  }
`;

const Text = styled.p`
  font-size: 18px;
  margin: 0;
  white-space: nowrap;
  @media (max-width: 553px) {
    font-size: 13px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
