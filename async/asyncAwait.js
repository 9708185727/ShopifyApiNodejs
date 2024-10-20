import fs from 'fs/promises';

async function getPosts() {
   try{
    const readUsers=await fs.readFile("../data/users.json","utf-8");
    const readPosts=await fs.readFile("../data/post.json","utf-8");
    const readComments=await fs.readFile("../data/comments.json","utf-8");
    const users=JSON.parse(readUsers);
    const posts=JSON.parse(readPosts);
    const cmmt=JSON.parse(readComments);
    // console.log(users);
    // console.log(posts);
    // console.log(cmmt);
    const result= users.map((user)=>{
        return posts.filter((post)=>post.userId===user.id);

    });
    console.log(result);

   }

   catch(err){
    console.log(err);
   };


}
getPosts();