import PropTypes from "prop-types";

const ButtonContent = ({ className = "" }) => {
  return (
    <div
      className={`w-[362px] rounded-3xs bg-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-center pt-[46px] px-5 pb-[49px] min-w-[362px] max-w-full border-[1px] border-solid border-gradient lg:flex-1 mq825:min-w-full ${className}`}
    >
      <div className="flex flex-col items-center justify-start gap-[48px]">
        <img
          className="w-[100px] h-[100px] relative object-contain"
          loading="lazy"
          alt=""
          src="/group@2x.png"
        />
        <button className="cursor-pointer [border:none] p-0 bg-orange rounded-81xl overflow-hidden flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center py-2 pr-6 pl-4 gap-[7px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
            <div className="relative text-base tracking-[0.5px] leading-[24px] font-body-large text-darkslategray-200 text-center inline-block min-w-[89px]">
              Contact Us
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

ButtonContent.propTypes = {
  className: PropTypes.string,
};

export default ButtonContent;
