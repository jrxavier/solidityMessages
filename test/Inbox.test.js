// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
//acesso a Classe Web3
const Web3 = require('web3');


const web3 = new Web3(ganache.provider());
