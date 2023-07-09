const planetsModel = require("../../models/planets.model");
function httpGetAllPlanets(req, res) {
  return res.status(200).json(planetsModel.getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
