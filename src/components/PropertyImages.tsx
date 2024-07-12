export const PropertyImages = () => {
  return (
    <section>
      <div className="w-[820px] m-auto flex flex-col ">
        <p className="font-inter text-lg text-login-label mb-6">
          Add Photos / videos to attract more tenants!{" "}
        </p>
        <p className="font-medium text-sm text-login-label mb-3 font-inter">
          Add Photos of living room, bedroom, bathroom, floor, doors, kitchen,
          balcony, location map, neighborhood, etc
        </p>
        <div className="h-[309px] flex items-center justify-center cursor-pointer border rounded-s">
          <div className=" font-inter w-44">
            <div className="mb-[10px]">
              <img
                src="/assets/icons/add-photo.png"
                alt="add-photos"
                className="m-auto"
              />
            </div>
            <p className="bg-md-blue text-white rounded-lg p-2 font-medium flex items-center">
              <span className="mr-2 text-2xl">+</span> Add Photos Now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
