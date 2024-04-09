//promise : đại diện cho một giá trị ở thời điểm hiện tại có thể chưa tồn tại,
// nhưng sẽ được xử lý và có giá trị vào một thời gian nào đó trong tương lai.
// Việc này sẽ giúp bạn viết các dòng code xử lý không đồng bộ trông có vẻ đồng bộ hơn


const promise=new Promise((resolve,reject)=>{


    let fileLoad=true;
    if(fileLoad){
        resolve("File loaded")
    }else{
        reject("file dont load ")
    }
});

promise.then(value=>console.log(value)).
catch(error=>{console.log(error)})


const wait=new Promise(resolve=>{
    setTimeout(resolve,5000);
});
wait.then(()=>console.log("Thank for waiting"));