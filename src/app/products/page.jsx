"use client";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getStaticParams() {
  const productsDirectory = path.join(process.cwd(), "products");
  const productFilenames = fs.readdirSync(productsDirectory);
  const products = productFilenames.map((filename) => {
    const filePath = path.join(productsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      description: data.description,
      body: content,
    };
  });
  console.log(products);
  return products;
}

const Products = async () => {
  const products = await getStaticParams();
  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.slug}>
            <h2>
              <a href={`/products/${product.slug}`}>{product.title}</a>
            </h2>
            <p>{product.description}</p>
            <div dangerouslySetInnerHTML={{ __html: product.body }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
