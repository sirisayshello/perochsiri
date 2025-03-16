export const LocationInfo = () => {
  return (
    <div className="w-full gap-2 grid grid-cols-[40px,1fr,40px] md:grid-cols-[40px,1fr,1fr,40px] font-roboto uppercase text-sm mt-8 border-accent border-[1px] p-4 rounded-md">
      <img src="/arrowRight.svg" className="w-9" />
      <div className="col-start-2 flex justify-center">
        <div>
          <a href="https://www.gathenhielmska.se/" target="_blank" className="">
            Gathenhielmska Huset
          </a>
          <p>Stigbergstorget 7</p>
          <p>414 63 Göteborg</p>
        </div>
      </div>

      <div className="text-right row-start-2 col-start-2 md:row-start-1 md:col-start-3 flex justify-center">
        <div>
          <a href="https://www.efessos.se/" target="_blank" className="">
            Taverna Efessos
          </a>
          <p>Karl Johansgatan 60</p>
          <p>414 55 Göteborg</p>
        </div>
      </div>
      <img
        src="/arrowLeft.svg"
        className="w-9  col-start-3 row-start-2 md:row-start-1 md:col-start-4"
      />
    </div>
  );
};
