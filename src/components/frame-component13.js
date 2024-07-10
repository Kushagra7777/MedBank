import ButtonContent from "./button-content";
import PropTypes from "prop-types";

const FrameComponent13 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-darkslategray-100 font-body-large ${className}`}
    >
      <div className="w-[1276px] flex flex-col items-start justify-start gap-[24px] max-w-full">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/screenshot-20240513-at-723-5@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start gap-[23px] max-w-full mq1050:flex-wrap">
          <ButtonContent />
          <div className="flex-1 rounded-3xs bg-white box-border overflow-hidden flex flex-row items-start justify-between pt-[71px] pb-[61px] pr-[183px] pl-[193px] min-w-[369px] max-w-full gap-[20px] border-[1px] border-solid border-gradient mq450:pl-5 mq450:pr-5 mq450:box-border mq450:min-w-full mq1050:flex-wrap mq1050:justify-center mq1050:pl-24 mq1050:pr-[91px] mq1050:box-border">
            <div className="w-[189px] flex flex-col items-start justify-start gap-[14px] min-w-[189px] mq1050:flex-1">
              <div className="w-[100px] relative leading-[19.2px] font-medium flex items-center">
                About Us
              </div>
              <div className="w-[100px] relative leading-[19.2px] font-medium flex items-center">
                Strength
              </div>
              <div className="w-[100px] relative leading-[19.2px] font-medium flex items-center">
                Service
              </div>
              <div className="relative leading-[19.2px] font-medium inline-block min-w-[100px]">
                Order FLow
              </div>
              <div className="self-stretch relative leading-[19.2px] font-medium">
                Sample Shipping
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[14px]">
              <div className="relative leading-[19.2px] font-medium inline-block min-w-[126px]">
                Privacy Policy
              </div>
              <div className="relative leading-[19.2px] font-medium">
                Personal Information
              </div>
              <div className="relative leading-[19.2px] font-medium">
                Cancellation Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
