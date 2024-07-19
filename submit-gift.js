exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);
  // Process data or send emails
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Gift created successfully!" })
  };
};
