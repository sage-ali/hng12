'use strict';

const express = require('express');
const cors = require('cors');
const httpStatusCodes = require('http-status-codes');
const getCurrentDateTime = () => /* @__PURE__ */ new Date().toISOString();
const router = express.Router();
router.get('/', (req, res) => {
  const response = {
    email: 'aliagboola1@gmail.com',
    currentDatetime: getCurrentDateTime(),
    githubUrl: 'https://github.com/sage-ali/hng12/BE-stage-00',
  };
  res.status(httpStatusCodes.StatusCodes.OK).json(response);
});
const app = express();
const DEFAULT_PORT = 3e3;
const port = process.env.PORT || DEFAULT_PORT;
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
module.exports = app;
