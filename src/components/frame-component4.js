// import TableHeader from "./table-header";
// import StepItems1 from "./step-items1";
// import StepItems from "./step-items";
// import StepsList from "./steps-list";
// import PropTypes from "prop-types";

// const FrameComponent4 = ({ className = "" }) => {
//   return (
//     <section
//       className={`w-[1346px] flex flex-row items-start justify-start pt-0 px-[63px] pb-[129px] box-border max-w-full text-center text-81xl text-[transparent] font-inter mq825:pb-[55px] mq825:box-border mq1425:pl-[31px] mq1425:pr-[31px] mq1425:pb-[84px] mq1425:box-border ${className}`}
//     >
//       <div className="flex-1 flex flex-col items-start justify-start gap-[34px] max-w-full mq825:gap-[17px]">
//         <div className="w-[766px] flex flex-row items-start justify-start max-w-full">
//           <h1 className="m-0 w-[766px] relative text-inherit tracking-[0.1em] leading-[90px] font-black font-inherit inline-block shrink-0 [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] max-w-full z-[1] mq450:text-11xl mq450:leading-[36px] mq825:text-31xl mq825:leading-[54px]">
//             ORDER FLOW
//           </h1>
//           <div className="w-[140px] flex flex-col items-start justify-start pt-[45px] px-0 pb-0 box-border ml-[-670px] text-left text-xl text-darkslategray-100 font-body-large">
//             <div className="self-stretch relative leading-[36px] mq450:text-base mq450:leading-[29px]">
//               Order Flow –
//             </div>
//           </div>
//         </div>
//         <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-xl text-darkslategray-100 font-body-large">
//           <div className="w-[1128px] flex flex-col items-end justify-start gap-[50.5px] max-w-full mq825:gap-[25px]">
//             <TableHeader
//               priceTable="Process"
//               exploreOurReferencePrices={`"At Medbank, we strive to make the process of ordering testing services as seamless and straightforward as possible. From initial inquiry to result delivery, our order flow is designed to ensure clarity, efficiency, and satisfaction at every step. Whether you're a seasoned researcher or new to genetic analysis, our team is here to guide you through the process and provide personalized support tailored to your specific project needs. Explore the following steps to learn more about how to place an order with Medbank and experience the benefits of our comprehensive genetic analysis services."`}
//               propFlex="unset"
//               propAlignSelf="stretch"
//             />
//             <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[11.5px] max-w-full">
//               <div className="flex-1 flex flex-col items-start justify-start gap-[85px] min-w-[359px] max-w-full mq450:gap-[21px] mq825:gap-[42px] mq825:min-w-full">
//                 <StepItems1 registration="Registration" />
//                 <StepItems createNewOrder="Create New Order" />
//                 <StepItems createNewOrder="Confirmation of Quotation" />
//                 <StepItems1 registration="Sending Samples" />
//                 <StepItems createNewOrder="Library Adjustment" />
//                 <StepItems createNewOrder="Sending of Original data and analysis specifications" />
                
