import PostCard from "@/components/PostCard";
import TagsFilter from "@/components/TagsFilter";
import { getAllFilesMetadata } from "@/lib/mdx";
import { Post } from "@/shared/types";

interface HomeProps {
  posts: Post[];
}

function Home({ posts }: HomeProps) {
  return (
    <main className="max-w-5xl mx-auto p-4 sm:p-8 mb-16 grid gap-16">
      <header className="flex flex-col items-center gap-2 py-8">
        <h1 className="font-bold text-4xl sm:text-6xl text-center tracking-tighter leading-tight selection:bg-black selection:text-white">
          Desarrollo y Diseño Web
        </h1>
        <h2 className="text-center selection:bg-black selection:text-white">
          Soy{" "}
          <span className="text-blue-300 selection:bg-black selection:text-blue-100">
            James Trudeau
          </span>{" "}
          y hablo de tecnología, programación y experiencias personales
        </h2>
      </header>
      <TagsFilter />
      {posts.length === 0 && (
        <>
          <p className="text-center text-2xl w-full text-slate-600 mt-12 grid gap-4">
           {' Aún no hay posts con esa etiqueta :('}
           <span className="text-xl">
           {' Proximamente habrá más contenido!'}
           </span>
          </p>
         </>
        )}
      <section className="grid grid-cols-[repeat(auto-fill,minmax(min(350px,100%),1fr))] gap-4 sm:gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} data={post} />
        ))}
      </section>
    </main>
  );
}

async function getPosts() {
  const posts = getAllFilesMetadata();

  return posts;
}

export default async function HomePage() {
  const posts = await getPosts();
  return <Home posts={posts} />;
}
