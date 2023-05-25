const Problem = require("../models/Problem");
module.exports.addProblem = async (req, res) => {
  const { difficulty, desc, link } = req.body;
  const x = await Problem.create({ difficulty, desc, link });
  if (x) {
    res.status(201).json({
      _id: x._id,
      difficulty: x.difficulty,
      desc: x.desc,
      link: x.link,
    });
  } else {
    res.status(400);
    throw new Error("could not add this particular problem");
  }
};
module.exports.findAllProblems = async (req, res) => {
  try {
    let x = await Problem.find();
    if (x) {
      res.status(201).send(x);
    } else res.status(201).senc(null);
  } catch (error) {
    console.log(error);
    res.status(500).send("something is wrong");
  }
};
