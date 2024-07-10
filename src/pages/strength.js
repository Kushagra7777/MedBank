import FrameComponent19 from "../components/frame-component19";
import ContentContainer from "../components/content-container";
import AutomationContent from "../components/automation-content";

const Strength = () => {
  return (
    <div className="w-full h-[5567px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-14 box-border gap-[60px] leading-[normal] tracking-[normal] mq1050:h-auto mq750:gap-[30px]">
      <FrameComponent19 />
      <ContentContainer />
      <main className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[2901px] box-border max-w-full shrink-0 lg:pb-[797px] lg:box-border mq750:pb-[518px] mq750:box-border">
        <AutomationContent />
      </main>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        alt=""
        src="/line-24.svg"
      />
    </div>
  );
};

export default Strength;
