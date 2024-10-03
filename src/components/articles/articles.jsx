/** @format */

import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';

const Articles = ({ posts }) => {
  console.log(posts);
  if (!posts || posts.length === 0) {
    return <div>No posts found</div>;
  }
  return (
    <div className='my-12'>
      <div className='container mx-auto p-4'>
        <h1 className='text-4xl font-bold'>Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a className='text-blue-500'>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('articleContent'));
  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('articleContent', filename),
      'utf-8'
    );
    const { data } = matter(markdownWithMeta);
    return { slug, title: data.title };
  });
  console.log(posts);
  return {
    props: {
      posts: posts.length > 0 ? posts : [],
    },
  };
}

export default Articles;
