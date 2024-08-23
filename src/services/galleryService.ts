import axios from "axios";

export const slideshowGalleries = async (setGallery: (value: React.SetStateAction<any[]>) => void) => {
    try {
      const res = await axios.get(`https://api-test-web.agiletech.vn/galleries`);
      setGallery(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }