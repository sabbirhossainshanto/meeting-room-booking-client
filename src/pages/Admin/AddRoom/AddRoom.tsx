import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AddRoom = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-12 gap-6 py-14">
      <div className="col-span-12 md:col-span-6 lg:col-span-8 ">
        <h4 className="bg-[#E9E4E4] px-3 py-2 text-lg font-semibold">
          Billing details
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="sm:flex md:block lg:flex gap-6 mt-6">
            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
              <label className="text-lg font-medium" htmlFor="first_name">
                Select Date <span className="text-primary">*</span>
              </label>
              <select
                className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
                name=""
                id=""
              >
                {[]?.map((category) => {
                  return (
                    <option className="py-5" value={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
              <label className="text-lg font-medium" htmlFor="last_name">
                Select Slot <span className="text-primary">*</span>
              </label>

              {/* <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={["a10", "c12"]}
                  onChange={(value) => setSlot(value)}
                  options={options}
                /> */}
            </div>
          </div>
          <div className="sm:flex md:block lg:flex gap-6 mt-6">
            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
              <label className="text-lg font-medium" htmlFor="first_name">
                Name <span className="text-primary">*</span>
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
                type="text"
                id="first_name"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
              <label className="text-lg font-medium" htmlFor="last_name">
                Email <span className="text-primary">*</span>
              </label>
              <input
                {...register("email", { required: true })}
                className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
                type="email"
                id="last_name"
              />
            </div>
          </div>
          <div className="sm:flex md:block lg:flex gap-6 mt-6">
            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
              <label className="text-lg font-medium" htmlFor="first_name">
                Address <span className="text-primary">*</span>
              </label>
              <input
                {...register("address", { required: true })}
                className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
                type="text"
                id="first_name"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-full lg:w-1/2 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
              <label className="text-lg font-medium" htmlFor="last_name">
                Phone <span className="text-primary">*</span>
              </label>
              <input
                {...register("phone", { required: true })}
                className="w-full text-sm border-[2.5px] border-[#E9E4E4] rounded focus:ring-0 focus:outline-primary mt-2 py-2 px-2"
                type="email"
                id="last_name"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoom;
