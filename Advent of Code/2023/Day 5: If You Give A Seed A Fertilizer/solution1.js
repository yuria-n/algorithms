// Node.js v20
// This script will be run by "node solution1.js"

const fs = require("node:fs");
const path = require("node:path");

// Read lines from ./input.txt and convert to array of strings
const maps = fs.readFileSync(path.resolve("./input.txt"), "utf8").split("\n\n");
const [
  seedsStr,
  seedToSoil,
  soilToFertilizer,
  fertilizerToWater,
  waterToLight,
  lightToTemperature,
  temperatureToHumidity,
  humidityToLocation,
] = maps;

const seeds = seedsStr.match(/\d+/g).map(Number);

// Find soil IDs from seeds
const soils = [];
for (const seed of seeds) {
  soils.push(findValue(toArray(seedToSoil), seed));
}
// Find fertilizer IDs from soil IDs
const fertilizers = [];
for (const soil of soils) {
  fertilizers.push(findValue(toArray(soilToFertilizer), soil));
}

// Find water IDs from fertilizer IDs
const waters = [];
for (const fertilizer of fertilizers) {
  waters.push(findValue(toArray(fertilizerToWater), fertilizer));
}

// Find light IDs from water IDs
const lights = [];
for (const water of waters) {
  lights.push(findValue(toArray(waterToLight), water));
}

// Find temperature IDs from light IDs
const temperatures = [];
for (const light of lights) {
  temperatures.push(findValue(toArray(lightToTemperature), light));
}

// Find humidity IDs from temperature IDs
const humidities = [];
for (const temperature of temperatures) {
  humidities.push(findValue(toArray(temperatureToHumidity), temperature));
}

// Find location IDs from humidity IDs
const locations = [];
for (const humidity of humidities) {
  locations.push(findValue(toArray(humidityToLocation), humidity));
}

// Console.log the minimum location ID
console.log(Math.min(...locations));

/**
 * Create an array from a string
 * @param {string} str
 * @returns {number[][]}
 */
function toArray(str) {
  const [, ...ranges] = str.split("\n");
  return ranges
    .filter((range) => range)
    .map((range) => {
      const [destId, srcId, length] = range.match(/\d+/g);
      return [Number(srcId), Number(destId), Number(length)];
    })
    .sort(([keyA], [keyB]) => keyA - keyB);
}

/**
 * Find a value in a sorted array
 * @param {number[][]} list
 * @param {number} target
 * @returns {number}
 */
function findValue(list, target) {
  for (const [startId, valueId, length] of list) {
    const endId = startId + length;
    if (target >= endId) {
      continue;
    }
    const diff = target - startId;
    return target < startId ? target : valueId + diff;
  }
  return target;
}
