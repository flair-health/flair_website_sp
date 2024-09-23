"use client";

import styled from "styled-components";

const Partners = () => {
  const row1 = [
    "/stanford.png",
    "/linkedin.png",
    "/nccn.jpg",
  ];
  const row2 = [
    "/jnj.png",
    "/Genentech-Logo.wine.png",
    "/expion.png",
  ];

  return (
    <div className="container mt-10 mb-5 md:mt-20 md:mb-10">
      <div className=" 2xl:text-4xl md:text-center m-auto font-semibold text-2xl 2xl:pb-2 pb-2 tracking-tight">
        Who We Are
      </div>
      <div className="md:text-center font-normal text-gray-500 2xl:text-base mb-8">
      Our RCM specialists and engineers, with over 40 years of experience, have previously worked at some of the following companies.
      </div>
      <AppContainer>
        <Wrapper>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} alt="companies" />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
        </Wrapper>
      </AppContainer>
      <AppContainer>
        <Wrapper>
          <Marquee>
            <MarqueeGroup>
              {row2.map((el, index) => (
                <ImageGroup key={index}>
                  <Image src={el} alt="companies" />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
        </Wrapper>
      </AppContainer>
    </div>
  );
};

export default Partners;

const AppContainer = styled.div`
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
`;

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  margin: auto;

  @media (max-width: 600px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 20vmin, 20rem); /* Increased min size */
  padding: calc(
    clamp(10rem, 1rem + 10vmin, 20rem) / 10
  ); /* Increased min padding */
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%; /* Increased width for mobile */
  height: 100%;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%; /* Further increased width for very small screens */
  }
`;
