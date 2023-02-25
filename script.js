// bai tap ve sql 

//bai 1 ::

//hien thi cac email bi trung
    // SELECT email
    // FROM Canhan
    // GROUP BY email
    // HAVING COUNT(email) > 1;

// hien thi cac email k bi trung

    // SELECT email
    // FROM Canhan
    // GROUP BY email
    // HAVING COUNT(email) = 1;


// bai 2  ;; hien thi luong cao nhat 

    // SELECT MAX(salary) AS second_highest_luong
    // FROM luong
    // WHERE salary < (
    //     SELECT MAX(salary)
    //     FROM luong
    // );

// bai 3 :

    // SELECT score,DENSE_RANK() OVER(ORDER BY score desc) as 'rank'
    // FROM ketqua;

// cac bai tap ve thuat toan

//bai 1 :

function removeDuplicates(arr) {
  const result = [];
  const duplicates = [];
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!seen[num]) {
      result.push(num);
      seen[num] = true;
    } else {
      duplicates.push('*');
    }
  }
  return [...result.sort(),...duplicates];
}

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4,5]));

//bai 2 :

function findUnique(arr) {
    const hash = {};
    const array = [];
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(hash[num] == undefined){
            hash[num] = 1;
        }
        else{
            hash[num] +=1;
        }
    }
    for(let x in hash){
        if(hash[x] == 1){
            array.push(x);
        }
    }

    return array;
}

// console.log(findUnique([8]));

// bai 3 :
function maxSumNonAdjacent(arr) {
    const n = arr.length;
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return arr[0];
    }
    const dp = new Array(n);
    dp[0] = arr[0]; 
    dp[1] = Math.max(arr[0], arr[1]); 
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + arr[i]);  
    }
    return dp[n-1];
}
// console.log(maxSumNonAdjacent([2,7,9,3,1]));

// bai 4 

function sumNums(nums){
    nums.sort((a,b)=>parseInt(a)-parseInt(b));
    const res = [];
    for(let i=0; i<nums.length; i++){
        let left = i+1;
        let right = nums.length - 1;
        if (i > 0 && nums[i] === nums[i-1]) continue;
        while(left < right){
            if(nums[i]+nums[left] +nums[right] == 0){
                res.push([nums[i],nums[left],nums[right]]);
                left = left + 1;
                right = right -1 ;
            }
            else if(nums[i]+nums[left] +nums[right] >0 ){
                right = right -1;
            }
            else{
                left = left + 1;
            }
        }
    }
    return res;
}

console.log(sumNums([-1,0,1,2,-1,-4]));