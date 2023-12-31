const launches = new Map();

let latestFlightNumber = 100;
// const launch = {
//   flightNumber: 100,
//   mission: "Kepler Exploration X",
//   rocket: "Explorer IS1",
//   launchData: new Date("December 27, 2030"),
//   target: "Kepler-442-b",
//   customer: ["ZTM", "NASA"],
//   upcoming: true,
//   success: true,
// };

// launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ["ZTM", "NASA"],
      upcoming: true,
      success: true,
    })
  );
}

function abortLuanchById(launchId) {
  const abortedLaunch = launches.get(launchId);
  abortedLaunch.upcoming = false;
  abortedLaunch.success = false;
  return abortedLaunch;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLuanchById,
};
