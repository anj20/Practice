import { useRouter } from "next/router";

const Feature = () => {
  const router = useRouter();
  const { featureId } = router.query;
  return (
    <div>
      <p>{featureId}</p>
    </div>
  );
};

export default Feature;
