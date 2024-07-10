import ProcessHighlight from "./process-highlight";
import PropTypes from "prop-types";

const ContentContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-10 pr-5 pl-[29px] box-border max-w-full shrink-0 text-left text-9xl text-gray font-body-large ${className}`}
    >
      <div className="w-[1137px] flex flex-col items-end justify-start gap-[100px] max-w-full lg:gap-[50px] mq750:gap-[25px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[9px] pl-0 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border gap-[46px] max-w-full mq750:gap-[23px]">
            <div className="w-6 flex flex-col items-start justify-start gap-[18px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-medium font-inherit [transform:_rotate(-90deg)] mq450:text-3xl mq450:leading-[19px]">
                Our Strength
              </h3>
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
            <ProcessHighlight
              comprehensiveNextGenerati="Comprehensive Next Generation Sequencing Processes"
              atMedbankWeHaveTheCapabil="At Medbank, we have the capability to conduct all Next Generation Sequencing (NGS) processes from sample preparation to data analysis in our state-of-the-art laboratory facilities. Our team of specialized staff is equipped to handle every step of the NGS workflow, including DNA extraction, library preparation, sequencing, and bio-informatics analysis."
              streamlinedAndIntegratedN="Streamlined and integrated NGS workflow for efficiency and consistency."
              expertGuidanceAndSupportT="Expert guidance and support throughout the entire sequencing process."
              customizedSolutionsTailor="Customized solutions tailored to meet the specific needs of each research project."
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[70px] pl-5 box-border max-w-full mq1050:pr-[35px] mq1050:box-border">
          <div className="w-[913px] flex flex-row flex-wrap items-start justify-start gap-[23px] max-w-full">
            <img
              className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[289px] min-h-[336px]"
              loading="lazy"
              alt=""
              src="/miniaviticropped-1@2x.png"
            />
            <img
              className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[289px] min-h-[336px]"
              loading="lazy"
              alt=""
              src="/hiresmiseqright-1@2x.png"
            />
          </div>
        </div>
        <ProcessHighlight
          comprehensiveNextGenerati="Specialized Environment for DNA/RNA Analysis"
          atMedbankWeHaveTheCapabil="To ensure the integrity and reliability of our genetic analysis, Medbank maintains a specialized environment for DNA and RNA analysis. Our laboratory facilities are equipped with advanced technologies and adhere to strict quality control measures to minimize contamination and ensure the accuracy of our results."
          streamlinedAndIntegratedN="Clean and controlled laboratory environment for sensitive molecular analysis."
          expertGuidanceAndSupportT="Minimized risk of contamination and sample degradation."
          customizedSolutionsTailor="Consistent and reliable results for high-quality genetic analysis."
          propFlex="unset"
          propMinWidth="unset"
          propWidth="1057px"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-20 box-border max-w-full lg:pl-10 lg:pr-10 lg:box-border">
          <div className="w-[913px] flex flex-row flex-wrap items-start justify-start gap-[23px] max-w-full">
            <img
              className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[289px] min-h-[336px]"
              loading="lazy"
              alt=""
              src="/441556780-1134458801039300-2375109692303310627-n-1@2x.png"
            />
            <img
              className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover min-w-[289px] min-h-[336px]"
              loading="lazy"
              alt=""
              src="/436572283-474403864969014-8187399657730843912-n-1@2x.png"
            />
          </div>
        </div>
        <ProcessHighlight
          comprehensiveNextGenerati="Customer-Centric Approach to Analysis Results"
          atMedbankWeHaveTheCapabil="At Medbank, we prioritize the needs and preferences of our clients when delivering analysis results. We provide comprehensive support and guidance on data handling and analysis methods, ensuring that results are presented in an easy-to-understand format tailored to the specific requirements of each client"
          streamlinedAndIntegratedN="Personalized support and guidance throughout the analysis process."
          expertGuidanceAndSupportT="Clear and concise presentation of analysis results for enhanced understanding."
          customizedSolutionsTailor="Empowerment of clients with actionable insights for their research projects."
          propFlex="unset"
          propMinWidth="unset"
          propWidth="1057px"
        />
      </div>
    </div>
  );
};

ContentContainer.propTypes = {
  className: PropTypes.string,
};

export default ContentContainer;
