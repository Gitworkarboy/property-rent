import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./selectPage.css";

function SelectPage(props) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="w-full h-[100vh] flex p-[48px] gap-[48px]">
      <div className="w-full h-full overflow-y-auto overflow-x-clip">
        <Carousel
          showArrows={true}
          onChange={setSelected}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          <div>
            <img src="/assets/img (1).jpg" className="carousel-img" />
          </div>
          <div>
            <img src="/assets/img (2).jpg" className="carousel-img" />
          </div>
          <div>
            <img src="/assets/img (3).jpg" className="carousel-img" />
          </div>
          <div>
            <img src="/assets/img (4).jpg" className="carousel-img" />
          </div>
          <div>
            <img src="/assets/img (5).jpg" className="carousel-img" />
          </div>
          <div>
            <img src="/assets/img (6).jpg" className="carousel-img" />
          </div>
          <div>
            <img src="/assets/img (7).jpg" className="carousel-img" />
          </div>
          <div>
            <img src="/assets/img (8).jpg" className="carousel-img" />
          </div>
        </Carousel>
        <div className="text-center my-[48px]">
          <a
            className="text-[32px] underline hover:opacity-50 cursor-pointer"
            onClick={() => props.toNextPage()}
          >
            Are you interested?
          </a>
        </div>
      </div>
      <div className="w-[40%] min-w-[200px] max-w-[600px] h-full overflow-y-auto overflow-x-clip">
        <p className="text-[24px] my-[24px]">3 bd | 2 ba | 1,384 sqft</p>
        <p className="text-[28px] my-[24px]">$1400 rent</p>
        <p className="text-[24px] mt-[24px]">165 W Southwell</p>
        <p className="text-[24px] mb-[24px]">Street Ogden, UT 84404</p>
        <p className="text-[20px] my-[24px] italic">
          Note: This property is not currently for sale or for rent on Zillow.
          The description and property data below may've been provided by a
          third party, the homeowner or public records.
        </p>
        <p className="text-[20px] my-[48px]">
          This 3 bedroom, 2 bath home has 1,384 square feet of living space.
          Leases signed in this state may be subject to a 9.99 utility fee,
          local taxes and processing fees. Please contact an American Homes 4
          Rent Leasing Consultant for more information.
        </p>
      </div>
    </div>
  );
}

export default SelectPage;
