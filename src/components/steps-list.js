import { useMemo } from "react";
import PropTypes from "prop-types";

const StepsList = ({
  className = "",
  completeProfileOnMyPage,
  propAlignSelf,
  propWidth,
}) => {
  const stepsListStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-xl text-darkslategray-100 font-body-large ${className}`}
      style={stepsListStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]">
          <ol className="m-0 font-inherit text-inherit pl-[27px]">
            <li>{completeProfileOnMyPage}</li>
          </ol>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px]"
        loading="lazy"
        alt=""
        src="/line-27.svg"
      />
    </div>
  );
};

StepsList.propTypes = {
  className: PropTypes.string,
  completeProfileOnMyPage: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default StepsList;
