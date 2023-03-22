function threeSum(arr, target) {
	let min = arr[0];
	let n = arr.length;
	for(let i=0;i<n;i++){
		for(let j=i+1;j<n;j++){
			for(let k=j+1;k<n;k++){
			let sum = arr[i]+arr[j]+arr[k];
				if(min>sum){
					min=sum
				}
			}
		}
	}
// write your code here
  return min;
}

module.exports = threeSum;
