"use client";

import styled, { keyframes, css } from "styled-components";

const MarqueeEffect = () => {
  const row1 = [
    "https://chicagoarthritis.com/wp-content/uploads/2022/08/chicago-arthritis-logo.svg",
    "/UnabridgedMD.webp",
    "/valley.png",
    "https://chicagoarthritis.com/wp-content/uploads/2022/08/chicago-arthritis-logo.svg",
    "/UnabridgedMD.webp",
    "/valley.png",
  ];

  return (
    <div className="container md:my-20">
      <div className="2xl:text-4xl md:text-center m-auto font-semibold text-2xl 2xl:pt-20 pt-10 md:pb-4 pb-2">
        Our Customers
      </div>
      <div className="md:text-center text-sm font-normal text-gray-500 2xl:text-base 2xl:w-[60%]  m-auto">
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
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup key={index + row1.length}>
                  <Image src={el} alt="companies" />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
          <Marquee></Marquee>
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
  @media (max-width: 768px) {
    width: 500px;
    overflow: hidden;
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
  @media (max-width: 768px) {
    width: 800px;
  }
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
`;
