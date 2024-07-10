import FrameComponent18 from "../components/frame-component18";
import FrameComponent17 from "../components/frame-component17";
import FrameComponent16 from "../components/frame-component16";
import FrameComponent15 from "../components/frame-component15";
import FrameComponent14 from "../components/frame-component14";
import FrameComponent13 from "../components/frame-component13";

const AboutUs = () => {
  return (
    <div className="w-full h-[5312px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[45px] box-border gap-[60px] leading-[normal] tracking-[normal] mq750:gap-[30px] mq1050:h-auto">
      <FrameComponent18 />
      <div className="w-0 h-6 hidden" />
      <main className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[3145px] box-border gap-[82px] max-w-full shrink-0 lg:pb-[864px] lg:box-border mq450:gap-[20px] mq450:pb-[365px] mq450:box-border mq750:gap-[41px] mq1050:pb-[562px] mq1050:box-border">
        <FrameComponent17 />
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[18px] pr-5 pl-[21px] box-border max-w-full">
          <div className="w-[953px] flex flex-row flex-wrap items-start justify-center gap-[23px] max-w-full">
            <img
              className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[302px] min-h-[336px]"
              loading="lazy"
              alt=""
              src="/dsc-0022-1@2x.png"
            />
            <img
              className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[302px] min-h-[336px]"
              loading="lazy"
              alt=""
              src="/335055696-1103706440492383-140228923947481548-n-1@2x.png"
            />
          </div>
        </section>
        <section className="w-[1368px] flex flex-row items-start justify-center pt-0 px-5 pb-[18px] box-border max-w-full text-left text-13xl text-darkslategray-100 font-body-large">
          <div className="w-[1056px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h2 className="m-0 relative text-inherit leading-[24px] font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[19px]">
              GOAL in genetic analysis of Medbank
            </h2>
            <div className="self-stretch relative text-5xl leading-[34px] mq450:text-lgi mq450:leading-[27px]">
              At Medbank, our overarching goal in genetic analysis is to become
              a world-leading hub for genetic research and analysis. We aim to
              contribute significantly to scientific advancements and
              discoveries by providing state-of-the-art genetic analysis
              services, driving innovation, and fostering collaborations.
            </div>
          </div>
        </section>
        <FrameComponent16 />
        <FrameComponent15 />
        <FrameComponent14 />
        <FrameComponent13 />
      </main>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        alt=""
        src="/line-24.svg"
      />
    </div>
  );
};

export default AboutUs;
