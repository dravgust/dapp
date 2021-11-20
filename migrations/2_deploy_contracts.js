const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
const ComplexStorage = artifacts.require("ComplexStorage");
const ApocalypseDesign = artifacts.require("ApocalypseDesign");
const Counter = artifacts.require("Counter");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(ComplexStorage);
  deployer.deploy(ApocalypseDesign);
  deployer.deploy(Counter);
};
