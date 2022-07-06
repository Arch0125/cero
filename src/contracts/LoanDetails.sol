
// File: IERC20.sol


pragma solidity =0.8.0;

interface IERC20 {
    function totalSupply() external view returns (uint);

    function balanceOf(address account) external view returns (uint);

    function transfer(address recipient, uint amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint amount);
    event Approval(address indexed owner, address indexed spender, uint amount);
}
// File: LoanDetails.sol

//SPDX-License-Identifier:MIT
pragma solidity =0.8.0;


contract LoanDetails{

    IERC20 public immutable token;

    constructor (address _token){
        token = IERC20(_token);
    }

    uint public totalamt;

    struct Loan{
        address borrower;
        uint borrowamt;
        uint vaultid;
        string apr;
        uint startdate;
        bool status;
    }

    mapping(address => mapping(uint => Loan)) public myloans;
    mapping(address => mapping(uint => uint)) public lockedassets;

    function createLoan(uint _borrowamt, uint _vaultid,string memory _apr, uint _startdate)external{
        require(myloans[msg.sender][_vaultid].status == true);
        myloans[msg.sender][_vaultid]=Loan(msg.sender,_borrowamt,_vaultid, _apr, _startdate,false);
    }

    function repay(uint _vaultid, uint _totaldate, uint _interest) external {
        require(myloans[msg.sender][_vaultid].status==false);
        myloans[msg.sender][_vaultid].status=true;
        totalamt = myloans[msg.sender][_vaultid].borrowamt * (1 + (_interest * _totaldate)/365);
        token.transferFrom(msg.sender,0xACD309221C0B87c78873Fc1d2A99D382Bb52DD51,totalamt);
    }

    function lockAsset(uint _amount, uint _vaultid) external {
        lockedassets[msg.sender][_vaultid]=_amount;
    }
}