import PropTypes from "prop-types";

const StepItems1 = ({ className = "", registration }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-xl text-darkslategray-100 font-body-large ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="w-[142px] relative leading-[42px] flex items-center shrink-0 mq450:text-base mq450:leading-[34px]">
          <span className="[line-break:anywhere] w-full">
            <ol className="m-0 font-inherit text-inherit pl-[27px]">
              <li>{registration}</li>
            </ol>
          </span>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-400" />
    </div>
  );
};

StepItems1.propTypes = {
  className: PropTypes.string,
  registration: PropTypes.string,
};

export default StepItems1;
