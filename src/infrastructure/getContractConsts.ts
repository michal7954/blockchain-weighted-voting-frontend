import { votingContract } from "configuration";

import {
    contractAddress0,
    contractABI0,
} from "infrastructure/contractsContsts/contractConsts0";

import {
    contractAddress1,
    contractABI1,
} from "infrastructure/contractsContsts/contractConsts1";

import {
    contractAddress2,
    contractABI2,
} from "infrastructure/contractsContsts/contractConsts2";

import {
    contractAddress3,
    contractABI3,
} from "infrastructure/contractsContsts/contractConsts3";

import {
    contractAddress4,
    contractABI4,
} from "infrastructure/contractsContsts/contractConsts4";

export default function getContractConsts(): [string, any] {
    switch (votingContract) {
        case 0:
            return [contractAddress0, contractABI0];
        case 1:
            return [contractAddress1, contractABI1];
        case 2:
            return [contractAddress2, contractABI2];
        case 3:
            return [contractAddress3, contractABI3];
        case 4:
            return [contractAddress4, contractABI4];
    }
}
