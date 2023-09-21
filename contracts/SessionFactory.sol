// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./SessionNftFactory.sol";


//Deploys NFTContracts for each category in each event
contract SessionFactory is Ownable {
    //Keeps track of various sessions of one event
    address[] public sessions;
    //Keeps track of the addresses at which each contract has been deployed
    mapping(uint=>address) public sessionToAddress;
    uint256 sessionCount;
    
    event SessionCreated(
        address indexed NftFactory,
        uint indexed SessionId
    );

    function createSession() public onlyOwner returns (address){
        address newSessionFactory = address(0);
        newSessionFactory = address(new SessionNftFactory());
        sessions.push(newSessionFactory);
        sessionToAddress[sessionCount]=newSessionFactory;
        emit SessionCreated(newSessionFactory, sessionCount);
        sessionCount++;
        return newSessionFactory;
    }
    
    function getSessions() public view returns (address[] memory) {
        return sessions;
    }
    
}