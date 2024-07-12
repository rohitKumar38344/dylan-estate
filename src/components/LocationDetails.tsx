type LocationData = {
  buildingSociety: string;
  localityArea: string;
  landmarkStreet: string;
  city: string;
};

type LocationDataPops = LocationData & {
  updateFields: (fields: Partial<LocationData>) => void;
};
export const LocationDetails = ({
  buildingSociety,
  localityArea,
  landmarkStreet,
  city,
  updateFields,
}: LocationDataPops) => {
  return (
    <div className="w-[820px] m-auto flex-col flex gap-[60px]">
      <div className="flex gap-28">
        <div className="flex-1">
          <label htmlFor="buildingSociety" className="form-label">
            Building/Society Name
          </label>
          <br />
          <input
            name="buildingSociety"
            id="buildingSociety"
            className="p-2 w-full font-inter rounded-sm focus:outline-none placeholder:text-light-gray border border-login-border text-md-blue"
            type="text"
            placeholder="Enter Apartment Name"
            value={buildingSociety}
            onChange={(e) => updateFields({ buildingSociety: e.target.value })}
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="localityArea" className="form-label">
            Locality/Area
          </label>
          <br />
          <input
            type="text"
            name="localityArea"
            id="localityArea"
            value={localityArea}
            className="p-2 w-full font-inter rounded-sm focus:outline-none placeholder:text-light-gray border border-login-border text-md-blue"
            onChange={(e) => updateFields({ localityArea: e.target.value })}
            placeholder="Eg : sheetal nagar"
            required
          />
        </div>
      </div>
      <div className="flex gap-28">
        <div className="flex-1">
          <label htmlFor="landmarkStreet" className="form-label">
            Landmark/Street Name
          </label>
          <br />
          <input
            name="landmarkStreet"
            id="landmarkStreet"
            className="p-2 w-full font-inter rounded-sm focus:outline-none placeholder:text-light-gray border border-login-border text-md-blue"
            type="text"
            placeholder="Prominent Landmark"
            value={landmarkStreet}
            onChange={(e) => updateFields({ landmarkStreet: e.target.value })}
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <br />
          <select
            name="city"
            id="city"
            className="p-2 w-full font-inter text-sm rounded-sm focus:outline-none placeholder:text-p-d-c border border-login-border"
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
            required
          >
            <option value="Mumbai, Maharashtra">Mumbai, Maharashtra</option>
            <option value="Lucknow, Uttar Pradesh">
              Lucknow, Uttar Pradesh
            </option>
          </select>
        </div>
      </div>

      <div id="map" className="h-[442px]">
        Mark location on map
      </div>
    </div>
  );
};
