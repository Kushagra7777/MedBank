import FrameComponent11 from "../components/frame-component11";
import FrameComponent10 from "../components/frame-component10";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import CreateAccountContent from "../components/create-account-content";
import FrameComponent from "../components/frame-component";

const Homepage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-24 box-border leading-[normal] tracking-[normal]">
      <FrameComponent11 />  
      <FrameComponent10 />
      <FrameComponent9 />
      <FrameComponent7 />
      <FrameComponent6 />
      <FrameComponent5 /> {/*Price Table*/}
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <section className="w-[1421px] flex flex-row items-start justify-start py-0 px-[63px] box-border max-w-full mq825:pl-[31px] mq825:pr-[31px] mq825:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[100px] max-w-full mq450:gap-[25px] mq825:gap-[50px]">
          <CreateAccountContent />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
