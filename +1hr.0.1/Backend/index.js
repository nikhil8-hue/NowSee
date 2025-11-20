import dotenv from 'dotenv';
import connect_DB from './database/index.js';

dotenv.config();


connect_DB()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    })
})
.catch((error) => {
  console.error("Failed to connect to the database:", error);
});




