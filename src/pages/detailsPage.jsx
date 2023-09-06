function DetailsPage() {
  return (
    <div className="w-full h-[100vh] flex p-[48px] gap-[48px]">
      <div className="w-[50%] h-full overflow-y-auto overflow-x-clip grid grid-cols-2">
        <div>
          <img src="/assets/img (1).jpg" className="p-[16px]" />
        </div>
        <div>
          <img src="/assets/img (2).jpg" className="p-[16px]" />
        </div>
        <div>
          <img src="/assets/img (3).jpg" className="p-[16px]" />
        </div>
        <div>
          <img src="/assets/img (4).jpg" className="p-[16px]" />
        </div>
        <div>
          <img src="/assets/img (5).jpg" className="p-[16px]" />
        </div>
        <div>
          <img src="/assets/img (6).jpg" className="p-[16px]" />
        </div>
        <div>
          <img src="/assets/img (7).jpg" className="p-[16px]" />
        </div>
        <div>
          <img src="/assets/img (8).jpg" className="p-[16px]" />
        </div>
      </div>
      <div className="w-[50%] h-full overflow-y-auto overflow-x-clip justify-center items-center grid">
        <div>
          <p className="text-[24px] my-[24px]">3 bd | 2 ba | 1,384 sqft</p>
          <p className="text-[24px] my-[24px]">
            165 W Southwell Street, Ogden, UT 84404
          </p>
          <div className="h-[64px]" />
          <p className="text-[24px] my-[24px]">Please Call Me!</p>
          <p className="text-[24px] my-[24px] hover:opacity-50">
            <a href="tel:+13852307098">+1 385 230 7098</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
