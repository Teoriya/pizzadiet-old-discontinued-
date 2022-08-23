const CommonUtils = {
  generateResponse: (statusCode, message, data) => {
    console.log(`msg: ${message}, data: ${data}`);
    return {
      statusCode,
      message,
      data,
    };
  },
  customError: (status, msg) => ({
    status,
    msg,
    isCustom: true,
  }),
  removeDuplicateFromArray: (arr) => [...new Set(arr)],
};

Object.freeze(CommonUtils);
module.exports = CommonUtils;
