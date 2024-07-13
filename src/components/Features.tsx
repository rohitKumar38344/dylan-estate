type Features = {
  nonVeg: string;
  petsAllowed: string;
  electricity: string;
  waterSupply: string;
  security: string;
  camera: string;
  lift: string;
  parking: string;
};

type FeaturesProps = Features & {
  updateFields: (fields: Partial<Features>) => void;
};

export const Features = ({
  nonVeg,
  petsAllowed,
  electricity,
  waterSupply,
  security,
  camera,
  lift,
  parking,
  updateFields,
}: FeaturesProps) => {
  return (
    <div className="w-[820px] m-auto flex flex-col gap-[60px]">
      <fieldset>
        <legend className="form-label">Non-Veg : </legend>
        <div className="flex gap-28 px-2">
          <div className="flex items-center">
            <input
              type="radio"
              name="nonVeg"
              value="allowed"
              checked={nonVeg === "allowed"}
              id="nonVeg"
              className="mr-6"
              onChange={(e) => updateFields({ nonVeg: e.target.value })}
              required
            />
            <label htmlFor="nonVeg" className="text-login-label font-inter">
              Allowed
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-6"
              type="radio"
              name="nonVeg"
              value="not-allowed"
              checked={nonVeg === "not-allowed"}
              id="veg"
              onChange={(e) => updateFields({ nonVeg: e.target.value })}
              required
            />
            <label htmlFor="veg" className="text-login-label font-inter">
              Not Allowed
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="form-label">Pets Allowed : </legend>
        <div className="flex gap-28 px-2">
          <div className="flex items-center">
            <input
              type="radio"
              name="petsAllowed"
              value="yes"
              id="petsAllowed"
              checked={petsAllowed === "yes"}
              className="mr-6"
              onChange={(e) => updateFields({ petsAllowed: e.target.value })}
              required
            />
            <label
              htmlFor="petsAllowed"
              className="text-login-label font-inter"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-6"
              type="radio"
              name="petsAllowed"
              value="no"
              id="petsNotAllowed"
              checked={petsAllowed === "no"}
              onChange={(e) => updateFields({ petsAllowed: e.target.value })}
              required
            />
            <label
              htmlFor="petsNotAllowed"
              className="text-login-label font-inter"
            >
              No
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="form-label">Electricity : </legend>
        <div className="flex gap-28 px-2">
          <div className="flex items-center">
            <input
              type="radio"
              name="electricity"
              value="rare-no-powercut"
              id="rare-no-powercut"
              checked={electricity === "rare-no-powercut"}
              className="mr-6"
              onChange={(e) => updateFields({ electricity: e.target.value })}
              required
            />
            <label
              htmlFor="rare-no-powercut"
              className="text-login-label font-inter"
            >
              Rare/No Powercut
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-6"
              type="radio"
              name="electricity"
              value="frequent"
              id="frequent"
              checked={electricity === "frequent"}
              onChange={(e) => updateFields({ electricity: e.target.value })}
              required
            />
            <label htmlFor="frequent" className="text-login-label font-inter">
              Frequent
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="form-label">Water Supply : </legend>
        <div className="flex gap-28 px-2">
          <div className="flex items-center">
            <input
              type="radio"
              name="waterSupply"
              value="municipal-corporation"
              id="municipal-corporation"
              checked={waterSupply === "municipal-corporation"}
              className="mr-6"
              onChange={(e) => updateFields({ waterSupply: e.target.value })}
              required
            />
            <label
              htmlFor="municipal-corporation"
              className="text-login-label font-inter"
            >
              Municipal Corporation (BMC)
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-6"
              type="radio"
              name="waterSupply"
              value="borewell"
              id="borewell"
              checked={waterSupply === "borewell"}
              onChange={(e) => updateFields({ waterSupply: e.target.value })}
              required
            />
            <label htmlFor="borewell" className="text-login-label font-inter">
              Borewell
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-6"
              type="radio"
              name="waterSupply"
              value="both"
              id="both"
              checked={waterSupply === "both"}
              onChange={(e) => updateFields({ waterSupply: e.target.value })}
              required
            />
            <label htmlFor="both" className="text-login-label font-inter">
              Both
            </label>
          </div>
        </div>
      </fieldset>
      <hr />
      <fieldset>
        <legend className="font-inter text-lg font-semibold mb-[60px]">
          SOCIETY AMENITIES
        </legend>

        <div className="grid grid-rows-[138px] grid-cols-4 gap-x-[60px]">
          <div className="flex flex-col gap-4 items-center justify-center">
            <label
              htmlFor="security"
              className="flex flex-col justify-center items-center gap-3"
            >
              <img src="/assets/icons/security.png" alt="security" />
              <p className="font-inter text-sm text-login-border text-center">
                24/7 security
              </p>
            </label>

            <input
              type="checkbox"
              name="security"
              value="security"
              checked={security === "security"}
              id="security"
              className="w-[26px] h-[26px] border-gray"
              onChange={(e) => updateFields({ security: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <label
              htmlFor="camera"
              className="flex flex-col justify-center items-center gap-3"
            >
              <img src="/assets/icons/camera.png" alt="camera" />
              <p className="font-inter text-sm text-login-border text-center">
                CCTV Camera
              </p>
            </label>

            <input
              type="checkbox"
              name="camera"
              value="camera"
              checked={camera === "camera"}
              id="camera"
              className="w-[26px] h-[26px] border-gray"
              onChange={(e) => updateFields({ camera: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <label
              htmlFor="lift"
              className="flex flex-col justify-center items-center gap-3"
            >
              <img src="/assets/icons/lift.png" alt="lift" />
              <p className="font-inter text-sm text-login-border text-center">
                Lift
              </p>
            </label>

            <input
              type="checkbox"
              name="lift"
              value="lift"
              checked={lift === "lift"}
              id="lift"
              className="w-[26px] h-[26px] border-gray"
              onChange={(e) => updateFields({ lift: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <label
              htmlFor="parking"
              className="flex flex-col justify-center items-center gap-3"
            >
              <img src="/assets/icons/parking.png" alt="parking" />
              <p className="font-inter text-sm text-login-border text-center">
                Reserved Parking
              </p>
            </label>

            <input
              type="checkbox"
              name="parking"
              value="parking"
              checked={parking === "parking"}
              id="parking"
              className="w-[26px] h-[26px] border-gray"
              onChange={(e) => updateFields({ parking: e.target.value })}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};
