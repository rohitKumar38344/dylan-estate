type PriceData = {
  rent: number;
  securityAmount: number;
  maintenance: string;
  maintenanceMode: string;
  maintenanceAmount: number;
  pricingDetails: string;
};

type PriceDetailsProps = PriceData & {
  updateFields: (fields: Partial<PriceData>) => void;
};

export const PriceDetails = ({
  rent,
  securityAmount,
  maintenance,
  maintenanceMode,
  maintenanceAmount,
  pricingDetails,
  updateFields,
}: PriceDetailsProps) => {
  return (
    <div className="w-[820px] m-auto flex flex-col gap-[60px] h-[400px]">
      {" "}
      <div className="flex gap-28">
        <div className="flex-1">
          <label htmlFor="rent" className="form-label">
            Rent
          </label>
          <br />
          <div className="flex p-2 w-full font-inter rounded-sm  border border-login-border">
            <p className={`${rent ? "text-md-blue" : "text-light-gray"} w-fit`}>
              ₹
            </p>
            <input
              name="rent"
              id="rent"
              className={`border-0 w-2/3 focus:outline-none flex-1 pl-2 ${
                rent ? "text-md-blue" : "text-light-gray"
              }`}
              type="number"
              value={rent}
              onChange={(e) => updateFields({ rent: +e.target.value })}
              required
            />
            <p className={rent ? "text-md-blue" : "text-light-gray w-fit"}>
              / Month
            </p>
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="securityAmount" className="form-label">
            Security
          </label>
          <br />
          <div className="flex p-2 w-full font-inter rounded-sm focus:outline-none border border-login-border">
            <p
              className={`${
                securityAmount ? "text-md-blue" : "text-light-gray"
              } w-fit`}
            >
              ₹
            </p>
            <input
              name="securityAmount"
              id="securityAmount"
              className={`border-0 w-2/3 outline-none flex-1 pl-2 ${
                securityAmount ? "text-md-blue" : "text-light-gray"
              }`}
              type="number"
              value={securityAmount}
              onChange={(e) =>
                updateFields({ securityAmount: +e.target.value })
              }
              required
            />
            <p
              className={
                securityAmount ? "text-md-blue" : "text-light-gray w-fit"
              }
            >
              / Month
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-28">
        <div className="flex-1">
          <label htmlFor="maintenance" className="form-label">
            Maintenance
          </label>
          <br />
          <select
            name="maintenance"
            onChange={(e) => updateFields({ maintenance: e.target.value })}
            value={maintenance}
            className="flex p-2 w-full font-inter rounded-sm focus:outline-none border border-login-border"
            required
          >
            <option value="maintenance">Maintenace</option>
            <option value="included">Included in Rent</option>
            <option value="extra">Extra Maintenace</option>
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="maintenanceAmount" className="form-label">
            Maintenance
          </label>
          <br />
          <div className="flex gap-2">
            <div className="flex p-2 font-inter rounded-sm border border-login-border">
              <p
                className={`${
                  maintenanceAmount ? "text-md-blue" : "text-light-gray"
                } w-fit`}
              >
                ₹
              </p>
              <input
                type="number"
                name="maintenanceAmount"
                value={maintenanceAmount}
                placeholder="Maintenance"
                className={`flex-1 pl-2 focus:outline-none ${
                  maintenanceAmount ? "text-md-blue" : "text-light-gray"
                }`}
                onChange={(e) =>
                  updateFields({ maintenanceAmount: +e.target.value })
                }
                required
              />
            </div>
            <select
              name="maintenanceMode"
              value={maintenanceMode}
              className="flex p-2 font-inter rounded-sm focus:outline-none border border-login-border"
              onChange={(e) =>
                updateFields({ maintenanceMode: e.target.value })
              }
              required
            >
              <option value="monthly">Monthly</option>
              <option value="quaterly">Quaterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
      </div>
      {maintenance === "extra" && (
        <div>
          <label htmlFor="pricingDetails" className="form-label">
            Additional Pricing details to convey to agent?
          </label>
          <textarea
            name="pricingDetails"
            id="pricingDetails"
            className="p-2 font-inter text-sm w-full h-24 rounded-sm focus:outline-none border border-login-border"
            placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us."
            value={pricingDetails}
            onChange={(e) => updateFields({ pricingDetails: e.target.value })}
          ></textarea>
        </div>
      )}
    </div>
  );
};
