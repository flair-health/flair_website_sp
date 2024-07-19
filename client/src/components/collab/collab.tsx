"use client";

import styled from "styled-components";

const MarqueeEffect = () => {
  const row1 = [
    "https://chicagoarthritis.com/wp-content/uploads/2022/08/chicago-arthritis-logo.svg",
    "/UnabridgedMD.webp",
    "/valley.png",
  ];
  const row2 = [
    "/atena.svg",
    "/cigna.svg",
    "/united.svg",
    "/blue.png",
    "/medicare.png",
  ];

  return (
    <div className="container mt-10 mb-5 md:mt-20 md:mb-10">
      <div className="text-center m-auto font-semibold text-xl md:text-2xl 2xl:text-4xl tracking-tight pt-5 md:pt-10 2xl:pt-20 pb-1 md:pb-2">
        Our Partners
      </div>
      <div className="text-center text-sm font-normal text-gray-500 m-auto md:w-[60%] 2xl:text-base">
        Flair Health is working with patients from rheumatology private
        practices across the country.
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
      <div className="text-center pt-10 md:pt-20 pb-4 m-auto font-semibold text-xl md:text-2xl 2xl:text-3xl tracking-tight">
        Flair supports patients with the following insurances.
      </div>
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

export default MarqueeEffect;

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
  width: 80%; /* Increased width for mobile */
  height: 100%;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 90%; /* Further increased width for very small screens */
  }
`;
