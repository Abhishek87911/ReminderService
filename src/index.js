const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const cron = require('node-cron');
// const { sendBasicEmail } = require('./services/email-service');

const setAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
    // sendBasicEmail(
    //     'support@gmail.com',
    //     'notificationservice.abhishek@gmail.com',
    //     'This is a testing email',
    //     'Hey! how are you , hope you like the support'
    // );
    
    // cron.schedule('*/2 * * * *', ()=>{
    //     console.log("running task every two minutes");
    // })
    
  })
}

setAndStartServer();