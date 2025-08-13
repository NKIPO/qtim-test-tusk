// repository/PostActions/index.ts

interface Post {
  id: string | number;
  createdAt: string; // Assuming it's a string, e.g., ISO date string
  title: string;
  preview: string;
  image: string;
  description: string;
}

const API_URL =
  process.env.API_URL || "https://6082e3545dbd2c001757abf5.mockapi.io/"; // Fallback for development

export const fetchAllPosts = async (): Promise<Post[] | []> => {
  try {
    const { data, error } = await useFetch<Post[]>(
      `${API_URL}/qtim-test-work/posts/`
    );
    if (error.value) {
      throw new Error(error.value.message);
    }
    return data.value || []; // Return empty array if data is null
  } catch (e) {
    console.error("Error fetching all posts:", e);
    throw e;
  }
};

export const fetchPostById = async (
  id: string | number
): Promise<Post | null> => {
  try {
    const { data, error } = await useFetch<Post>(
      `${API_URL}/qtim-test-work/posts/${id}`
    );
    if (error.value) {
      throw new Error(error.value.message);
    }
    return data.value;
  } catch (e) {
    console.error(`Error fetching post with ID ${id}:`, e);
    throw e;
  }
};
