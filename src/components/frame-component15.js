import PropTypes from "prop-types";

const FrameComponent15 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start gap-[55.7px] max-w-full text-left text-13xl text-darkslategray-100 font-body-large mq750:gap-[28px] ${className}`}
    >
      <div className="w-[1369px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1059px] flex flex-col items-start justify-start gap-[29.7px] max-w-full">
          <h2 className="m-0 relative text-inherit leading-[24px] font-bold font-inherit mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[19px]">
            Our Project
          </h2>
          <div className="self-stretch relative text-5xl leading-[34px] mq450:text-lgi mq450:leading-[27px]">
            <p className="m-0">Genetic analysis service</p>
            <p className="m-0">
              Genetic testing (tests related to evidence-based medicine, not
              DTC)
            </p>
            <p className="m-0">Ultra-early detection of cancer</p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center [row-gap:20px] max-w-full text-81xl text-[transparent] lg:flex-wrap">
        <div className="flex-1 bg-dimgray-200 flex flex-col items-start justify-start pt-[100px] px-16 pb-[15px] box-border relative gap-[21px] min-w-[585px] max-w-full z-[1] mq750:pl-8 mq750:pr-8 mq750:box-border mq750:min-w-full">
          <div className="w-[579px] flex flex-row items-start justify-start max-w-full text-center font-inter">
            <h1 className="m-0 w-[579px] relative text-inherit tracking-[0.08em] leading-[90px] font-black font-inherit inline-block shrink-0 [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] max-w-full z-[1] mq450:text-11xl mq450:leading-[36px] mq1050:text-31xl mq1050:leading-[54px]">
              ANALYSIS
            </h1>
            <div className="flex flex-col items-start justify-start pt-[45px] px-0 pb-0 ml-[-487px] text-left text-xl text-darkslategray-100 font-body-large">
              <div className="relative leading-[36px] mq450:text-base mq450:leading-[29px]">{`Inspection & Analysis –`}</div>
            </div>
          </div>
          <div className="w-[696px] absolute !m-[0] right-[48px] bottom-[-111px] text-xl leading-[34px] text-darkslategray-100 flex items-center mq450:text-base mq450:leading-[27px]">
            The Inspection and Analysis section provides customers with detailed
            insights into Medbank's testing and analysis procedures,
            highlighting the laboratory's capabilities, equipment, and strengths
            in genetic analysis.
          </div>
          <div className="w-[601px] flex flex-row items-start justify-center max-w-full text-17xl">
            <h1 className="m-0 relative text-inherit leading-[42px] uppercase font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[34px]">{`Inspection & ANALYSIS`}</h1>
          </div>
        </div>
        <img
          className="w-[540px] relative max-h-full object-cover max-w-full lg:flex-1"
          loading="lazy"
          alt=""
          src="/aviti-pressrelease031222v4-2@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent15.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent15;
