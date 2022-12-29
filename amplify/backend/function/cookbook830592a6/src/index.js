const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const random = Math.floor(Math.random() * 1000);

const params = {
TableName: "ActionCounter-7dc3n2n27bg4defjtawzx7wuny-staging",
Key: {
  id : 'bf41f60b-1c14-4ec3-8dff-aaff6c1759ac'
},
UpdateExpression: "set #counter = :counter",
    ExpressionAttributeNames: {
        '#counter': 'counter',
    },
    ExpressionAttributeValues:{
        ":counter": random
    },
    ReturnValues:"UPDATED_NEW"
};

async function updateItem() {
  console.log(random);
  try {
    await docClient.update(params).promise();
  } catch (err) {
    return err;
  }
}


exports.handler = async (event) => {
   try {
    const result = await updateItem();
    console.log(result);
    return { body: 'Successfully updated item!' }
  } catch (err) {
    return { error: err }
  }
};
