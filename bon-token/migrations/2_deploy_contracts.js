const Token = artifacts.require('Token');
 
module.exports = function (deployer) {
    deployer.deploy(Token, 'Bank of Nowhere', 'BON', 21000000);
};