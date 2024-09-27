import { useRouter } from "next/router";
import React from "react";
import products from "@/lib/products.json";

function ProductDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const product = products.find(
    (p) => p.title.toLowercase().replace(/\s+/g, "-") === slug
  );
  console.log(product);
  if (!product) return <div>Product not found</div>;
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
