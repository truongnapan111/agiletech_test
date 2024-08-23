// export interface Tag {
//     tag: string;
//   }
  
  export interface Post {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly tags: string[]; // Correctly typed as an array of Tag objects
  }
  
  export interface Posts {
    posts: Post[]; // Changed to an array of Post objects
    readonly current_page: number;
    readonly total_pages: number;
    readonly page_size: number;
    readonly total: number;
  }