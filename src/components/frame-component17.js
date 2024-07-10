import PropTypes from "prop-types";

const FrameComponent17 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[18px] pr-5 pl-[22px] box-border max-w-full text-left text-9xl text-gray font-body-large ${className}`}
    >
      <div className="w-[1126px] flex flex-row flex-wrap items-start justify-start py-0 pr-2.5 pl-0 box-border gap-[46px] max-w-full mq750:gap-[23px]">
        <div className="w-6 flex flex-col items-start justify-start gap-[18px]">
          <a className="[text-decoration:none] self-stretch relative leading-[24px] font-medium text-[inherit] [transform:_rotate(-90deg)] mq450:text-3xl mq450:leading-[19px]">
            About Us
          </a>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/eparrowup.svg"
            />
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/clarityhomesolid.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[32px] min-w-[680px] max-w-full text-lg text-darkslategray-100 mq750:gap-[16px] mq1050:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-2 box-border gap-[24px] max-w-full">
            <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="relative leading-[24px] font-medium inline-block min-w-[79px]">
                About Us
              </div>
              <h2 className="m-0 relative text-13xl leading-[24px] font-bold font-inherit mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[19px]">
                Company Philosophy
              </h2>
            </div>
            <blockquote className="m-0 self-stretch relative text-5xl leading-[34px] mq450:text-lgi mq450:leading-[27px]">
              "At Medbank, our philosophy is centered around delivering
              accurate, reliable, and innovative genetic analysis solutions to
              researchers worldwide. We are dedicated to advancing scientific
              knowledge and empowering our clients with valuable insights to
              drive discoveries and advancements in various fields."
            </blockquote>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-13xl">
            <h2 className="m-0 relative text-inherit leading-[24px] font-medium font-inherit mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[19px]">
              Key Principles
            </h2>
            <div className="self-stretch relative text-5xl leading-[34px] mq450:text-lgi mq450:leading-[27px]">
              <ol className="m-0 text-inherit pl-8">
                <li className="mb-0">
                  <span className="font-medium font-body-large">Quality:</span>
                  <span>
                    {" "}
                    "We uphold the highest standards of quality and precision in
                    all our services and processes, ensuring reproducible and
                    trustworthy results."
                  </span>
                </li>
                <li className="mb-0">
                  <span className="font-medium font-body-large">
                    Innovation:
                  </span>
                  <span className="font-body-large">
                    {" "}
                    "We continuously strive to innovate and adopt cutting-edge
                    technologies and methodologies to stay at the forefront of
                    genetic analysis."
                  </span>
                </li>
                <li className="mb-0">
                  <span className="font-medium font-body-large">{`Collaboration: `}</span>
                  <span className="font-body-large">
                    "We believe in fostering strong partnerships and
                    collaborations with researchers, institutions, and industry
                    partners to achieve common goals and mutual success."
                  </span>
                </li>
                <li className="mb-0">
                  <span className="font-medium font-body-large">Ethics:</span>
                  <span className="font-body-large">
                    {" "}
                    "We conduct our business with integrity, honesty, and
                    transparency, adhering to ethical standards and regulatory
                    requirements at all times."
                  </span>
                </li>
                <li>
                  <span className="font-medium font-body-large">
                    Customer Focus:
                  </span>
                  <span className="font-body-large">
                    {" "}
                    "We prioritize customer satisfaction and strive to exceed
                    expectations by providing personalized solutions,
                    exceptional service, and timely support."
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent17.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent17;
