import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { BlogPosts } from 'app/components/posts'

const filePath = path.join(process.cwd(), 'app', 'content', 'about.mdx');

async function getMDXContent() {
  console.log('File Path:', filePath); // Debugging the path
  const content = fs.readFileSync(filePath, 'utf8');
  return content;
}

export default async function Page() {
  const mdxContent = await getMDXContent();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Portfolio</h1>
      <div className="mb-4 prose">
        <MDXRemote source={mdxContent} />
        <div className="my-8">
        <BlogPosts />
      </div>
      </div>
    </section>
  );
}
