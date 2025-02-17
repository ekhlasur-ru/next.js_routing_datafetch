export async function generateMetadata({ params }) {
  const { id } = await params;
  const data = await fetch(`https://api.vercel.app/blog/${id}`);
  const post = await data.json();

  return {
    title: post.title + " | Ekhlaur Rahman",
  };
}

export default async function Page({ params }) {
  const { id } = await params;

  if (!id) {
    return <div>pending...</div>;
  }

  const data = await fetch(`https://api.vercel.app/blog/${id}`);
  const post = await data.json();

  return (
    <div className="min-h-screen w-full bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={
            post.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
          }
          alt={post.title}
          loading="lazy"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
            <span>{post.category}</span>
            <span>{post.date}</span>
            <span>{post.author}</span>
          </div>
          <p className="text-gray-700 leading-relaxed">{post?.content}</p>
        </div>
      </div>
    </div>
  );
}
