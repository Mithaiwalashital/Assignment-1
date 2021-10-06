const fs=require("fs");
const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var dirname="";
var filename="";
var content="";
var instruction=()=>{
  console.log("\nEnter 1 for Create Directory.");
    console.log("Enter 2 for Remove Directory.");
    console.log("Enter 3 for Write File.");
    console.log("Enter 4 for Read File.");
    console.log("Enter 5 for Delete File.");
    console.log("Enter 6 for Append data to file.");
    console.log("Enter 7 for Update / Replace file with new data.");
    console.log("Enter 8 for Rename File");
    console.log("Enter 9 for Exit.");
}
var start=()=>{
    rl.question("\nEnter your choice: ",(ans)=>{
        if(ans==="1"){
            createWizard();
        }
        else if(ans==="2"){
            removeWizard();
        }else if(ans==="3"){
            writeFileWizard();
        }else if(ans==="4"){
            readFileWizard();
        }else if(ans==="5"){
            deleteFileWizard();
        }else if(ans==="6"){
            appendDataFileWizard();
        }else if(ans==="7"){
            updateFileWizard();
        }else if(ans==="8"){
            renameFileWizard();
        }else if(ans==="9"){
            rl.close();
        }else{
            console.log("Wrong Choice. please try again");
            start();``
        }
    });
}
var repeat=()=>{
  instruction();
  start();
}
repeat();
var createWizard=()=>{
  rl.question("Enter Directory name\t",(ans)=>{
    dirname=ans;
    fs.mkdir(dirname,(err)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log("Directory Create successfully \t"+dirname);
      }
    repeat();
     });
    });
}
var removeWizard=()=>{
  rl.question("Enter Directory name which you want to delete:\t",(ans)=>{
    dirname=ans;
    fs.rmdir(dirname,(err)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log(dirname+"\tDirectory remove successfully");
      }
      repeat();
    });
  });
}
var writeFileWizard=()=>{
  rl.question("Enter file name:",(ans)=>{
    filename=ans;
  rl.question("enter file content",(ans)=>{
    content=ans;
    fs.writeFile(filename+".txt",content,(err)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log(filename+"is file created successfully..");
      }
      repeat();
    });
  });
  });
}
var readFileWizard=()=>{
  rl.question("Enter file name which you want to read:",(ans)=>{
    filename=ans;
    fs.readFile(filename+".txt","utf8",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
      }
      repeat();
    });
  });
}
var deleteFileWizard=()=>{
  rl.question("Enter file name which you want to delete:",(ans)=>{
    filename=ans;
    fs.unlink(filename+".txt",(err)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log(filename+"is deleted successfully..");
      }
      repeat();
    });
  });
}
var appendDataFileWizard=()=>{
  rl.question("Enter file name in which you want to add data:",(ans)=>{
    filename=ans;
  rl.question("Enter Data: ",(ans)=>{
    content=ans;
    fs.appendFile(filename+".txt",content,(err)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log(filename+".txt in data is added..");
      }
      repeat();
    });
  });
  });
}
var updateFileWizard=()=>{
  rl.question("Enter file name in which you want to update data:",(ans)=>{
    filename=ans;
    rl.question("Enter data which you want to replace:",(ans)=>{
      content=ans;
    rl.question("enter new data:",(ans)=>{
      const newdata=ans;
      fs.readFile(filename+".txt","utf8",(err,data)=>{
        if(err){
          console.log(err);
        }
        else{
          const res=data.replace(content,newdata);
          fs.writeFile(filename+".txt",res,(err)=>{
            if(err){
              console.log(err);
            }
            else{
              console.log(filename+".txt in data is updated.");
            }
            repeat();
          });
        }
      });
    });
    });
  });
}
var renameFileWizard=()=>{
  rl.question("Enter file name which you to rename:",(ans)=>{
   filename=ans;
   rl.question("Enter new file name:",(ans)=>{
     const nfilename=ans;
     fs.rename(filename+".txt",nfilename+".txt",(err)=>{
       if(err){
         console.log(err);
       }
       else{
         console.log(filename+".txt is now "+nfilename+".txt");
       }
       repeat();
     });
   });
  });
}