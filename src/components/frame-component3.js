import StackedCardStyle from "./stacked-card-style";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[100px] box-border max-w-full text-left text-81xl text-[transparent] font-body-large lg:pb-[65px] lg:box-border mq825:pb-[42px] mq825:box-border ${className}`}
    >
      <div className="flex-1 bg-dimgray-600 flex flex-col items-start justify-start py-[100px] px-[69px] box-border gap-[79px] max-w-full lg:pt-[65px] lg:pb-[65px] lg:box-border mq450:gap-[20px] mq825:gap-[39px] mq825:py-[42px] mq825:px-[34px] mq825:box-border">
        <div className="w-[1440px] h-[1026px] relative bg-dimgray-600 hidden max-w-full" />
        <div className="w-[1218px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="w-[1087px] flex flex-row items-start justify-start max-w-full text-center font-inter">
              <h1 className="m-0 w-[1087px] relative text-inherit tracking-[0.1em] leading-[90px] font-black font-inherit inline-block shrink-0 [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] max-w-full z-[2] mq450:text-11xl mq450:leading-[36px] mq825:text-31xl mq825:leading-[54px]">
                RECENT ARTICLES
              </h1>
              <div className="flex flex-col items-start justify-start pt-[57px] px-0 pb-0 ml-[-1001px] text-left text-xl text-darkslategray-100 font-body-large">
                <div className="relative leading-[24px] z-[1] mq450:text-base mq450:leading-[19px]">
                  Recent Articles –
                </div>
              </div>
            </div>
            <div className="w-[617px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-17xl">
              <h2 className="m-0 relative text-inherit leading-[44px] uppercase font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq450:text-3xl mq450:leading-[26px] mq825:text-10xl mq825:leading-[35px]">
                Recent Announcement
              </h2>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-xl text-darkslategray-100">
              <blockquote className="m-0 h-[88px] w-[1127px] relative leading-[34px] flex items-center shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[27px]">
                "Stay updated with the latest announcements and news from
                Medbank. Explore our recent articles and media coverage to learn
                more about our company's activities, achievements, and
                advancements in genetic analysis."
              </blockquote>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[61px] max-w-full text-base text-darkslategray-100 mq450:gap-[15px] mq825:gap-[30px]">
          <div className="flex flex-col items-start justify-start pt-[216px] px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 object-contain z-[1]"
              alt=""
              src="/octiconarrowup16-5@2x.png"
            />
          </div>
          <div className="w-[1130px] grid flex-row items-start justify-start gap-[25px] max-w-[calc(100%_-_170px)] grid-cols-[repeat(3,_minmax(270px,_1fr))] z-[1] lg:justify-center lg:grid-cols-[repeat(2,_minmax(270px,_468px))] mq825:grid-cols-[minmax(270px,_1fr)]">
            <StackedCardStyle media="/media@2x.png" />
            <StackedCardStyle media="/media-1@2x.png" />
            <StackedCardStyle media="/media-2@2x.png" />
          </div>
          <div className="flex flex-col items-start justify-start pt-[216px] px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 object-contain z-[1]"
              alt=""
              src="/octiconarrowup16@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