//               </div>
//               <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
//                 <div className="w-px h-[860px] relative">
//                   <img
//                     className="absolute top-[250px] left-[0px] w-px h-[100px] object-contain"
//                     alt=""
//                     src="/line-25.svg"
//                   />
//                   <img
//                     className="absolute top-[456px] left-[0px] w-px h-[100px] object-contain"
//                     alt=""
//                     src="/line-25.svg"
//                   />
//                   <img
//                     className="absolute top-[608px] left-[0px] w-px h-[100px] object-contain"
//                     alt=""
//                     src="/line-25.svg"
//                   />
//                   <img
//                     className="absolute top-[760px] left-[0px] w-px h-[100px] object-contain"
//                     alt=""
//                     src="/line-25.svg"
//                   />
//                   <img
//                     className="absolute top-[0px] left-[0px] w-px h-[100px] object-contain"
//                     alt=""
//                     src="/line-25.svg"
//                   />
//                   <img
//                     className="absolute top-[152px] left-[0px] w-px h-[100px] object-contain"
//                     alt=""
//                     src="/line-25.svg"
//                   />
//                 </div>
//               </div>
//               <div className="flex-1 flex flex-col items-start justify-start gap-[85.2px] min-w-[359px] max-w-full mq450:gap-[21px] mq825:gap-[43px] mq825:min-w-full">
//                 <StepsList completeProfileOnMyPage="Complete Profile on My Page" />
//                 <StepsList
//                   completeProfileOnMyPage="Create Request Sheet"
//                   propAlignSelf="stretch"
//                   propWidth="unset"
//                 />
//                 <StepsList
//                   completeProfileOnMyPage="Place a Formal Order"
//                   propAlignSelf="stretch"
//                   propWidth="unset"
//                 />
//                 <StepsList
//                   completeProfileOnMyPage="Quality Check"
//                   propAlignSelf="stretch"
//                   propWidth="unset"
//                 />
//                 <StepsList
//                   completeProfileOnMyPage="Inspection and Analysis"
//                   propAlignSelf="stretch"
//                   propWidth="unset"
//                 />
//                 <StepsList
//                   completeProfileOnMyPage="Sending of Invoice"
//                   propAlignSelf="stretch"
//                   propWidth="unset"
//                 />
//               </div>
//             </div>
//             <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
//               <StepsList
//                 completeProfileOnMyPage="Sending of Receipt"
//                 propAlignSelf="unset"
//                 propWidth="552px"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// FrameComponent4.propTypes = {
//   className: PropTypes.string,
// };

// export default FrameComponent4;




