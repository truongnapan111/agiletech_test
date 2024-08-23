import axios from 'axios';
import { Posts } from '../model/Posts';
import { Post } from '../model/Posts';
const API_URL = 'https://api-test-web.agiletech.vn';
export const postsData = async (
    page: number, 
    rowsPerPage:number,
    setPosts:React.Dispatch<React.SetStateAction<Post[]>>,
    setTotal: React.Dispatch<React.SetStateAction<number>>) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const res = await axios.get<Posts>(
        `${API_URL}/posts?page=${page + 1}&page_size=${rowsPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res);
      const data = res.data
      setPosts(data.posts);
      setTotal(data.total);
    } catch (error) {
      console.log(error);
    }
  };


export const addTags = async (setTags:React.Dispatch<React.SetStateAction<string[]>>) => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const res = await axios.get(`${API_URL}/posts/tags`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    setTags(res.data)
          
  } catch (error) {
    console.log(error);
  }
}


export const addPost = async (
  posts: Post[],
  title: string,
  description: string,
  selectedTags: string[],
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setDescription: React.Dispatch<React.SetStateAction<string>>,
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>,
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
) => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const newPost = {
      title: title,
      description: description,
      tags: selectedTags, // Thêm tags đã chọn
    };
    const response = await axios.post(`${API_URL}/posts`, newPost, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("Response:", response.data); 
    setPosts([...posts, response.data]);
    setTitle('');
    setDescription('');
    setSelectedTags([]); // Reset tags sau khi thêm
  } catch (error) {
    console.log(error);
  }
}

export const deletePost = async (
  id: string,
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
) => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    await axios.delete(`${API_URL}/posts/${id}`,{
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    console.log("SUCCESS DELETE")
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  } catch (error) {
    console.log(error);
  }
}

export const updatePost = async (
  editPost: Post | null,
  editTitle: string,
  editDescription: string,
  editTags: string[],
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>,
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>,
  setEditPost: React.Dispatch<React.SetStateAction<Post | null>>
  ) => {
    if (editPost) {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.patch(`${API_URL}/posts/${editPost.id}`,
          {
            title: editTitle,
            description: editDescription,
            tags: editTags
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setPosts(prevPosts => prevPosts.map(post => post.id === editPost.id ? response.data : post));
        setOpenDialog(false);
        setEditPost(null);
      } catch (error) {
        console.log(error);
      }
    }
};