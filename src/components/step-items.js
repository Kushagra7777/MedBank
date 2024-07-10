import PropTypes from "prop-types";

const StepItems = ({ className = "", createNewOrder }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-xl text-darkslategray-100 font-body-large ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]">
          <ol className="m-0 font-inherit text-inherit pl-[27px]">
            <li>{createNewOrder}</li>
          </ol>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-400" />
    </div>
  );
};

StepItems.propTypes = {
  className: PropTypes.string,
  createNewOrder: PropTypes.string,
};

export default StepItems;
