import fs from 'fs';
fs.readFile("../data/users.json","utf-8",
    (error,data)=>{
        if(error){
            console.log(error);
        }
        const users=JSON.parse(data);
        // console.log(result);
        fs.readFile("../data/post.json",'utf-8',(err1,data1)=>{
            if(err1){
                console.log(err1);
            }
            const  posts=JSON.parse(data1);
            //.map(),reduce(),filter()//higheroreder data
            const result= users.map((user)=>{
                return posts.filter((post)=>post.userId===user.id);

            });
            console.log(result);


        });
        

});
