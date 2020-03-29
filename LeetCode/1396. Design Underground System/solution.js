class UndergroundSystem {
  constructor() {
    this.totalTimeMap = new Map();
    this.currentRecordMap = new Map();
  }

  /**
   * @param {number} id
   * @param {string} stationName
   * @param {number} t
   * @return {void}
   */
  checkIn = (id, startStation, startTime) => {
    this.currentRecordMap.set(id, [startStation, startTime]);
  };

  /**
   * @param {number} id
   * @param {string} stationName
   * @param {number} t
   * @return {void}
   */
  checkOut = (id, endStation, endTime) => {
    const [startStation, startTime] = this.currentRecordMap.get(id);
    const map = this.totalTimeMap.get(startStation) || {};
    const times = map[endStation] || [];
    times.push(endTime - startTime);
    map[endStation] = times;
    this.totalTimeMap.set(startStation, map);
  };

  /**
   * @param {string} startStation
   * @param {string} endStation
   * @return {number}
   */
  getAverageTime = (startStation, endStation) => {
    const map = this.totalTimeMap.get(startStation);
    const times = map[endStation];
    return times.reduce((t, total) => total + t) / times.length;
  };
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
