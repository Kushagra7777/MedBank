import AutomationColumns from "./automation-columns";
import ButtonContent from "./button-content";
import PropTypes from "prop-types";

const AutomationContent = ({ className = "" }) => {
  return (
    <section
      className={`w-[1276px] flex flex-col items-end justify-start gap-[100px] max-w-full text-left text-lg text-darkslategray-100 font-body-large mq450:gap-[25px] mq750:gap-[50px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[61px] pl-5 box-border max-w-full mq1050:pr-[30px] mq1050:box-border">
        <div className="w-[913px] flex flex-row flex-wrap items-start justify-start gap-[23px] max-w-full">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[289px] min-h-[336px]"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[289px] min-h-[336px]"
            loading="lazy"
            alt=""
            src="/tempimageakqi4c-1@2x.png"
          />
        </div>
      </div>
      <AutomationColumns
        automationOfProcesses="Automation of Processes"
        weHaveImplementedAutomati="We have implemented automation technologies for DNA and RNA extraction, purification, and library preparation, streamlining and standardizing these critical processes. By automating repetitive tasks, we ensure accuracy, reproducibility, and scalability, enabling us to deliver high-quality results efficiently."
        reducedRiskOfHumanErrorAn="Reduced risk of human error and variability."
        increasedThroughputAndFas="Increased throughput and faster turnaround times."
        consistentAndReliableResu="Consistent and reliable results across experiments."
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[75px] pl-5 box-border max-w-full mq1050:pr-[37px] mq1050:box-border">
        <div className="w-[913px] flex flex-row flex-wrap items-start justify-start gap-[23px] max-w-full">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[289px] min-h-[336px]"
            loading="lazy"
            alt=""
            src="/000000091142-2048x2048-1@2x.png"
          />
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[289px] min-h-[336px]"
            loading="lazy"
            alt=""
            src="/-tecan-magicprep-ngs-hero-image-1@2x.png"
          />
        </div>
      </div>
      <AutomationColumns
        automationOfProcesses="State-of-the-Art NGS Platform"
        weHaveImplementedAutomati="Medbank utilizes the latest Next Generation Sequencing (NGS) platforms, including the AVITI system from Element Biosciences. This advanced platform offers high precision, rapid sequencing, and cost-effectiveness, allowing us to deliver accurate and timely results to our clients."
        reducedRiskOfHumanErrorAn="High-quality sequencing data with improved accuracy and coverage."
        increasedThroughputAndFas="Reduced sequencing costs and shorter project timelines."
        consistentAndReliableResu="Access to cutting-edge technologies for innovative research applications."
        propWidth="1205px"
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[75px] pl-5 box-border max-w-full mq1050:pr-[37px] mq1050:box-border">
        <div className="w-[913px] flex flex-row flex-wrap items-start justify-start gap-[23px] max-w-full">
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[289px] min-h-[336px]"
            loading="lazy"
            alt=""
            src="/aviti-pressrelease031222v4-1@2x.png"
          />
          <img
            className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[289px] min-h-[336px]"
            loading="lazy"
            alt=""
            src="/lowresmiseqwithscientist-1@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
        <img
          className="self-stretch relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/screenshot-20240513-at-723-5@2x.png"
        />
        <footer className="self-stretch flex flex-row items-start justify-start gap-[23px] max-w-full text-left text-lg text-darkslategray-100 font-body-large mq1050:flex-wrap">
          <ButtonContent />
          <div className="flex-1 rounded-3xs bg-white box-border overflow-hidden flex flex-row items-start justify-between pt-[71px] pb-[61px] pr-[183px] pl-[193px] min-w-[369px] max-w-full gap-[20px] border-[1px] border-solid border-gradient mq450:pl-5 mq450:pr-5 mq450:box-border mq450:min-w-full mq1050:flex-wrap mq1050:justify-center mq1050:pl-24 mq1050:pr-[91px] mq1050:box-border">
            <div className="w-[189px] flex flex-col items-start justify-start gap-[14px] min-w-[189px] mq1050:flex-1">
              <div className="w-[100px] relative leading-[19.2px] font-medium flex items-center">
                About Us
              </div>
              <div className="w-[100px] relative leading-[19.2px] font-medium flex items-center">
                Strength
              </div>
              <div className="w-[100px] relative leading-[19.2px] font-medium flex items-center">
                Service
              </div>
              <div className="relative leading-[19.2px] font-medium inline-block min-w-[100px]">
                Order FLow
              </div>
              <div className="self-stretch relative leading-[19.2px] font-medium">
                Sample Shipping
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[14px] min-w-[180px] mq1050:flex-1">
              <a className="[text-decoration:none] relative leading-[19.2px] font-medium text-[inherit] inline-block min-w-[126px]">
                Privacy Policy
              </a>
              <div className="relative leading-[19.2px] font-medium">
                Personal Information
              </div>
              <div className="relative leading-[19.2px] font-medium">
                Cancellation Policy
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div className="relative leading-[20px] font-medium inline-block min-w-[88px]">
                  Site Policy
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

AutomationContent.propTypes = {
  className: PropTypes.string,
};

export default AutomationContent;
