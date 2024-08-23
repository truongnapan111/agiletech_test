import React, { useEffect, useState } from 'react';
import './Profile.css';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TablePagination,
  Paper,
  Autocomplete,
  TextField,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,Button
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Posts } from '../../model/Posts';
import { addTags, postsData ,addPost, deletePost, updatePost} from '../../services/postService';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';


const Profile: React.FC = () => {
  const [posts, setPosts] = useState<Posts['posts']>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [title,setTitle] = useState('')
  
  const [tags,setTags] = useState<string[]>([])
  const [description,setDescription] =useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [editPost, setEditPost] = useState<Posts['posts'][0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editTags, setEditTags] = useState<string[]>([]);
  const nav = useNavigate();
  const navHome = () => {
    nav('/')
  }

  const handleSave = () => {
    updatePost(editPost,
      editTitle,
      editDescription,
      editTags,
      setPosts,
      setOpenDialog,
      setEditPost)
  }
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleEditTagsChange = (event: React.SyntheticEvent<Element, Event>, newValue: string[]) => {
    setEditTags(newValue);
  };
  const openEditDialog = (post: Posts['posts'][0]) => {
    setEditPost(post);
    setEditTitle(post.title);
    setEditDescription(post.description);
    setEditTags(post.tags);
    setOpenDialog(true);
  };

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        await logout();
      }
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      nav('/');
    }
  }; 
  useEffect(() => {
    const intervalId = setInterval(() => {
      postsData(page, rowsPerPage, setPosts, setTotal);
    }, 2000);
    
    addTags(setTags);
  
    return () => clearInterval(intervalId); // Dọn dẹp khi component bị unmounted
  }, [page, rowsPerPage]);
  

  return (
    <div className="profile">
      <div className="sidebar">
        <div onClick={navHome} className="logooo">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAjCAYAAAA9guKMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKUSURBVHgB7ZhNbtpAFMf/b0ylfkgt7CvFOUFyhOzSdhNygkBCpdAVPQHOCZKsEkUg4ASw6scuvQE3gNBVV1BVbVQp9uubgUTko8XYow6K8lswxh77zZ83M/7zCAvCsNLOqh/Pthi8BuZVEHxzgdEFUV8Bnef19dZd9xIWgOHOhzzBa8iIszO6ihgKbopRcMz37c/7BNWOIUDjR+Cm3FOdPuk0E3owTBwgAUR08KK2/t4cwxHD7Y8FGUgDKWBEm7n6m44zEaOdTz1pfKSCRhz+WvbggEkWCkjPY9Cjb04WtgjYgD3W3OxOjFVYgggrbkRQ2rVwDd/5e8IGDyIWhQcRi0LmrpONSi8bnme2oMQWw2yHvrlA3AVTX7R3SkcvW1gQbtmOWnmQl0Z7mpm2WMQEScSI5WBY5Np0qpcH+9KILUYsWwxEzfq7r1U45kqEHoz8PBXMCTMHE/HOMCJOdgcFPRgkRIuvlXt5OMKIUAQLU8Jr6A0BDlA6C4AVL5O9+K0KcICSLNizxWy25P+OTCfyYQkitQIHiAi25u0BqxY7NvfEO7F+89pCbEmsbhZjMnWloIZ4geM8j/ksVkebMcFnikP+AksQZdpx+jHDWkyPqK0yT6OmHI+Qnn5sMxidN3XNCGmRaanrsqp4sCwPC4tIjQri9sw1N0dsIaYiCkyrP0pHyx3J8SESImthb15LrsuP4rmSxyTeu6yOX22xpeOlih4M5kXEvz1eCpCAXP1VRQ8GcyI12MNc7XVw+f3Wn6KT3V5BkacNoY9/Y6ahyWJKTFkTVJ1Zj2KpvVJY1FmcPv3XgvJEjPgq9qXb+K2u93e9PUZ06j25aI3Xkz3GNVq1Idn1Jc5UTOqKyNMo/NnS6+nmfX8AK8/tG1ht4o0AAAAASUVORK5CYII=" alt="Logo" />
        </div>
        <div  className="sidebar-menu">
          <p>Posts</p>
          <p onClick={handleLogout}>Log Out</p>
        </div>
      </div>
      <div className="profile-content">
        <div className='add-row'>
          <button className='a' onClick={()=>addPost(posts,title,description, selectedTags,setTitle,setDescription,setPosts,setSelectedTags)}>ADD</button>
          <input value={title} onChange={(event) => setTitle(event.target.value)} type='text' placeholder='Title'/>
          <input value={description} onChange={(event) => setDescription(event.target.value)}  type='text' placeholder='Description'/>
          <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={tags} // sử dụng mảng `tags` đã định nghĩa kiểu `string[]`
            getOptionLabel={(option) => option} // `option` là kiểu `string`
            value={selectedTags} // selectedTags cũng là `string[]`
            onChange={(event: any, newValue: string[]) => setSelectedTags(newValue)} // đảm bảo rằng kiểu là `string[]`
            renderInput={(params) => (
              <TextField {...params} label="Tags" placeholder="tags" />
            )}
            sx={{ width: '700px' }}
          />
            
          
        </div>
        <TableContainer component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Tags</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.description}</TableCell>
                <TableCell style={{ width: '30%' }}>
                  {/* Kiểm tra định dạng của tags */}
                  {Array.isArray(post.tags) && post.tags.length > 0 
                    ? post.tags.map((tag, index) => (
                        <span key={index}>
                          {typeof tag === 'string' ? tag : ''}{index < post.tags.length - 1 ? ', ' : ''}
                        </span>
                      ))
                    : 'No Tags'}
                </TableCell>

                <TableCell>
                  <IconButton color="primary" onClick={() => openEditDialog(post)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="primary" onClick={() => deletePost(post.id, setPosts)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            </TableBody>

          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Edit Post</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <Autocomplete
              
              multiple
              limitTags={2}
              id="multiple-limit-tags-edit"
              options={tags}
              getOptionLabel={(option) => option}
              onChange={handleEditTagsChange}
              renderInput={(params) => (
                <TextField {...params} label="Tags" placeholder="Select tags" />
              )}
              
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Profile;
