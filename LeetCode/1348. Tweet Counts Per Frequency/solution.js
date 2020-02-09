const FREQ_MAP = {
  minute: 60,
  hour: 60 * 60,
  day: 60 * 60 * 24,
};

class TweetCounts {
  constructor() {
    this.data = new Map();
  }

  /**
   * @param {string} tweetName
   * @param {number} time
   * @return {void}
   */
  recordTweet = (tweetName, time) => {
    const timeline = this.data.get(tweetName) || [];
    const i = this.getIndex(timeline, time);
    timeline.splice(i, 0, time);
    this.data.set(tweetName, timeline);
  };

  /**
   * @param {string} freq
   * @param {string} tweetName
   * @param {number} startTime
   * @param {number} endTime
   * @return {number[]}
   */
  getTweetCountsPerFrequency = (freq, tweetName, startTime, endTime) => {
    const timeline = this.data.get(tweetName);
    const counts = [];
    const delta = FREQ_MAP[freq];
    for (let i = startTime; i <= endTime; i += delta) {
      const start = this.getIndex(timeline, i);
      const end = this.getIndex(timeline, Math.min(endTime + 1, i + delta));
      counts.push(end - start);
    }
    return counts;
  };

  getIndex = (timeline, target) => {
    let left = 0;
    let right = timeline.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const time = timeline[mid];
      if (time < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };
}
/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
