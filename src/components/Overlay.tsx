import { Link } from "react-router-dom";

export const Overlay = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[500px] h-[252px] rounded-2xl p-10 ">
        <p className="form-label mb-9 text-center">
          POST PROPERTY ON DYLAN ESTATE?
        </p>
        <Link
          to="../post-confirmation"
          className="block w-full rounded-[4px] mb-[10px] bg-md-blue py-3 px-8 font-bold text-center text-white font-merriweather-sans"
        >
          Continue
        </Link>
        <p className="text-center font-light text-xs font-merriweather-sans">
          By continuing you agree to our{" "}
          <span className="font-normal underline">
            Terms and Conditions & Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};
