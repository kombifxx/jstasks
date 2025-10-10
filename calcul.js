function calculate(string) {
  let nums = string.match(/\d+/g).map(Number);
  if (string.includes("loses")){
    return nums[0] - nums[1]
  } else {
    return nums[0] + nums[1]
  }
}