import PropTypes from "prop-types";

const FrameComponent14 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[18px] box-border max-w-full text-center text-81xl text-[transparent] font-inter ${className}`}
    >
      <div className="w-[1056px] flex flex-col items-end justify-start gap-[32px] max-w-full mq750:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-13xl text-darkslategray-100 font-body-large">
          <h2 className="m-0 relative text-inherit leading-[24px] font-bold font-inherit mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[19px]">
            Our Machines
          </h2>
          <div className="self-stretch relative text-5xl leading-[34px] mq450:text-lgi mq450:leading-[27px]">
            Medbank utilizes state-of-the-art machines and equipment for genetic
            analysis testing, ensuring accurate and reliable results.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border gap-[12px] max-w-full">
          <div className="w-[43px] flex flex-row items-start justify-start relative">
            <div className="flex-1 relative tracking-[0.1em] leading-[90px] font-black [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] mq450:text-11xl mq450:leading-[36px] mq1050:text-31xl mq1050:leading-[54px]">
              1
            </div>
            <h3 className="!m-[0] absolute top-[31px] right-[-45px] text-9xl leading-[24px] font-medium font-body-large text-darkslategray-100 text-left inline-block min-w-[66px] z-[1] mq450:text-3xl mq450:leading-[19px]">
              AVITI
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-5xl text-darkslategray-100 font-body-large">
            <div className="h-[237px] w-[996px] relative leading-[34px] flex items-center shrink-0 max-w-full mq450:text-lgi mq450:leading-[27px]">
              <span className="w-full">
                <p className="m-0">{`We have introduced a new next-generation sequencer 'AVITI' from Element Biosciences, which is capable of developing highly accurate and efficient analyses. AVITI' employs rolling circle amplification (RCA) to minimize amplification errors, and the use of the latest reagents enables high quality (Q50) sequence decoding. `}</p>
                <p className="m-0">
                  In addition, 'AVITI' has better running costs than
                  conventional products, enabling lower costs and shorter
                  delivery times.
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[1030px] flex flex-row items-start justify-end pt-0 px-3 pb-[18px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[60px] max-w-full mq1050:gap-[30px]">
            <div className="w-[355px] flex flex-row items-start justify-start relative max-w-full">
              <div className="w-[75.3px] absolute !m-[0] bottom-[-27px] left-[-38px] tracking-[0.1em] leading-[90px] font-black inline-block [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] mq450:text-11xl mq450:leading-[36px] mq1050:text-31xl mq1050:leading-[54px]">
                2
              </div>
              <h3 className="m-0 flex-1 relative text-9xl leading-[34px] font-bold font-body-large text-darkslategray-100 text-left inline-block max-w-full z-[1] mq450:text-3xl mq450:leading-[27px]">
                2 Illumina MiSeq
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full text-left text-5xl text-darkslategray-100 font-body-large">
              <div className="flex-1 relative leading-[34px] inline-block max-w-full mq450:text-lgi mq450:leading-[27px]">
                The Illumina MiSeq platform is employed for smaller-scale
                sequencing projects, providing accurate and reliable results
                with fast turnaround times.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1033px] flex flex-row items-start justify-end py-0 px-3 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px] max-w-full">
            <div className="w-[330px] flex flex-row items-start justify-start relative max-w-full">
              <div className="w-[78px] absolute !m-[0] bottom-[-30px] left-[-35px] tracking-[0.1em] leading-[90px] font-black inline-block [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] mq450:text-11xl mq450:leading-[36px] mq1050:text-31xl mq1050:leading-[54px]">
                3
              </div>
              <h3 className="m-0 flex-1 relative text-9xl leading-[34px] font-bold font-body-large text-darkslategray-100 text-left inline-block max-w-full z-[1] mq450:text-3xl mq450:leading-[27px]">
                Illumina NextSeq X Plus
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border max-w-full text-left text-5xl text-darkslategray-100 font-body-large">
              <div className="flex-1 relative leading-[34px] inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[27px]">
                <p className="m-0">{` Medbank also plans to begin Novaseq X plus analysis on an outsourced basis in 2025. `}</p>
                <p className="m-0">
                  This platform offers scalability, flexibility, and exceptional
                  data quality, making it suitable for a wide range of research
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent14;
