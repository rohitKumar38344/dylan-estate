type PropertyData = {
  propertyFor: string;
  propertyType: string;
  builtUpArea: number;
  carpetArea: number;
  propertyOnFloor: number;
  totalFloors: number;
  propertyFacing: string;
  propertyAge: string;
  bathRoomToilets: string;
  tenantPreference: string;
  availability: string;
  propertyDescription: string;
};

type PropertyDetailsProps = PropertyData & {
  updateFields: (fields: Partial<PropertyData>) => void;
};

export const PropertyDetails = ({
  propertyFor,
  propertyType,
  builtUpArea,
  carpetArea,
  propertyOnFloor,
  totalFloors,
  propertyFacing,
  propertyAge,
  bathRoomToilets,
  tenantPreference,
  availability,
  propertyDescription,
  updateFields,
}: PropertyDetailsProps) => {
  return (
    <div className="w-[820px] m-auto flex flex-col gap-[60px]">
      <fieldset>
        <legend className="form-label">Property For : </legend>
        <div className="flex gap-28 px-2">
          <div>
            <input
              type="radio"
              name="propertyFor"
              value="rent"
              checked={propertyFor === "rent"}
              id="rent"
              className="mr-6"
              onChange={(e) => updateFields({ propertyFor: e.target.value })}
              required
            />
            <label htmlFor="rent" className="text-login-label font-inter">
              Rent
            </label>
          </div>
          <div>
            <input
              className="mr-6"
              type="radio"
              name="propertyFor"
              value="sale"
              checked={propertyFor === "sale"}
              id="sale"
              onChange={(e) => updateFields({ propertyFor: e.target.value })}
              required
            />
            <label htmlFor="sale" className="text-login-label font-inter">
              Sale
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="form-label">Property Type : </legend>
        <div className="flex gap-28 px-2">
          <div>
            <input
              type="radio"
              name="propertyType"
              value="residential"
              id="residential"
              checked={propertyType === "residential"}
              className="mr-6"
              onChange={(e) => updateFields({ propertyType: e.target.value })}
              required
            />
            <label
              htmlFor="residential"
              className="text-login-label font-inter"
            >
              Residential
            </label>
          </div>
          <div>
            <input
              className="mr-6"
              type="radio"
              name="propertyType"
              value="commercial"
              id="commercial"
              checked={propertyType === "commercial"}
              onChange={(e) => updateFields({ propertyType: e.target.value })}
              required
            />
            <label htmlFor="commercial" className="text-login-label font-inter">
              Commercial
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="propertyType"
              value="land-plot"
              id="land-plot"
              className="mr-6"
              checked={propertyType === "land-plot"}
              onChange={(e) => updateFields({ propertyType: e.target.value })}
              required
            />
            <label htmlFor="land-plot" className="text-login-label font-inter">
              Land / Plot
            </label>
          </div>
        </div>
      </fieldset>

      <div className="flex gap-8">
        <div className="flex-1">
          <label htmlFor="builtUpArea" className="form-label">
            Built up Area
          </label>
          <br />
          <select
            name="builtUpArea"
            id="builtUpArea"
            className="p-2 w-full font-inter text-sm rounded-sm focus:outline-none placeholder:text-p-d-c border border-login-border"
            value={builtUpArea}
            onChange={(e) => updateFields({ builtUpArea: +e.target.value })}
            required
          >
            <option value="0">0 Sq.Ft.</option>
            <option value="500">500 Sq.Ft.</option>
            <option value="700">700 Sq.Ft.</option>
            <option value="1200">1200 Sq.Ft.</option>
            <option value="2000">2000 Sq.Ft.</option>
            <option value="2400">2400 Sq.Ft.</option>
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="carpetArea" className="form-label">
            Carpet Area
          </label>
          <br />
          <select
            name="carpetArea"
            id="carpetArea"
            value={carpetArea}
            className="p-2 w-full font-inter text-sm rounded-sm focus:outline-none placeholder:text-p-d-c border border-login-border"
            onChange={(e) => updateFields({ carpetArea: +e.target.value })}
            required
          >
            <option value="0">0 Sq.Ft.</option>
            <option value="500">500 Sq.Ft.</option>
            <option value="700">700 Sq.Ft.</option>
            <option value="1200">1200 Sq.Ft.</option>
            <option value="2000">2000 Sq.Ft.</option>
            <option value="2400">2400 Sq.Ft.</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[380px] flex gap-10">
          <div className="w-[170px]">
            <label htmlFor="propertyOnFloor" className="form-label">
              Property on Floor
            </label>
            <input
              type="number"
              name="propertyOnFloor"
              id="propertyOnFloor"
              value={propertyOnFloor}
              placeholder="Floor"
              className="p-2 font-inter text-sm rounded-sm focus:outline-none placeholder:text-p-d-c border border-login-border"
              onChange={(e) =>
                updateFields({ propertyOnFloor: +e.target.value })
              }
              required
            />
          </div>
          <div className="w-[170px]">
            <label htmlFor="totalFloors" className="form-label">
              Total Floors
            </label>
            <input
              type="number"
              name="totalFloors"
              id="totalFloors"
              placeholder="Total Floor"
              value={totalFloors}
              className="p-2 font-inter text-sm rounded-sm focus:outline-none placeholder:text-p-d-c border border-login-border"
              onChange={(e) => updateFields({ totalFloors: +e.target.value })}
              required
            />
          </div>
        </div>
        <div className="w-[380px]">
          <label htmlFor="propertyFacing" className="form-label">
            Property Facing
          </label>
          <select
            name="propertyFacing"
            id="propertyFacing"
            className="p-2 font-inter w-full text-sm rounded-sm focus:outline-none placeholder:text-p-d-c border border-login-border"
            value={propertyFacing}
            onChange={(e) => updateFields({ propertyFacing: e.target.value })}
            required
          >
            <option value="select">select</option>
            <option value="east">East</option>
            <option value="west">West</option>
            <option value="north">North</option>
            <option value="south">South</option>
          </select>
        </div>
      </div>
      <div>
        <p className="form-label">Property Age</p>
        <div className="flex gap-[10px]">
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="propertyAge"
              value="less-than-1"
              checked={propertyAge === "less-than-1"}
              onChange={(e) => updateFields({ propertyAge: e.target.value })}
              required
            />
            <span className="radio-btn">Less than 1 year</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="propertyAge"
              value="less-than-3"
              checked={propertyAge === "less-than-3"}
              onChange={(e) => updateFields({ propertyAge: e.target.value })}
              required
            />
            <span className="radio-btn">1-3 Years</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="propertyAge"
              value="less-than-5"
              checked={propertyAge === "less-than-5"}
              onChange={(e) => updateFields({ propertyAge: e.target.value })}
              required
            />
            <span className="radio-btn">3-5 Years</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="propertyAge"
              value="less-than-10"
              checked={propertyAge === "less-than-10"}
              onChange={(e) => updateFields({ propertyAge: e.target.value })}
              required
            />
            <span className="radio-btn">5-10 Years</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="propertyAge"
              value="greater-than-10"
              checked={propertyAge === "greater-than-10"}
              onChange={(e) => updateFields({ propertyAge: e.target.value })}
              required
            />
            <span className="radio-btn">Greater than 10 Years</span>
          </label>
        </div>
      </div>

      <fieldset>
        <label className="form-label">Bathroom/Toilets</label>
        <div className="flex gap-[10px]">
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="bathroomToiltes"
              value="1"
              checked={bathRoomToilets === "1"}
              onChange={(e) =>
                updateFields({ bathRoomToilets: e.target.value })
              }
              required
            />
            <span className="radio-btn">1</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="bathroomToiltes"
              value="2"
              checked={bathRoomToilets === "2"}
              onChange={(e) =>
                updateFields({ bathRoomToilets: e.target.value })
              }
              required
            />
            <span className="radio-btn">2</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="bathroomToiltes"
              value="3"
              checked={bathRoomToilets === "3"}
              onChange={(e) =>
                updateFields({ bathRoomToilets: e.target.value })
              }
              required
            />
            <span className="radio-btn">3</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="bathroomToiltes"
              value="4"
              checked={bathRoomToilets === "4"}
              onChange={(e) =>
                updateFields({ bathRoomToilets: e.target.value })
              }
              required
            />
            <span className="radio-btn">4</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="bathroomToiltes"
              value="5"
              checked={bathRoomToilets === "5"}
              onChange={(e) =>
                updateFields({ bathRoomToilets: e.target.value })
              }
              required
            />
            <span className="radio-btn">5</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="bathroomToiltes"
              value="6+"
              checked={bathRoomToilets === "6+"}
              onChange={(e) =>
                updateFields({ bathRoomToilets: e.target.value })
              }
              required
            />
            <span className="radio-btn">6+</span>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend className="form-label">Tenant Preference</legend>
        <div className="flex gap-[10px]">
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="tenantPreference"
              value="any"
              checked={tenantPreference === "any"}
              onChange={(e) =>
                updateFields({ tenantPreference: e.target.value })
              }
              required
            />
            <span className="radio-btn">Any</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="tenantPreference"
              value="family"
              checked={tenantPreference === "family"}
              onChange={(e) =>
                updateFields({ tenantPreference: e.target.value })
              }
              required
            />
            <span className="radio-btn">Family</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="tenantPreference"
              value="bachelor-men"
              checked={tenantPreference === "bachelor-men"}
              onChange={(e) =>
                updateFields({ tenantPreference: e.target.value })
              }
              required
            />
            <span className="radio-btn">Bachelor (Man)</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="tenantPreference"
              value="bachelor-women"
              checked={tenantPreference === "bachelor-women"}
              onChange={(e) =>
                updateFields({ tenantPreference: e.target.value })
              }
              required
            />
            <span className="radio-btn">Bachelor (Women)</span>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend className="form-label">Availability</legend>
        <div className="flex gap-[10px]">
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="availability"
              value="0"
              checked={availability === "0"}
              onChange={(e) => updateFields({ availability: e.target.value })}
              required
            />
            <span className="radio-btn">Immediate</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="availability"
              value="1-to-15"
              checked={availability === "1-to-15"}
              onChange={(e) => updateFields({ availability: e.target.value })}
              required
            />
            <span className="radio-btn">with in 15 days</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="availability"
              value="1-to-30"
              checked={availability === "1-to-30"}
              onChange={(e) => updateFields({ availability: e.target.value })}
              required
            />
            <span className="radio-btn">with in 1 month</span>
          </label>
          <label className="radio-btn-ctn property-details-radio">
            <input
              type="radio"
              name="availability"
              value="1-to-60"
              checked={availability === "1-to-60"}
              onChange={(e) => updateFields({ availability: e.target.value })}
              required
            />
            <span className="radio-btn">with in 2 month</span>
          </label>
        </div>
      </fieldset>

      <div>
        <label htmlFor="propertyDescription" className="form-label">
          Property Description
        </label>
        <textarea
          name="propertyDescription"
          id="property-description"
          className="p-2 font-inter text-sm w-full h-24 rounded-sm focus:outline-none border border-login-border"
          placeholder="Add a description for your property to attract the best tenant"
          value={propertyDescription}
          onChange={(e) =>
            updateFields({ propertyDescription: e.target.value })
          }
          required
        ></textarea>
      </div>
    </div>
  );
};
