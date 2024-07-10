import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1366px] flex flex-row items-start justify-center pt-0 px-5 pb-[100px] box-border max-w-full text-left text-xl text-darkslategray-100 font-body-large mq825:pb-[65px] mq825:box-border ${className}`}
    >
      <div className="w-[1196px] flex flex-col items-end justify-start gap-[50px] max-w-full mq825:gap-[25px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="w-[250px] flex flex-row items-start justify-start relative">
            <div className="absolute !m-[0] right-[-112.8px] bottom-[6px] leading-[36px] mq450:text-base mq450:leading-[29px]">
              Frequently Asked Questions –
            </div>
            <h1 className="m-0 flex-1 relative text-81xl tracking-[0.1em] leading-[90px] font-black font-inter text-[transparent] text-center [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] z-[1] mq450:text-11xl mq450:leading-[36px] mq825:text-31xl mq825:leading-[54px]">
              FAQ
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[70px] text-17xl">
            <h2 className="m-0 relative text-inherit leading-[44px] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[68px] mq450:text-3xl mq450:leading-[26px] mq825:text-10xl mq825:leading-[35px]">
              FAQ
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <blockquote className="m-0 w-[1126px] relative leading-[34px] flex items-center shrink-0 max-w-full mq450:text-base mq450:leading-[27px]">
              "Have questions about Medbank's genetic analysis services? Explore
              our frequently asked questions to find answers to common queries.
              If you can't find what you're looking for, feel free to reach out
              to our team for personalized assistance."
            </blockquote>
          </div>
        </div>
        <div className="w-[1124px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base mq450:gap-[70px] mq825:gap-[140px]">
          <div className="w-[660px] flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch rounded-xl bg-white box-border flex flex-row items-start justify-between py-[22px] pr-[18px] pl-[21px] max-w-full gap-[20px] border-[1px] border-solid border-dimgray-400">
              <div className="w-[451px] relative tracking-[0.15px] leading-[26px] font-medium flex items-center shrink-0 max-w-[calc(100%_-_37px)]">
                Do I need to register to my page?
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-5xl font-inter">
                <b className="relative leading-[24px] inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_rgba(96,_183,_207,_0.4)_10%,_rgba(62,_141,_167,_0.4)_74.5%,_rgba(0,_62,_92,_0.24))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[17px] mq450:text-lgi mq450:leading-[19px]">
                  +
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-white box-border flex flex-row items-start justify-between py-[22px] pr-[18px] pl-[21px] max-w-full gap-[20px] border-[1px] border-solid border-dimgray-400">
              <div className="w-[450px] relative tracking-[0.15px] leading-[26px] font-medium flex items-center shrink-0 max-w-[calc(100%_-_37px)]">
                How long does it take to deliver the products?
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-5xl font-inter">
                <b className="relative leading-[24px] inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_rgba(96,_183,_207,_0.4)_10%,_rgba(62,_141,_167,_0.4)_74.5%,_rgba(0,_62,_92,_0.24))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[17px] mq450:text-lgi mq450:leading-[19px]">
                  +
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-white box-border flex flex-row flex-wrap items-start justify-start pt-[11px] pb-[23px] pr-4 pl-[21px] gap-[26.8px] max-w-full border-[1px] border-solid border-dimgray-400">
              <div className="flex-1 relative tracking-[0.15px] leading-[24px] font-medium inline-block min-w-[319px] max-w-full">
                How long do you keep samples and analysis results?
              </div>
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-5xl font-inter">
                <b className="relative leading-[24px] inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_rgba(96,_183,_207,_0.4)_10%,_rgba(62,_141,_167,_0.4)_74.5%,_rgba(0,_62,_92,_0.24))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[17px] mq450:text-lgi mq450:leading-[19px]">
                  +
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-white box-border flex flex-row items-start justify-between py-[22px] pr-[18px] pl-[21px] max-w-full gap-[20px] border-[1px] border-solid border-dimgray-400">
              <div className="w-[455px] relative tracking-[0.15px] leading-[26px] font-medium flex items-center shrink-0 max-w-[calc(100%_-_37px)]">
                What sequencer do you use?
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-5xl font-inter">
                <b className="relative leading-[24px] inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_rgba(96,_183,_207,_0.4)_10%,_rgba(62,_141,_167,_0.4)_74.5%,_rgba(0,_62,_92,_0.24))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[17px] mq450:text-lgi mq450:leading-[19px]">
                  +
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
