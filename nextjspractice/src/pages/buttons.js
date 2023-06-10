import { useRouter } from "next/router";

const buttons = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("clicked");
    router.push("/features/1");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => router.replace("/about")}>Replace Me</button>
    </div>
  );
};

export default buttons;
