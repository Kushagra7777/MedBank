import PropTypes from "prop-types";

const StackedCardStyle = ({ className = "", media }) => {
  return (
    <div
      className={`h-[480px] w-[360px] rounded-xl flex flex-row items-start justify-start relative max-w-full text-left text-base text-darkslategray-100 font-body-large ${className}`}
    >
      <div className="flex-1 !m-[0] absolute top-[0px] left-[0px] rounded-xl box-border overflow-hidden flex flex-row items-start justify-start max-w-full w-full h-full border-[1px] border-solid border-dimgray-300">
        <div className="flex-1 flex flex-col items-center justify-start max-w-full">
          <img
            className="self-stretch h-[276px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={media}
          />
          <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative tracking-[0.5px] leading-[24px]">
                Title
              </div>
              <div className="self-stretch relative text-sm tracking-[0.25px] leading-[20px] text-dimgray-100 whitespace-nowrap">
                24-Jan-2024 12:45PM
              </div>
            </div>
            <div className="self-stretch relative text-sm tracking-[0.25px] leading-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </div>
            <div className="self-stretch flex flex-row items-start justify-end">
              <button className="cursor-pointer p-0 bg-[transparent] rounded-81xl overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-gray">
                <div className="flex flex-row items-center justify-center py-2 px-[23px]">
                  <a className="[text-decoration:none] relative text-base tracking-[0.5px] leading-[24px] font-body-large text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center inline-block min-w-[84px]">
                    Read More
                  </a>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full absolute !m-[0] top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white box-border overflow-hidden z-[1] border-[1px] border-solid border-white">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hidden" />
      </div>
    </div>
  );
};

StackedCardStyle.propTypes = {
  className: PropTypes.string,
  media: PropTypes.string,
};

export default StackedCardStyle;
