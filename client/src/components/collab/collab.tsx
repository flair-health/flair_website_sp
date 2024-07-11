"use client";

import styled from "styled-components";

const MarqueeEffect = () => {
  const row1 = [
    "https://chicagoarthritis.com/wp-content/uploads/2022/08/chicago-arthritis-logo.svg",
    "/UnabridgedMD.webp",
    "/valley.png",
  ];
  const row2 = ["/atena.svg", "/cigna.svg", "/united.svg"];

  return (
    <div className="container md:my-10">
      <div className="2xl:text-4xl tracking-tight md:text-center m-auto font-semibold text-2xl 2xl:pt-20 pt-10 md:pb-2 pb-2">
        Our Partners
      </div>
      <div className="md:text-center text-sm font-normal text-gray-500 2xl:text-base 2xl:w-[60%] m-auto">
        Health is working with patients from rheumatology private practices
        across the country.
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
      <div className="md:text-center md:pt-20 2xl:text-3xl tracking-tight pb-4  m-auto font-semibold text-2xl">
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
  @media (max-width: 768px) {
    width: 800px;
  }
`;

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 80%;
  margin: auto;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 60%;
  height: 100%;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  cursor: pointer;
`;
