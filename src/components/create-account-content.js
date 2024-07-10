import PropTypes from "prop-types";

const CreateAccountContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-[15px] pl-0 box-border max-w-full text-left text-81xl text-[transparent] font-body-large ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
        <div className="w-[1090px] flex flex-row items-start justify-start max-w-full text-center font-inter">
          <h1 className="m-0 w-[1090px] relative text-inherit tracking-[0.1em] leading-[90px] font-black font-inherit inline-block shrink-0 [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] max-w-full z-[1] mq450:text-11xl mq450:leading-[36px] mq825:text-31xl mq825:leading-[54px]">
            CREATE ACCOUNT
          </h1>
          <div className="flex flex-col items-start justify-start pt-[57px] px-0 pb-0 ml-[-996px] text-left text-xl text-darkslategray-100 font-body-large">
            <div className="relative leading-[24px] mq450:text-base mq450:leading-[19px]">
              Create Account –
            </div>
          </div>
        </div>
        <div className="w-[889px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-17xl">
          <h2 className="m-0 relative text-inherit leading-[44px] uppercase font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-3xl mq450:leading-[26px] mq825:text-10xl mq825:leading-[35px]">
            For Getting Your sample sequenced
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full text-xl text-darkslategray-100">
          <div className="w-[1187px] relative leading-[34px] flex items-center shrink-0 max-w-full mq450:text-base mq450:leading-[27px]">
            Signup or Login to your account for sending samples and getting your
            sample sequenced.
          </div>
        </div>
        <div className="w-[423px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <button className="cursor-pointer py-2 px-[31px] bg-[transparent] rounded-md flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gradient hover:bg-cadetblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-cadetblue-100">
              <div className="relative text-sm leading-[20px] font-medium font-body-large text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block min-w-[44px]">
                Sign In
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-2.5 px-[33px] bg-[transparent] rounded-md [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] flex flex-row items-start justify-start whitespace-nowrap">
              <div className="relative text-sm leading-[20px] font-medium font-body-large text-white text-left inline-block min-w-[50px]">
                Sign Up
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateAccountContent.propTypes = {
  className: PropTypes.string,
};

export default CreateAccountContent;
