import { FormEvent, useState } from "react";
import { useMultistepForm } from "../hooks/useMultistepForm";
import { PropertyDetails } from "./PropertyDetails";
import { LocationDetails } from "./LocationDetails";
import { Features } from "./Features";
import { PriceDetails } from "./PriceDetails";
import { PropertyImages } from "./PropertyImages";
import { Overlay } from "./Overlay";

enum TABS {
  "property-details",
  "location-details",
  "features-amenities",
  "price-details",
  "property-images",
}

type FormData = {
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
  buildingSociety: string;
  localityArea: string;
  landmarkStreet: string;
  city: string;
  // Feature & amenities fields
  nonVeg: string;
  petsAllowed: string;
  electricity: string;
  waterSupply: string;
  security: string;
  camera: string;
  lift: string;
  parking: string;
  // Price Details Fields
  rent: number;
  securityAmount: number;
  maintenance: string;
  maintenanceMode: string;
  maintenanceAmount: number;
  pricingDetails: string;
};

const INITIAL_DATA: FormData = {
  propertyFor: "",
  propertyType: "",
  builtUpArea: 0,
  carpetArea: 0,
  propertyOnFloor: 0,
  totalFloors: 0,
  propertyFacing: "",
  propertyAge: "",
  bathRoomToilets: "",
  tenantPreference: "",
  availability: "",
  propertyDescription: "",
  buildingSociety: "",
  localityArea: "",
  landmarkStreet: "",
  city: "",
  nonVeg: "",
  petsAllowed: "",
  electricity: "",
  waterSupply: "",
  security: "",
  camera: "",
  lift: "",
  parking: "",
  rent: 0,
  securityAmount: 0,
  maintenance: "",
  maintenanceMode: "",
  maintenanceAmount: 0,
  pricingDetails: "",
};
export const MasterForm = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const {
    isFirstStep,
    isLastStep,
    step,
    steps,
    currentStepIndex,
    back,
    next,
    goTo,
  } = useMultistepForm([
    <PropertyDetails {...data} updateFields={updateFields} />,
    <LocationDetails {...data} updateFields={updateFields} />,
    <Features {...data} updateFields={updateFields} />,
    <PriceDetails {...data} updateFields={updateFields} />,
    <PropertyImages {...data} updateFields={updateFields} />,
    <>Test</>,
  ]);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) next();
    console.log(data);
    // alert("Successful Account Creation");
  }
  return (
    <>
      {currentStepIndex <= 4 ? (
        <section className="rounded-2xl m-auto mt-14 shadow-location-shadow max-w-[976px] h-[552px] overflow-y-scroll relative">
          <header className="flex  bg-[#FCF8F4] grid-cols-5 font-merriweather-sans text-center sticky top-0">
            <p
              className={`px-16 py-4 text-sm ${
                currentStepIndex === TABS["property-details"]
                  ? "shadow-location-tab-shadow bg-selected-tab-bg"
                  : ""
              }`}
            >
              PROPERTY DETAILS
            </p>
            <p
              className={`px-7 py-4 text-sm ${
                currentStepIndex === TABS["location-details"]
                  ? "shadow-location-tab-shadow bg-selected-tab-bg"
                  : ""
              }`}
            >
              LOCATION DETAILS
            </p>
            <p
              className={`px-7 py-4 text-sm ${
                currentStepIndex === TABS["features-amenities"]
                  ? "shadow-location-tab-shadow bg-selected-tab-bg"
                  : ""
              }`}
            >
              FEATURES & AMENITIES
            </p>
            <p
              className={`px-7 py-4 text-sm ${
                currentStepIndex === TABS["price-details"]
                  ? "shadow-location-tab-shadow bg-selected-tab-bg"
                  : ""
              }`}
            >
              PRICE DETAILS
            </p>
            <p
              className={`px-7 py-4 text-sm ${
                currentStepIndex === TABS["property-images"]
                  ? "shadow-location-tab-shadow bg-selected-tab-bg"
                  : ""
              }`}
            >
              PROPERTY IMAGES
            </p>
          </header>
          <div className="h-2 bg-[#D6D6D6] mb-5"></div>
          <form onSubmit={onSubmit}>
            {step}

            <div className="bg-login-label-bg  w-full py-[10px] px-8 flex justify-between items-center sticky bottom-0 font-merriweather-sans">
              <p className="text-xs text-green-900 font-medium font-inter">
                Need Help?{" "}
                <span className="text-login-label font-medium">
                  Call 9999999999
                </span>
              </p>
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={back}
                  className="bg-[#122B49] rounded-lg py-[10px] px-8 text-white"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="bg-[#122B49] border border-p-d-c rounded-lg py-[10px] px-8 text-white"
              >
                {isLastStep ? "SAVE & POST" : "NEXT"}
              </button>
            </div>
          </form>
        </section>
      ) : (
        <Overlay goTo={goTo} />
      )}
    </>
  );
};