import FrameComponent8 from "./frame-component8";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1346px] flex flex-row items-start justify-start pt-0 px-[62px] pb-[129px] box-border max-w-full text-center text-81xl text-[transparent] font-inter mq450:pb-[55px] mq450:box-border mq825:pb-[84px] mq825:box-border mq1425:pl-[31px] mq1425:pr-[31px] mq1425:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
        <div className="w-[913px] flex flex-row items-start justify-start max-w-full">
          <h1 className="m-0 w-[913px] relative text-inherit tracking-[0.1em] leading-[90px] font-black font-inherit inline-block shrink-0 [-webkit-text-stroke:1px_rgba(0,_62,_92,_0.35)] max-w-full z-[1] mq450:text-11xl mq450:leading-[36px] mq825:text-31xl mq825:leading-[54px]">
            ORDER FLOW
          </h1>
          <div className="flex flex-col items-start justify-start pt-[45px] px-0 pb-0 ml-[-817px] text-left text-xl text-darkslategray-100 font-body-large">
            <div className="relative leading-[36px] mq450:text-base mq450:leading-[29px]">
              Order Flow –
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-xl text-darkslategray-100 font-body-large">
          <div className="w-[1128px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-px text-17xl">
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <h2 className="m-0 relative text-inherit leading-[44px] uppercase font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-3xl mq450:leading-[26px] mq825:text-10xl mq825:leading-[35px]">
                  PROCESS
                </h2>
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <img
                    className="w-[30px] h-[30px] relative overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/octiconarrowup16-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-px pb-2 box-border max-w-full">
              <blockquote className="m-0 h-[101px] flex-1 relative leading-[34px] flex items-center max-w-full mq450:text-base mq450:leading-[27px]">
                "At Medbank, we strive to make the process of ordering testing services as seamless and straightforward as possible. From initial inquiry to result delivery, our order flow is designed to ensure clarity, efficiency, and satisfaction at every step. Whether you're a seasoned researcher or new to genetic analysis, our team is here to guide you through the process and provide personalized support tailored to your specific project needs. Explore the following steps to learn more about how to place an order with Medbank and experience the benefits of our comprehensive genetic analysis services"
              </blockquote>
            </div>
            <div className="self-stretch flex flex-row items-end justify-start pt-0 px-0 pb-[17px] box-border gap-[11px] max-w-full lg:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[41px] min-w-[367px] max-w-full mq825:gap-[20px] mq825:min-w-full">
                <div className="self-stretch flex flex-row items-end justify-start gap-[12px] max-w-full mq825:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[359px] max-w-full mq825:min-w-full">
                    
                  <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]" style={{ left: "250px" }}>
                       1. Registration
                  </div>

                      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-400" style={{ top: "-10px" }} />

                  </div>
                  <div className="h-[101px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                    <img
                      className="w-px flex-1 relative max-h-full object-contain"
                      loading="lazy"
                      alt=""
                      src="/line-25.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start gap-[12px] max-w-full mq825:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full mq825:min-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[54px] pl-[52px] mq825:pl-[26px] mq825:pr-[27px] mq825:box-border">
                      <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]" style={{ left: "180px" }}>
                        3. Create new order
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-400" style={{ top: "-8px" }}/>
                  </div>
                  <div className="h-[101px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                    <img
                      className="w-px flex-1 relative max-h-full object-contain"
                      loading="lazy"
                      alt=""
                      src="/line-25.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start gap-[12px] max-w-full mq825:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full mq825:min-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[54px] pl-[52px] mq825:pl-[26px] mq825:pr-[27px] mq825:box-border">
                      <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]" style={{ left: "140px" }}>
                      5. Confirmation of Quotation
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-400" style={{ top: "-8px" }}/>
                  </div>
                  <div className="h-[101px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                    <img
                      className="w-px flex-1 relative max-h-full object-contain"
                      loading="lazy"
                      alt=""
                      src="/line-25.svg"
                    />
                  </div>
                </div>

                <div className="self-stretch flex flex-row items-end justify-start gap-[12px] max-w-full mq825:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full mq825:min-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[54px] pl-[52px] mq825:pl-[26px] mq825:pr-[27px] mq825:box-border">
                      <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]"style={{ left: "170px" }}>
                      7. Sending Samples
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-400" style={{ top: "-6px" }}/>
                  </div>
                  <div className="h-[101px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                    <img
                      className="w-px flex-1 relative max-h-full object-contain"
                      loading="lazy"
                      alt=""
                      src="/line-25.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start gap-[12px] max-w-full mq825:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full mq825:min-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[54px] pl-[52px] mq825:pl-[26px] mq825:pr-[27px] mq825:box-border">
                      <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]" style={{ left: "170px" }}>
                      9. Library Adjustment
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-400" style={{ top: "-2px" }} />
                  </div>
                  <div className="h-[101px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                    <img
                      className="w-px flex-1 relative max-h-full object-contain"
                      loading="lazy"
                      alt=""
                      src="/line-25.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start gap-[12px] max-w-full mq825:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full mq825:min-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[54px] pl-[52px] mq825:pl-[26px] mq825:pr-[27px] mq825:box-border">
                      <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]" style={{ left: "70px" }}>
                      11. Sending of Original data and analysis specifications
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-400" />
                  </div>
                  <div className="h-[101px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                    <img
                      className="w-px flex-1 relative max-h-full object-contain"
                      loading="lazy"
                      alt=""
                      src="/line-25.svg"
                    />
                  </div>
                </div>



              </div>
              <div className="w-[552px] flex flex-col items-start justify-start gap-[76px] min-w-[552px] max-w-full lg:flex-1 mq450:gap-[19px] mq825:gap-[38px] mq825:min-w-full">
                <FrameComponent8 specializedEnvironmentFor="2. Complete Profile on my page" />
                
                <FrameComponent8 specializedEnvironmentFor="4. Create Request Sheet" />
                <FrameComponent8 specializedEnvironmentFor="6. Place a Formal Order" />
                <FrameComponent8 specializedEnvironmentFor="8. Quality Check" />
                <FrameComponent8 specializedEnvironmentFor="10. Inspection and Analysis" />
                <FrameComponent8 specializedEnvironmentFor="12. Sending of Invoice" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[552px] flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[23px] pl-5">
                  <div className="relative leading-[42px] mq450:text-base mq450:leading-[34px]">
                  13. Sending of Receipt
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-dimgray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
