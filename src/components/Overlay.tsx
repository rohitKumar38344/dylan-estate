import { useState } from "react";

export const Overlay = ({ goTo }) => {
  const [postConfirmation, setPostConfirmation] = useState(false);
  return (
    <>
      {!postConfirmation ? (
        <div className="flex justify-center items-center">
          <div className="w-[500px] h-[252px] rounded-2xl p-10 ">
            <p className="form-label mb-9 text-center">
              POST PROPERTY ON DYLAN ESTATE?
            </p>
            <button
              onClick={() => setPostConfirmation(true)}
              className="w-full rounded-[4px] mb-[10px] bg-md-blue py-3 px-8 font-bold text-center text-white font-merriweather-sans"
            >
              Continue
            </button>
            <p className="font-light text-xs font-merriweather-sans">
              By continuing you agree to our{" "}
              <span className="font-normal underline">
                Terms and Conditions & Privacy Policy
              </span>
            </p>
          </div>
        </div>
      ) : (
        <PostConfirmation />
      )}
    </>
  );
};

function PostConfirmation({ goTo }) {
  return (
    <div className="flex justify-center  h-screen">
      <div className="font-inter text-login-label w-[820px] mt-24">
        <div className="flex gap-5 mb-10 flex-col">
          <p className="text-2xl ">
            Thank you for listing your property with us,
          </p>
          <p className="text-lg">
            Your listing will be reviewed and will go live within 24 hours.
          </p>
          <p className="text-lg">
            We will now manage your listing and get in touch with you after
            finding the best suitable tenant as per your preference.
          </p>
        </div>
        <p className="font-jacques text-md-blue mb-16">-Dylan Estates</p>
        <div>
          <button
            className="py-3 px-8 rounded bg-md-blue text-login-label-bg mr-10"
            onClick={() => goTo(0)}
          >
            Edit Property Listing
          </button>
          <button className="py-3 px-8 rounded bg-md-blue text-login-label-bg">
            Preview Property Listing
          </button>
        </div>
      </div>
    </div>
  );
}
