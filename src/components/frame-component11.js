// import FrameComponent12 from "./frame-component12";
// import PropTypes from "prop-types";

// const FrameComponent11 = ({ className = "" }) => {
//   return (
//     <header
//       className={`self-stretch bg-white box-border flex flex-row items-start justify-between pt-8 pb-[31px] pr-[31px] pl-8 top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-lg text-darkslategray-100 font-body-large border-b-[0.5px] border-solid border-gradient ${className}`}
//     >
//       <div className="w-[878px] flex flex-row items-center justify-start py-0 pr-[62px] pl-0 box-border gap-[36px] max-w-full lg:w-44 lg:pr-[31px] lg:box-border mq450:gap-[18px]">
//         <img
//           className="h-[82px] w-[78px] relative object-cover"
//           loading="lazy"
//           alt=""
//           src="/clip-path-group@2x.png"
//         />
//         <div className="flex-1 flex flex-row items-end justify-between py-5 pr-2.5 pl-0 box-border max-w-full gap-[20px] lg:hidden">
//           <div className="flex flex-row items-end justify-start border-b-[2px] border-solid border-gradient">
//             <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] flex items-center min-w-[52px] whitespace-nowrap">{`Home `}</a>
//           </div>
//           <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[82px] whitespace-nowrap">
//             About Us
//           </a>
//           <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[75px]">
//             Services
//           </a>
//           <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center whitespace-nowrap">
//             Sample Shipping
//           </a>
//           <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[76px]">
//             Strength
//           </a>
//           <a className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[72px]">
//             Contact
//           </a>
//         </div>
//       </div>
//       <FrameComponent12 />
//     </header>
//   );
// };

// FrameComponent11.propTypes = {
//   className: PropTypes.string,
// };

// export default FrameComponent11;



import FrameComponent12 from "./frame-component12";
import PropTypes from "prop-types";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-white box-border flex flex-row items-start justify-between pt-8 pb-[31px] pr-[31px] pl-8 top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-lg text-darkslategray-100 font-body-large border-b-[0.5px] border-solid border-gradient ${className}`}
    >
      <div className="w-[878px] flex flex-row items-center justify-start py-0 pr-[62px] pl-0 box-border gap-[36px] max-w-full lg:w-44 lg:pr-[31px] lg:box-border mq450:gap-[18px]">
        <img
          className="h-[82px] w-[78px] relative object-cover"
          loading="lazy"
          alt=""
          src="/clip-path-group@2x.png"
        />
        <div className="flex-1 flex flex-row items-end justify-between py-5 pr-2.5 pl-0 box-border max-w-full gap-[20px] lg:hidden">
          <div className="flex flex-row items-end justify-start border-b-[2px] border-solid border-gradient">
            <a href="/" className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] flex items-center min-w-[52px] whitespace-nowrap cursor-pointer">{`Home `}</a>
          </div>
          <a href="/about-us" className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[82px] whitespace-nowrap cursor-pointer">
            About Us
          </a>
          <a href="/services" className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[75px] cursor-pointer">
            Services
          </a>
          <a href="/sample-shipping" className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center whitespace-nowrap cursor-pointer">
            Sample Shipping
          </a>
          <a href="/strength" className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[76px] cursor-pointer">
            Strength
          </a>
          <a href="/contact" className="[text-decoration:none] h-[31px] relative tracking-[0.5px] leading-[24px] text-[inherit] flex items-center min-w-[72px] cursor-pointer">
            Contact
          </a>
        </div>
      </div>
      <FrameComponent12 />
    </header>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
