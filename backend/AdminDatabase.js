const {Client} = require('pg')
express = require('express')
const cors = require('cors');


const myApp = express();
myApp.use(express.json())


myApp.listen(3001,()=>
{
    console.log("running")
    client.connect();
})


const client  = new Client({
    host:'localhost',
    user:'postgres',
    password:'Pizzahut1234',
    database:'Reg_User_Data'


})
const corsOptions = {
    origin: 'http://localhost:3000',
    
  };
  
  myApp.use(cors(corsOptions));

myApp.post("/UserRegisterData", async (req, res) => {
 
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Username = req.body.Username;
    const Password = req.body.Password;

    const checkUsername = await client.query('select * from "User_Data" where "Username" = $1',[Username])
    const checkEmail = await client.query('select * from "User_Data" where "Email" = $1',[Email])
    if(checkEmail==="" || Password==="")
    {
        res.status(200).json({message:'Null'})
    }
    else if(checkUsername.rows.length > 0)
    {
        console.log("User Exists")
        res.status(200).json({message:'User Exists'})
    }

    else if(checkEmail.rows.length > 0)
    {
        res.status(200).json({message:'Email Exists'})
    }
    
    else
    {
        const entry = await client.query('insert into "User_Data"("Username" , "Email","Password","FirstName","LastName") values($1,$2,$3,$4,$5)',[Username,Email,Password,FirstName,LastName])       
        res.status(200).json({message:'Success'})
    }

   
});


myApp.post("/LibrarianData", async (req, res) => {
    try {
      
      const queryResult2 = await client.query('SELECT * FROM "Librarian_Data"');
      res.status(200).json({ userData2: queryResult2.rows});
    


    } catch (error) {
      
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });