interface Post {
  id: string | number;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

export const fetchAllPosts = async (): Promise<Post[] | []> => {
  const config = useRuntimeConfig();

  const API_URL = config.public.apiBase;
  try {
    const { data, error } = await useFetch<Post[]>(
      `${API_URL}/qtim-test-work/posts/`
    );
    if (error.value) {
      throw new Error(error.value.message);
    }
    return data.value || [];
  } catch (e) {
    console.error("Error fetching all posts:", e);
    throw e;
  }
};

export const fetchPostById = async (
  id: string | number
): Promise<Post | null> => {
  const config = useRuntimeConfig();

  const API_URL = config.public.apiBase;
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
