function removeElement(nums: number[], val: number): number {
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] = val)
        {
            nums.splice(nums[i], 1);
        }
    }
    return nums.length;
};