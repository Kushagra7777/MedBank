import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "", specializedEnvironmentFor }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-xl text-darkslategray-100 font-body-large ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 pr-[60px] pl-[59px] mq825:pl-[29px] mq825:pr-[30px] mq825:box-border">
        <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]">
          {specializedEnvironmentFor}
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px]"
        alt=""
        src="/line-27.svg"
      />
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
  specializedEnvironmentFor: PropTypes.string,
};

export default FrameComponent8;
