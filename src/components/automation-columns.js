import { useMemo } from "react";
import PropTypes from "prop-types";

const AutomationColumns = ({
  className = "",
  automationOfProcesses,
  weHaveImplementedAutomati,
  reducedRiskOfHumanErrorAn,
  increasedThroughputAndFas,
  consistentAndReliableResu,
  propWidth,
}) => {
  const automationColumnsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[1187px] flex flex-row items-start justify-end py-0 px-[65px] box-border max-w-full text-left text-lg text-darkslategray-100 font-body-large lg:pl-8 lg:pr-8 lg:box-border ${className}`}
      style={automationColumnsStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="w-[745px] flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="relative leading-[24px] font-medium inline-block min-w-[110px]">
              Our Strength
            </div>
            <h2 className="m-0 self-stretch relative text-13xl leading-[24px] font-bold font-inherit mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[19px]">
              {automationOfProcesses}
            </h2>
          </div>
          <div className="self-stretch relative text-5xl leading-[34px] mq450:text-lgi mq450:leading-[27px]">
            {weHaveImplementedAutomati}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] max-w-full text-9xl">
          <h3 className="m-0 relative text-inherit leading-[24px] font-medium font-inherit inline-block min-w-[109px] mq450:text-3xl mq450:leading-[19px]">
            Benefits
          </h3>
          <div className="w-[601px] relative text-5xl leading-[34px] flex items-center max-w-full mq450:text-lgi mq450:leading-[27px]">
            <ol className="m-0 font-inherit text-inherit pl-8">
              <li className="mb-0">{reducedRiskOfHumanErrorAn}</li>
              <li className="mb-0">{increasedThroughputAndFas}</li>
              <li>{consistentAndReliableResu}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

AutomationColumns.propTypes = {
  className: PropTypes.string,
  automationOfProcesses: PropTypes.string,
  weHaveImplementedAutomati: PropTypes.string,
  reducedRiskOfHumanErrorAn: PropTypes.string,
  increasedThroughputAndFas: PropTypes.string,
  consistentAndReliableResu: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default AutomationColumns;
