import { Link } from "react-router-dom";

export function PostConfirmation() {
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
          <Link
            to="../list-your-property"
            className="py-3 px-8 rounded bg-md-blue text-login-label-bg mr-10"
          >
            Edit Property Listing
          </Link>
          <button className="py-3 px-8 rounded bg-md-blue text-login-label-bg">
            Preview Property Listing
          </button>
        </div>
      </div>
    </div>
  );
}
