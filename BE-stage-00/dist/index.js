'use strict';
const express = require('express');
const cors = require('cors');
const httpStatusCodes = require('http-status-codes');
const getCurrentDateTime = () => {
  const date = /* @__PURE__ */ new Date();
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds())
    .padStart(3, '0')
    .slice(0, 2);
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
};
const router = express.Router();
router.get('/', (req, res) => {
  const response = {
    email: 'aliagboola1@gmail.com',
    current_datetime: getCurrentDateTime(),
    github_url: 'https://github.com/sage-ali/hng12/',
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
