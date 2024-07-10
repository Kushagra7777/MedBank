import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[86px] box-border [row-gap:20px] max-w-full text-center text-81xl text-[transparent] font-inter mq825:pb-14 mq825:box-border mq1425:flex-wrap ${className}`}
    >
      <div className="w-[960px] bg-dimgray-200 flex flex-col items-end justify-start pt-[100px] px-[31px] pb-36 box-border gap-[23px] min-w-[960px] shrink-0 max-w-full lg:min-w-full mq825:pt-[65px] mq825:pb-[94px] mq825:box-border mq1425:flex-1">
        <div className="w-[867px] flex flex-row items-start justify-start max-w-full">
          <h1 className="m-0 w-[867px] relative text-inherit tracking-[0.1em] leading-[78px] font-black font-inherit inline-block shrink-0 [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] max-w-full z-[1] mq450:text-11xl mq450:leading-[31px] mq825:text-31xl mq825:leading-[47px]">
            OUR SERVICES
          </h1>
          <div className="w-[164px] flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border ml-[-773px] text-left text-xl text-darkslategray-100 font-body-large">
            <div className="self-stretch relative leading-[36px] mq450:text-base mq450:leading-[29px]">
              Our Services –
            </div>
          </div>
        </div>
        <div className="w-[850px] flex flex-row items-start justify-end py-0 px-[77px] box-border max-w-full text-left text-17xl text-darkslategray-100 font-body-large lg:pl-[38px] lg:pr-[38px] lg:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-row items-center justify-center gap-[6px]">
                <h2 className="m-0 relative text-inherit leading-[42px] uppercase font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-3xl mq450:leading-[25px] mq825:text-10xl mq825:leading-[34px]">
                  Offerings
                </h2>
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/octiconarrowup16-1@2x.png"
                />
              </div>
              <blockquote className="m-0 self-stretch relative text-xl leading-[34px] mq450:text-base mq450:leading-[27px]">
                "At Medbank, we offer a comprehensive range of genetic analysis
                services tailored to meet your research needs. Our
                state-of-the-art laboratory facilities and experienced team
                ensure accurate and reliable results. Explore our service
                offerings below to discover how we can support your genetic
                analysis projects."
              </blockquote>
            </div>
            <div className="flex flex-row items-center justify-start gap-[36px] max-w-full text-xl mq825:flex-wrap mq825:gap-[18px]">
              <div className="flex flex-col items-center justify-center">
                <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]">
                  DNA Sequencing
                </div>
              </div>
              <img
                className="h-10 w-px relative object-contain"
                loading="lazy"
                alt=""
                src="/line-32.svg"
              />
              <div className="flex flex-col items-center justify-center">
                <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]">
                  RNA Sequencing
                </div>
              </div>
              <img
                className="h-10 w-px relative object-contain"
                loading="lazy"
                alt=""
                src="/line-32.svg"
              />
              <div className="flex flex-col items-center justify-center">
                <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]">
                  Amplicon Sequencing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[706px] relative max-h-full object-cover shrink-0 max-w-full z-[2] mq1425:flex-1"
        loading="lazy"
        alt=""
        src="/lowresmiseqwithscientist-2@2x.png"
      />
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
