import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://api.vercel.app/blog");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const usePosts = () => {
  return useQuery(["posts"], fetchPosts);
};

export default function Page() {
  const { data, isLoading, isError, error } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No posts available.</div>;

  return (
    <div>
      <div className="w-full">
        <div className="mx-auto grid gap-4 px-2 md:px-4 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((post) => (
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
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
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
    </div>
  );
}
