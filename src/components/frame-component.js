import ButtonContent from "./button-content";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer
      className={`w-[1276px] flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-lg text-darkslategray-100 font-body-large ${className}`}
    >
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/screenshot-20240513-at-723-5@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-start gap-[23px] max-w-full lg:flex-wrap">
        <ButtonContent />
        <div className="flex-1 rounded-3xs bg-white box-border overflow-hidden flex flex-row items-start justify-between pt-[71px] pb-[61px] pr-[54px] pl-[193px] min-w-[578px] max-w-full gap-[20px] border-[1px] border-solid border-gradient lg:flex-wrap lg:justify-center lg:pl-24 lg:pr-[27px] lg:box-border mq450:pl-5 mq450:box-border mq825:min-w-full">
          <div className="w-[189px] flex flex-col items-start justify-start gap-[14px] min-w-[189px] lg:flex-1">
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
          <div className="w-[308.5px] flex flex-col items-start justify-start gap-[14px] min-w-[308.5px] lg:flex-1">
            <div className="relative leading-[19.2px] font-medium inline-block min-w-[126px]">
              Privacy Policy
            </div>
            <div className="self-stretch relative leading-[19.2px] font-medium">
              Handling of Personal Information
            </div>
            <div className="relative leading-[19.2px] font-medium">
              Cancellation Policy
            </div>
            <div className="relative leading-[20px] font-medium inline-block min-w-[88px]">
              Site Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
