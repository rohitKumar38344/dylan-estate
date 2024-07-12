export const Dashboard = () => {
  return (
    <>
      <main className="bg-[#122B49] min-h-screen">
        <div className="text-white pt-6 max-w-3xl pl-28 mb-4">
          <h1 className="text-3xl mb-4">Sell or Rent your Property For Free</h1>
          <p className="font-light">
            Whether you’re ready to sell or looking for answers, we’ll guide you
            with data and expertise specific to your needs.
          </p>
        </div>
        <section className="flex justify-center">
          <div className="grid grid-cols-[368px_1fr] text-white min-w-[1048px] gap-24 ">
            <div className=" flex flex-col py-6 gap-6">
              <h2 className="text-xl ">
                Upload your property in 4 simple steps
              </h2>
              <ul className="text-sm flex flex-col gap-6 flex-grow ">
                <li className="flex items-center gap-1">
                  <img
                    src="/assets/icons/check-mark.png"
                    alt="check-mark"
                    className="w-7"
                  />
                  <p>
                    Add your properties{" "}
                    <span className="font-extrabold">Basic Details</span>
                  </p>
                </li>
                <li className="flex items-center gap-1">
                  <img
                    src="/assets/icons/check-mark.png"
                    alt="check-mark"
                    className="w-7"
                  />
                  <p>
                    Add property{" "}
                    <span className="font-extrabold">Location</span>
                  </p>
                </li>
                <li className="flex items-center gap-1">
                  <img
                    src="/assets/icons/check-mark.png"
                    alt="check-mark"
                    className="w-7"
                  />
                  <p>
                    Add property{" "}
                    <span className="font-extrabold">
                      Features and amenities
                    </span>
                  </p>
                </li>
                <li className="flex items-center gap-1">
                  <img
                    src="/assets/icons/check-mark.png"
                    alt="check-mark"
                    className="w-7"
                  />
                  <p>
                    Add <span className="font-extrabold">Price details</span>
                  </p>
                </li>
                <li className="flex items-center gap-1">
                  <img
                    src="/assets/icons/check-mark.png"
                    alt="check-mark"
                    className="w-7"
                  />
                  <p>
                    Add your best{" "}
                    <span className="font-extrabold">Property Shots</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white form-sd overflow-y-scroll max-h-[376px] login-scroll relative">
              <p className="bg-login-label-bg text-[#122B49] px-[68px] pt-2 text-xl uppercase sticky top-0">
                Lets get you started !
              </p>
              <form action="#" className="pt-[40px] pl-[68px]">
                <div className="w-96">
                  <div className="mb-[60px]">
                    <p className="text-lg text-login-label">I am: </p>
                    <div className="flex justify-between w-full">
                      <div>
                        <input
                          type="radio"
                          name="user-type"
                          value="owner"
                          id="owner"
                          className="mr-1"
                          required
                        />
                        <label htmlFor="owner" className="text-login-label">
                          Owner
                        </label>
                      </div>
                      <div>
                        <input
                          className="mr-1"
                          type="radio"
                          name="user-type"
                          value="builder"
                          id="builder"
                          required
                        />
                        <label htmlFor="builder" className="text-login-label">
                          Builder
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[60px]">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      className="rounded-sm  p-3 shadow-input-sd outline-none border-login-border w-full"
                      required
                    />
                  </div>
                  <div className="mb-[60px]">
                    <label htmlFor="Country" className="form-label">
                      Country
                    </label>
                    <br />
                    <select
                      name="country"
                      id="country"
                      className="rounded-sm border-login-border p-3 outline-none shadow-input-sd text-[#122B49] w-full"
                      required
                    >
                      <option value="India">India</option>
                      <option value="Bangaldesh">Bangaldesh</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Sri Lanka">Srilanka</option>
                    </select>
                  </div>
                  <div className="mb-[60px]">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <div className="flex gap-1">
                      <select
                        name="country-code"
                        id="coutnry-code"
                        className="rounded-sm border-login-border p-3 outline-none shadow-input-sd text-[#122B49]"
                        required
                      >
                        <option value="+91">+91</option>
                        <option value="+880">+880</option>
                        <option value="+977">+977</option>
                        <option value="+975">+975</option>
                        <option value="+94">+94</option>
                      </select>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="000-000-0000"
                        className="rounded-sm border-login-border p-3 outline-none shadow-input-sd text-[#122B49] flex-1"
                        required
                      />
                    </div>
                    <p className="text-login-label my-3">OR</p>
                    <div className="mb-[60px]">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        id="name"
                        placeholder="email"
                        className="rounded-sm border-login-border p-3 shadow-input-sd outline-none text-[#122B49] w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-[60px]">
                    <div className="flex justify-between pb-2">
                      <p className="form-label">
                        Enter OTP sent on 999-999-9999
                      </p>
                      <a href="#">Change</a>
                    </div>
                    <div>
                      <input
                        type="number"
                        max={5}
                        name="otp"
                        placeholder="00000"
                        className="rounded-sm border-login-border p-3 text-[#122B49] outline-none shadow-input-sd w-full"
                        required
                      />
                      <p>Resend OTP</p>
                    </div>
                  </div>
                </div>
              </form>
              <div className="bg-login-label-bg sticky bottom-0 w-full py-[10px] px-8 flex justify-between items-center">
                <p className="text-xs text-green-900">
                  Need Help?{" "}
                  <span className="text-login-label font-medium">
                    Call 9999999999
                  </span>
                </p>
                <button className="bg-[#122B49] rounded-lg py-[10px] px-8">
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
