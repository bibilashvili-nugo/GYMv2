import useGetBlogs from "../hooks/useGetBlogs";

function Blogs() {
  let { data: blogs, error } = useGetBlogs();

  console.log(blogs, error);

  return (
    <div className="flex flex-col   font-Nunito bg-[#121212] ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[20px] md:text-[40px] text-[#C4C4C4] font-bold uppercase">
          Private personal training
        </h1>
        <div className=" flex flex-col  gap-[15px]  mt-[20px] font-normal">
          <button
            type="button"
            className=" md:w-[195px] w-[auto] h-[42px] cursor-pointer text-[#D7FD44]  rounded-[24px] font-bold text-[15px] p-[10px] border border-[#D7FD44] pr-[25px] pl-[25px] "
          >
            Workout Routines
          </button>
          <button
            type="button"
            className="md:w-[195px]  w-[auto] h-[42px] cursor-pointer text-[#D7FD44]  rounded-[24px] font-bold text-[15px] p-[10px] border border-[#D7FD44] pr-[25px] pl-[25px]"
          >
            Nutrition and diet
          </button>
        </div>
        <div className="mt-[40px] ">
          <img
            src="\home\desktop\blogMainImage.jpeg"
            alt="blogMainImage"
            className="rounded-[12px] w-100% max-h-[650px]"
          />
        </div>

        {/* <div>
          <div>
            <h2>Contributor</h2>
            <div>
              <img src="/admin/profile.svg" alt="" />
            </div>
          </div>
          <div></div>
        </div> */}
      </div>
    </div>
  );
}

export default Blogs;
