import useGetCertification from "../../hooks/useGetCertification";

function Certification() {
  const { data, isLoading, error } = useGetCertification();
  // console.log(data.certification[0].name);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="text-white px-[37px] flex flex-col justify-center">
      <div className="flex gap-4 items-center ml-[10px]">
        <img src="/icons/arrow-right.svg" alt="" />
        <h3 className="text-[20px] font-bold uppercase font-Nunito  certification-header">
          Certification
        </h3>
      </div>
      {/* <div className=""> */}
        <div className="flex flex-col mt-[30px] mb-[30px] gap-[9px]">
          {data.certification.map((data) => (
            <div key={data.id} className="flex items-center gap-4">
              <img src="/icons/certification_svg.svg" alt="certification" />
              <p className="text-[12px] font-bold font-Nunito">{data.name}</p>
            </div>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
}

export default Certification;