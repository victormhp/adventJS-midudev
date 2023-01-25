// This function creates an object with the properties args, expected, and description and assigns the input arguments to each of those properties.
// Idea from @borjapazr

global.createTestCase = (args, expected, description) => ({
  args,
  expected,
  description,
});
