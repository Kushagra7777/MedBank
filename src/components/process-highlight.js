import { useMemo } from "react";
import PropTypes from "prop-types";

const ProcessHighlight = ({
  className = "",
  comprehensiveNextGenerati,
  atMedbankWeHaveTheCapabil,
  streamlinedAndIntegratedN,
  expertGuidanceAndSupportT,
  customizedSolutionsTailor,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const processHighlightStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[687px] max-w-full text-left text-lg text-darkslategray-100 font-body-large mq1050:min-w-full ${className}`}
      style={processHighlightStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="relative leading-[24px] font-medium inline-block min-w-[110px]">
            Our Strength
          </div>
          <h2 className="m-0 h-6 relative text-13xl leading-[24px] font-bold font-inherit flex items-center mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[19px]">
            {comprehensiveNextGenerati}
          </h2>
        </div>
        <div className="self-stretch relative text-5xl leading-[34px] mq450:text-lgi mq450:leading-[27px]">
          {atMedbankWeHaveTheCapabil}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] max-w-full text-9xl">
        <h3 className="m-0 relative text-inherit leading-[24px] font-medium font-inherit inline-block min-w-[109px] mq450:text-3xl mq450:leading-[19px]">
          Benefits
        </h3>
        <div className="w-[954px] relative text-5xl leading-[34px] flex items-center max-w-full mq450:text-lgi mq450:leading-[27px]">
          <ol className="m-0 font-inherit text-inherit pl-8">
            <li className="mb-0">{streamlinedAndIntegratedN}</li>
            <li className="mb-0">{expertGuidanceAndSupportT}</li>
            <li>{customizedSolutionsTailor}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

ProcessHighlight.propTypes = {
  className: PropTypes.string,
  comprehensiveNextGenerati: PropTypes.string,
  atMedbankWeHaveTheCapabil: PropTypes.string,
  streamlinedAndIntegratedN: PropTypes.string,
  expertGuidanceAndSupportT: PropTypes.string,
  customizedSolutionsTailor: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default ProcessHighlight;
