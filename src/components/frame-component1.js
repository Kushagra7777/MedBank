import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[68px] box-border max-w-full text-left text-81xl text-[transparent] font-body-large mq825:pb-[29px] mq825:box-border mq1425:pb-11 mq1425:box-border ${className}`}
    >
      <div className="flex-1 bg-dimgray-600 flex flex-col items-start justify-start pt-[100px] px-[63px] pb-[419px] box-border max-w-full mq825:pt-[42px] mq825:px-[31px] mq825:pb-[177px] mq825:box-border mq1425:pt-[65px] mq1425:pb-[272px] mq1425:box-border">
        <div className="w-[1440px] h-[1343px] relative bg-dimgray-600 hidden max-w-full" />
        <div className="w-[769px] flex flex-row items-start justify-start pt-0 px-0 pb-[21px] box-border max-w-full text-center font-inter">
          <h1 className="m-0 w-[769px] relative text-inherit tracking-[0.1em] leading-[90px] font-black font-inherit inline-block shrink-0 [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] max-w-full z-[2] mq450:text-11xl mq450:leading-[36px] mq825:text-31xl mq825:leading-[54px]">
            CONTACT US
          </h1>
          <div className="flex flex-col items-start justify-start pt-[57px] px-0 pb-0 ml-[-676px] text-left text-xl text-darkslategray-100 font-body-large">
            <div className="relative leading-[24px] inline-block min-w-[125px] z-[1] mq450:text-base mq450:leading-[19px]">
              Contact Us –
            </div>
          </div>
        </div>
        <div className="w-[499px] flex flex-row items-start justify-center max-w-full text-17xl">
          <h2 className="m-0 relative text-inherit leading-[44px] uppercase font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq450:text-3xl mq450:leading-[26px] mq825:text-10xl mq825:leading-[35px]">
            Reach Out To Us
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[53px] box-border max-w-full text-xl text-darkslategray-100 mq1425:pl-[26px] mq1425:pr-[26px] mq1425:box-border">
          <div className="w-[1167px] flex flex-row items-start justify-center gap-[51px] max-w-full lg:flex-wrap mq825:gap-[25px]">
            <div className="w-[441px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[441px] max-w-full lg:flex-1 mq825:min-w-full">
              <blockquote className="m-0 self-stretch relative leading-[34px] z-[1] mq450:text-base mq450:leading-[27px]">
                "Connect with Medbank's team for inquiries, support, and
                collaboration opportunities. We're here to assist you with your
                genetic analysis needs and provide personalized guidance every
                step of the way."
              </blockquote>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start relative min-w-[439px] max-w-full mq825:min-w-full">
              <img
                className="h-[650px] w-[1320px] absolute !m-[0] bottom-[-279px] left-[-589px] object-cover z-[1]"
                alt=""
                src="/min1-1@2x.png"
              />
              <form className="m-0 flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-white box-border flex flex-col items-start justify-start py-[61px] px-[79px] gap-[24px] max-w-full z-[2] border-[0.5px] border-solid border-dimgray-500 mq825:py-10 mq825:px-[39px] mq825:box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-row items-center justify-start pt-[14.5px] px-0 pb-[13px] border-b-[1px] border-solid border-dimgray-400">
                    <input
                      className="w-[86px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-center justify-center font-body-large text-mid"
                      placeholder="Full Name*"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start pt-[14.5px] px-0 pb-[13px] border-b-[1px] border-solid border-dimgray-400">
                    <input
                      className="w-[127px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-center justify-center font-body-large text-mid"
                      placeholder="Phone Number* "
                      type="text"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start pt-[14.5px] px-0 pb-[13px] border-b-[1px] border-solid border-dimgray-400">
                    <input
                      className="w-[120px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-center justify-center font-body-large text-mid"
                      placeholder="Email Address*"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start pt-[14.5px] px-0 pb-[13px] border-b-[1px] border-solid border-dimgray-400">
                    <input
                      className="w-[189px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-center justify-center font-body-large text-mid"
                      placeholder="Confirm Email Address*"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start pt-[14.5px] px-0 pb-[13px] border-b-[1px] border-solid border-dimgray-400">
                    <input
                      className="w-[121px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-center justify-center font-body-large text-mid"
                      placeholder="Inquiry Details* "
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full mq825:flex-wrap">
                  <input
                    className="m-0 h-4 w-4 relative rounded box-border border-[1px] border-solid border-dimgray-400"
                    type="checkbox"
                  />
                  <div className="h-[90px] flex-1 relative text-smi leading-[20px] font-body-large text-darkslategray-100 text-left flex items-center min-w-[318px] max-w-full">
                    By clicking checkbox, I authorize Medbank to call me and
                    send text messages and emails to me about Medbank and
                    services at the phone number or email address I entered
                    above. You can opt out anytime. You also agree to our Terms
                    of Service. Privacy Policy.
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-[17px] px-9 bg-orange rounded-11xl flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-1.svg"
                    />
                  </div>
                  <div className="relative text-sm leading-[21px] font-medium font-body-large text-darkslategray-200 text-center inline-block min-w-[68px]">
                    Get Guide
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
