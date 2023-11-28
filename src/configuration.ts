// do not change state of contract 4!!!

export let votingContract: 0 | 1 | 2 | 3 | 4 = 1;
export const isNftVoting = votingContract as number === 4 ? true : false;
