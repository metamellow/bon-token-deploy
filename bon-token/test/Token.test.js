// SPDX-License-Identifier: MIT
const { BN } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const Token = artifacts.require('Token');
 
contract('Token', (accounts) => {
    const NAME = 'Bank of Nowhere';
    const SYMBOL = 'BON';
    const DECIMALS = new BN('18');
    const TOTAL_SUPPLY = new BN('21000000000000000000000000');
 
    before(async () => {
        token = await Token.deployed();
    });
 
    it('1. totalSupply returns the correct total suuply.', async function () {
        expect(await token.totalSupply()).to.be.bignumber.equal(TOTAL_SUPPLY);
    });
 
    it('2. Has correct name.', async () => {
        expect(await token.name()).to.be.equal(NAME);
    });
 
    it('3. Has correct symbol.', async () => {
        expect(await token.symbol()).to.be.equal(SYMBOL);
    });
 
    it('4. Has correct decimals.', async () => {
        expect(await token.decimals()).to.be.bignumber.equal(DECIMALS);
    });
 
    it('5. Assigns the initial total supply to the creator.', async () => {
        creator = accounts[0];
        expect(await token.balanceOf(creator)).to.be.bignumber.equal(TOTAL_SUPPLY);
    });
})