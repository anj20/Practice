export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const datas = await res.json();
  return {
    props: { datas },
  };
};

const index = ({ datas }) => {
  const path = "www.twitter.com";
  return (
    <div className=" grid grid-flow-row h-[150vh] w-[100vw] bg-black">
      <div className=" text-5xl text-center pt-10 font-serif h-[5vh] w-[100vw] m-10">
        Data Fetched From the API Endpoint
      </div>
      <div className=" h-[95vh] w-[100vw] p-9 pt-0 text-left grid gap-3">
        {datas.map((data) => (
          <div
            className="container border-2 border-gray-500 rounded-md"
            key={data.id}
          >
            <h1 className=" text-xl font-extrabold text-center">{data.name}</h1>
            <p
              className=" text-sm font-serif text-center"
              href="www.google.com"
            >
              <a href={path}>@{data.username}</a>
            </p>
            <div className=" text-center">
              <p className=" font-extralight">
                {data.address.street},{data.address.suite},{data.address.city},
                <span className=" font-bold ">
                  PinCode:{data.address.zipcode}
                </span>
              </p>
            </div>
            <p className=" text-sm font-light">PhoneNo:{data.phone}</p>
            <p>
              {data.company.name},{data.company.catchPhrase},{data.company.bs},
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
