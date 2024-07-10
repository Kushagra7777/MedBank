import { useMemo } from "react";
import PropTypes from "prop-types";

const TableHeader = ({
  className = "",
  priceTable,
  exploreOurReferencePrices,
  propFlex,
  propAlignSelf,
}) => {
  const tableHeaderStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-17xl text-darkslategray-100 font-body-large ${className}`}
      style={tableHeaderStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[6px]">
        <h2 className="m-0 relative text-inherit leading-[44px] uppercase font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-3xl mq450:leading-[26px] mq825:text-10xl mq825:leading-[35px]">
          {priceTable}
        </h2>
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <img
            className="w-[30px] h-[30px] relative overflow-hidden shrink-0 object-contain"
            alt=""
            src="/octiconarrowup16-1@2x.png"
          />
        </div>
      </div>
      <blockquote className="m-0 self-stretch h-[101px] relative text-xl leading-[34px] flex items-center shrink-0 mq450:text-base mq450:leading-[27px]">
        {exploreOurReferencePrices}
      </blockquote>
    </div>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string,
  priceTable: PropTypes.string,
  exploreOurReferencePrices: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default TableHeader;
