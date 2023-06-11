// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.0;

contract abc{
    uint256 a;
    function setter(uint256 _a) public {
        a = _a;
    }
    function getter() public view returns(uint256){
        return a+5;
    }
}