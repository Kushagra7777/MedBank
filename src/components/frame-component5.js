import TableHeader from "./table-header";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1376px] flex flex-row items-start justify-start pt-0 px-[73px] pb-[100px] box-border max-w-full text-center text-81xl text-[transparent] font-inter lg:pb-[65px] lg:box-border mq825:pb-[42px] mq825:box-border mq1425:pl-9 mq1425:pr-9 mq1425:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
        <div className="w-[1061px] flex flex-row items-start justify-start max-w-full">
          <h1 className="m-0 w-[1061px] relative text-inherit tracking-[0.1em] leading-[90px] font-black font-inherit inline-block shrink-0 [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] max-w-full z-[1] mq450:text-11xl mq450:leading-[36px] mq825:text-31xl mq825:leading-[54px]">
            REFERENCE PRICE
          </h1>
          <div className="flex flex-col items-start justify-start pt-[57px] px-0 pb-0 ml-[-979px] text-left text-xl text-darkslategray-100 font-body-large">
            <div className="relative leading-[24px] mq450:text-base mq450:leading-[19px]">
              Reference Price –
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-17xl text-darkslategray-100 font-body-large">
          <div className="w-[1171px] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-[50px] max-w-full mq825:gap-[25px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[21px] pl-[23px] box-border max-w-full">
                <TableHeader
                  priceTable="Price Table"
                  exploreOurReferencePrices={`"Explore our reference prices to gain insight into the cost structure of our genetic analysis services. While actual prices may vary depending on specific project requirements, our reference prices provide an estimate of the costs involved."`}
                />
              </div>
              <div className="self-stretch rounded-t-3xs rounded-b-none [background:linear-gradient(90deg,_rgba(77,_190,_216,_0.4),_rgba(144,_218,_238,_0.4)_97.46%)] flex flex-row items-start justify-between p-5 gap-[20px] text-5xl lg:flex-wrap">
                <div className="relative leading-[40px] inline-block min-w-[47px] mq450:text-lgi mq450:leading-[32px]">
                  Plan
                </div>
                <div className="relative leading-[40px] mq450:text-lgi mq450:leading-[32px]">
                  Read Length
                </div>
                <div className="relative leading-[40px] mq450:text-lgi mq450:leading-[32px]">
                  Data Volume
                </div>
                <div className="relative leading-[40px] mq450:text-lgi mq450:leading-[32px]">
                  Reference Price
                </div>
                <div className="relative leading-[40px] mq450:text-lgi mq450:leading-[32px]">
                  Delivery Time
                </div>
              </div>
            </div>
            <div className="w-[171px] rounded-t-none rounded-br-none rounded-bl-3xs bg-white flex flex-col items-start justify-start pt-5 px-5 pb-[25px] box-border relative gap-[64px] text-xl mq825:pb-5 mq825:box-border">
              <div className="relative leading-[40px] font-medium mq450:text-base mq450:leading-[32px]">
                <p className="m-0">{`DNA `}</p>
                <p className="m-0">Sequencing</p>
              </div>
              <img
                className="w-[1128px] h-px absolute !m-[0] top-[132px] right-[-977px]"
                loading="lazy"
                alt=""
                src="/line-21.svg"
              />
              <div className="relative leading-[40px] font-medium mq450:text-base mq450:leading-[32px]">
                <p className="m-0">RNA</p>
                <p className="m-0">Sequencing</p>
              </div>
              <img
                className="w-[1128px] h-px absolute !m-[0] top-[276px] right-[-977px]"
                loading="lazy"
                alt=""
                src="/line-21.svg"
              />
              <div className="relative leading-[40px] font-medium mq450:text-base mq450:leading-[32px]">
                <p className="m-0">Amplicon</p>
                <p className="m-0">Sequencing</p>
              </div>
              <img
                className="w-[1128px] h-px absolute !m-[0] right-[-977px] bottom-[136px]"
                loading="lazy"
                alt=""
                src="/line-21.svg"
              />
              <div className="relative leading-[40px] font-medium mq450:text-base mq450:leading-[32px]">
                <p className="m-0">Human Genome</p>
                <p className="m-0">Sequencing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;


