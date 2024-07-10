import PropTypes from "prop-types";

const FrameComponent16 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[18px] pr-0 pl-0.5 box-border [row-gap:20px] max-w-full text-left text-5xl text-darkslategray-100 font-body-large lg:flex-wrap ${className}`}
    >
      <div className="h-[1070px] w-[478px] flex flex-col items-start justify-start gap-[40px] min-w-[478px] max-w-full lg:flex-1 mq750:gap-[20px] mq750:min-w-full">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/436448363-1131416484832113-3115078759975159251-n-1@2x.png"
        />
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
      <div className="flex-1 bg-dimgray-200 flex flex-col items-start justify-start pt-[100px] px-[66px] pb-[99.5px] box-border gap-[8px] min-w-[624px] max-w-full lg:pt-[65px] lg:pb-[65px] lg:box-border mq750:pt-[42px] mq750:pb-[42px] mq750:box-border mq750:min-w-full mq1050:pl-[33px] mq1050:pr-[33px] mq1050:box-border">
        <div className="w-[504px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full text-center text-81xl text-[transparent] font-inter">
          <h1 className="m-0 w-[504px] relative text-inherit tracking-[0.1em] leading-[78px] font-black font-inherit inline-block shrink-0 [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] max-w-full z-[2] mq450:text-11xl mq450:leading-[31px] mq1050:text-31xl mq1050:leading-[47px]">
            DETAILS
          </h1>
          <div className="flex flex-col items-start justify-start pt-[39px] px-0 pb-0 ml-[-442px] text-left text-xl text-darkslategray-100 font-body-large">
            <div className="relative leading-[36px] z-[1] mq450:text-base mq450:leading-[29px]">
              Company Details –
            </div>
          </div>
        </div>
        <div className="w-[675px] flex flex-row items-start justify-start py-0 px-[62px] box-border max-w-full text-17xl mq750:pl-[31px] mq750:pr-[31px] mq750:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h1 className="m-0 relative text-inherit leading-[42px] uppercase font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[34px]">
              COMPANY DETAILS
            </h1>
            <div className="self-stretch relative text-5xl leading-[34px] z-[1] mq450:text-lgi mq450:leading-[27px]">
              <span className="font-medium">Name :</span>
              <span> Medbank Pte. Ltd.</span>
            </div>
          </div>
        </div>
        <div className="w-[501px] flex flex-row items-start justify-start py-0 px-[62px] box-border max-w-full mq750:pl-[31px] mq750:pr-[31px] mq750:box-border">
          <div className="flex-1 relative leading-[34px] inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[27px]">
            <span className="font-medium">{`Establishment : `}</span>
            <span>15 OCT 2021</span>
          </div>
        </div>
        <div className="w-[772px] flex flex-row items-start justify-start pt-0 px-[62px] pb-[3px] box-border max-w-full mq1050:pl-[31px] mq1050:pr-[31px] mq1050:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
              <div className="h-[39px] flex-1 relative leading-[34px] flex items-center max-w-full z-[1] mq450:text-lgi mq450:leading-[27px]">
                <span>
                  <span className="font-medium">{`Representative employee : `}</span>
                  <span>Yuki Okada (Doctor)</span>
                </span>
              </div>
            </div>
            <h2 className="m-0 relative text-13xl leading-[24px] font-medium font-inherit inline-block min-w-[126px] z-[1] mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[19px]">
              Address
            </h2>
            <textarea
              className="[border:none] bg-[transparent] h-40 w-[552px] [outline:none] flex flex-col items-start justify-start py-0 px-[3px] box-border text-5xl text-darkslategray-100 max-w-full"
              placeholder={`Main Office
11 Mandalay Road #16-01 Singapore 308232`}
              rows={8}
              cols={28}
            />
          </div>
        </div>
        <div className="w-[679px] flex flex-row items-start justify-start pt-0 px-[62px] pb-1 box-border max-w-full mq750:pl-[31px] mq750:pr-[31px] mq750:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch h-32 relative leading-[34px] flex items-center shrink-0 z-[1] mq450:text-lgi mq450:leading-[27px]">
              <span>
                <p className="m-0 font-medium">Laboratory in Singapore</p>
                <p className="m-0">11 Mandalay Road #16-01</p>
                <p className="m-0">Singapore 308232</p>
              </span>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
              <img
                className="flex-1 relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px] z-[1]"
                loading="lazy"
                alt=""
                src="/line-27.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[676px] flex flex-row items-start justify-start py-0 px-[62px] box-border max-w-full mq750:pl-[31px] mq750:pr-[31px] mq750:box-border">
          <textarea
            className="[border:none] bg-[transparent] h-[165px] w-auto [outline:none] flex-1 flex flex-col items-start justify-start py-0 px-[3px] box-border text-5xl text-darkslategray-100 max-w-full"
            placeholder={`Laboratory in Japan
〒540-0002
3-7-12 Shoji, Ikuno-ku, Osaka-shi, Osaka Japan`}
            rows={8}
            cols={28}
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent16;
