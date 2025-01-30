
import Link from "next/link";

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <>
      <div className="w-full  ">
        <div className="mx-auto grid gap-4 px-2 md:px-4 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden mb-6"
            >
              <img
                className="w-full hover:scale-105 h-48 object-cover transition-transform duration-300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
                alt="blog image"
              />
              <div className="p-6">
                <Link href={`/${post.id}`}>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                </Link>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
