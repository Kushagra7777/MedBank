import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[100px] pr-0.5 pl-[478px] box-border [row-gap:20px] max-w-full text-center text-81xl text-[transparent] font-body-large mq450:pl-5 mq450:box-border mq825:pl-[119px] mq825:pb-[65px] mq825:box-border mq1425:flex-wrap mq1425:pl-[239px] mq1425:box-border ${className}`}
    >
      <img
        className="ml-[-638px] w-[640px] relative max-h-full object-cover min-h-[518px] shrink-0 max-w-full z-[3] mq1425:flex-1"
        loading="lazy"
        alt=""
        src="/29661585-s-1@2x.png"
      />
      <div className="w-[960px] bg-dimgray-200 flex flex-col items-start justify-start pt-[100px] px-4 pb-[122px] box-border gap-[19px] min-w-[960px] shrink-0 max-w-full ml-[-2px] lg:min-w-full lg:ml-0 mq450:min-w-full mq450:ml-0 mq825:pb-[79px] mq825:box-border mq825:min-w-full mq825:ml-0 mq1425:flex-1 mq1425:min-w-full mq1425:ml-0">
        <div className="w-[616px] flex flex-row items-start justify-start pt-0 pb-[5px] pr-5 pl-0 box-border max-w-full font-inter">
          <h1 className="m-0 relative text-inherit tracking-[0.1em] leading-[78px] font-black font-inherit [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] z-[1] mq450:text-11xl mq450:leading-[31px] mq825:text-31xl mq825:leading-[47px]">
            ABOUT US
          </h1>
          <div className="w-[164px] flex flex-col items-start justify-start pt-[39px] px-0 pb-0 box-border ml-[-503px] text-left text-xl text-darkslategray-100 font-body-large">
            <div className="self-stretch relative leading-[36px] mq450:text-base mq450:leading-[29px]">
              About Us –
            </div>
          </div>
        </div>
        <div className="w-[377px] flex flex-row items-start justify-center pt-0 px-5 pb-[5px] box-border max-w-full text-left text-17xl">
          <h2 className="m-0 w-[189px] relative text-inherit leading-[42px] uppercase font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center shrink-0 mq450:text-3xl mq450:leading-[25px] mq825:text-10xl mq825:leading-[34px]">
            MEDBANK
          </h2>
        </div>
        <div className="w-[884px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-darkslategray-100">
          <blockquote className="m-0 w-[696px] relative leading-[34px] flex items-center shrink-0 max-w-full mq450:text-base mq450:leading-[27px]">
            "Welcome to Medbank, your trusted partner in genetic analysis. Learn
            more about our company's mission, values, and commitment to
            excellence."
          </blockquote>
        </div>
        <div className="w-[317px] flex flex-row items-start justify-center py-0 px-5 box-border text-lg">
          <div className="flex flex-row items-start justify-start gap-[11px]">
            <b className="relative leading-[42px] inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] min-w-[94px]">
              Read More
            </b>
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src="/octiconarrowup16@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
