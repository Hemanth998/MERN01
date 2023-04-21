// @desc get all goals
// @route GET /api/v1/goals
// @action fetch all goals
const getGoals = (req, res) => {
  res.status(200).json({ message: 'get Goals' });
};

const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please enter a valid text');
    // express handles errors by default, returning HTML, we can customise using error middleware
  } else {
    res.status(200).json({ message: 'set Goal' });
  }
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
