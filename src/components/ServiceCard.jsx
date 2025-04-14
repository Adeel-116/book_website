import Button from "../components/Button"

const ServiceCard = () => {
  return (
    <div className="w-full mx-auto bg-white sm:rounded-3xl rounded-xl shadow-2xl sm:p-8 p-6 md:p-12 my-8">
      {/* Main Content */}
      <div className="space-y-8">
        {/* Header Section */}
        <div className="">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Not Able To Make Ideas Transform Into Words?
          </h1>
          <p className="text-2xl text font-semibold">
            Get Your Work Done With Premium Book Publishers
          </p>
          <p className="text-gray-600">
            Many writers face burnout at some time. This makes them stressed out
            in how to transform their ideas into words. There are many reasons
            why this happens, therefore we are here to solve the issue.
          </p>
        </div>

        {/* Checkmark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              "Unfinished manuscript",
              "No professional present to look at your work",
              "Mentally stressed",
              "Tough to focus",
              "Being a perfectionist",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {[
              "Stressful schedules",
              "Not getting questions answered",
              "No creatives",
              "Low motivation",
              "Not happy with progress",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-t">
          <div className="flex flex-wrap gap-6 items-center justify-between">
            <Button text="Get A Quote"/>

            <div className="flex items-center gap-6">
              <a
                href="#chat"
                className="text-blue-500 font-semibold hover:text-emerald-600 
                  flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Live Chat
              </a>
              <div className="text-gray-600 font-medium">+1302-518-4405</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
