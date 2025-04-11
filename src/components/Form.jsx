// components/Form.jsx
import React from "react";
import Button from "./Button";
import InputField from "./InputField";
import SelectBox from "./SelectBox";

function Form() {
  return (
    <div className="w-full h-auto bg-gray-100">
      <div className="w-auto bg-gray-50 rounded-xl shadow-md py-4 px-3 max-w-3xl mx-auto">
        <h2 className="font-bold text-gray-600 text-center mb-8 text-xl">
          UP TO 50% DISCOUNT
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <InputField label="Enter Your Name *" required />
            <InputField label="Enter Email Here *" type="email" required />
            <InputField label="Phone Number *" type="tel" required />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectBox
                label="Select a Service"
                options={[
                  "Web Development",
                  "App Development",
                  "Graphic Design",
                  "Digital Marketing",
                ]}
              />
              <SelectBox
                label="Select Your Budget"
                options={[
                  "$500 - $1000",
                  "$1000 - $5000",
                  "$5000 - $10000",
                  "Custom Budget",
                ]}
              />
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Enter a brief description"
                className="block w-full rounded-md border text-black border-gray-300 shadow-sm focus:border-[#00c0ff] focus:ring-[#00c0ff] px-3 py-2 text-sm"
              ></textarea>
            </div>
          </div>

          <div className="w-full">
            <Button text="Contact With US" children="w-full text-center" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
