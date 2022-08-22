import React from "react";
import { useRouter } from "next/router";
const ProductDetails = () => {
  const router = useRouter();

  console.log(router.query.slug);
  return <div>ProductDetails</div>;
};

const getServerSideProps = async () => {
  const query = "*[]";
};

export default ProductDetails;
