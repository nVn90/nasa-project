const launchesModel = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  res.status(200).json(launchesModel.getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target)
    return res.status(400).json({
      error: "Missing required launch property",
    });

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }
  launchesModel.addNewLaunch(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = +req.params.id;
  // if launch doesn't exist
  if (!launchesModel.existsLaunchWithId(launchId)) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }

  // if launch found
  const abortedLaunch = launchesModel.abortLuanchById(launchId);
  return res.status(200).json(abortedLaunch);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};
