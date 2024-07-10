import PropTypes from "prop-types";

const FrameComponent12 = ({ className = "" }) => {
  return (
    <div
      className={`w-80 flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border text-left text-lg text-darkslategray-100 font-body-large mq825:w-0 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[14px] mq825:hidden">
        <div className="w-[67px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[9.5px]">
            <a className="[text-decoration:none] h-[31px] flex-1 relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[23px] cursor-pointer">
              JN
            </a>
            <div className="h-[25.5px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
              <div className="w-px h-[21px] relative box-border border-r-[1px] border-solid border-darkslategray-100" />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start border-b-[2px] border-solid border-gradient">
              <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] flex items-center min-w-[24px] cursor-pointer">
                EN
              </a>
            </div>
          </div>
        </div>
        <button className="cursor-pointer py-2 px-[31px] bg-[transparent] flex-1 rounded-md flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gradient hover:bg-cadetblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-cadetblue-100">
          <div className="relative text-sm leading-[20px] font-medium font-body-large text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[44px]">
            Sign In
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-2.5 px-[33px] bg-[transparent] flex-1 rounded-md [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] flex flex-row items-start justify-start whitespace-nowrap">
          <div className="relative text-sm leading-[20px] font-medium font-body-large text-white text-left inline-block min-w-[50px]">
            Sign Up
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
