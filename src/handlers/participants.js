module.exports.create = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
      }),
    };
  }
};
module.exports.delete = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
      }),
    };
  }
};
