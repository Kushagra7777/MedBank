import PropTypes from "prop-types";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-38xl text-darkslategray-100 font-dm-serif-text lg:flex-wrap ${className}`}
    >
      <img
        className="self-stretch w-[485.2px] relative max-h-full object-cover min-h-[651px] max-w-full lg:flex-1"
        alt=""
        src="/aviti-pressrelease031222v4-3@2x.png"
      />
      <div className="h-[651px] flex-1 relative min-w-[625px] max-w-full ml-[-100px] lg:ml-0 mq825:min-w-full">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
          alt=""
          src="/rectangle-4456.svg"
        />
        <div className="absolute top-[123px] left-[200px] w-[696px] flex flex-col items-start justify-start pt-0 px-0 pb-[32.8px] box-border gap-[32px] max-w-full z-[3]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.25px] leading-[80px] font-normal font-inherit mq450:text-15xl mq450:leading-[48px] mq825:text-27xl mq825:leading-[64px]">
              Unlock the Power of Next-Generation Sequencing with Medbank
            </h1>
            <h3 className="m-0 w-[572px] relative text-9xl leading-[42px] font-normal font-body-large flex items-center max-w-full box-border pr-5 mq450:text-3xl mq450:leading-[34px]">
              "Gain deeper insights into genes, RNA, and genomes for
              breakthrough discoveries"
            </h3>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-orange rounded-81xl overflow-hidden flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center py-2 pr-6 pl-4 gap-[7px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/icon.svg"
              />
              <div className="relative text-base tracking-[0.5px] leading-[24px] font-body-large text-darkslategray-200 text-center">
                Discover Our Services
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
