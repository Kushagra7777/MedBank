import FrameComponent12 from "./frame-component12";
import PropTypes from "prop-types";

const FrameComponent18 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-left text-lg text-darkslategray-100 font-body-large ${className}`}
    >
      <div className="flex-1 bg-white box-border flex flex-row items-start justify-between pt-8 pb-[31px] pr-[31px] pl-8 max-w-full gap-[20px] border-b-[0.5px] border-solid border-gradient">
        <div className="w-[878px] flex flex-row items-center justify-start py-0 pr-[62px] pl-0 box-border gap-[36px] max-w-full lg:w-44 mq450:gap-[18px] mq1050:pr-[31px] mq1050:box-border">
          <img
            className="h-[82px] w-[78px] relative object-cover"
            loading="lazy"
            alt=""
            src="/clip-path-group@2x.png"
          />
          <div className="flex-1 flex flex-row items-end justify-between py-5 pr-2.5 pl-0 box-border max-w-full gap-[20px] lg:hidden">
            <div className="flex flex-row items-end justify-start">
              <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[52px] whitespace-nowrap">{`Home `}</a>
            </div>
            <div className="flex flex-row items-center justify-center border-b-[2px] border-solid border-gradient">
              <a className="[text-decoration:none] h-[31px] relative tracking-[0.49px] leading-[24px] font-medium text-[inherit] flex items-center min-w-[82px] whitespace-nowrap">
                About Us
              </a>
            </div>
            <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[75px]">
              Services
            </a>
            <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center whitespace-nowrap">
              Sample Shipping
            </a>
            <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[76px]">
              Strength
            </a>
            <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[72px]">
              Contact
            </a>
          </div>
        </div>
        <FrameComponent12 />
      </div>
    </header>
  );
};

FrameComponent18.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent18;
