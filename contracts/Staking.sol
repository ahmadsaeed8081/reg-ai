//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface Token {
    function transfer(address to, uint tokens) external returns (bool success);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) ;
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);


    }

interface NFT {
    function transfer(address to, uint tokens) external returns (bool success);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) ;
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);


    }


contract RegAi_Staking
    {
       
        address  public owner;

        address Staking_token= 0xf3fc68cA1E6d05B9b40E414225b9630172eaB3c4; 
        address Reward_Token=  0xf3fc68cA1E6d05B9b40E414225b9630172eaB3c4; 
        address NFT_address=  0xf3fc68cA1E6d05B9b40E414225b9630172eaB3c4; 
        uint public perTokenValue = 0.1 ether;

     mapping(address=>bool) public isUser;

        uint public totalusers;
        uint perday_reward=300000 ether;
        uint public per_day_divider= 2 minutes;
        uint public fee_percentage= 5 ether;

        uint public totalbusiness; 
        mapping(uint=>address) public All_investors;
        mapping(uint=>uint) public perDay_StakeAmount;
        uint public launchTime; 
        uint public endTime; 
        mapping(address=>uint) public stakeLimitof;

        struct allInvestments{

            uint investedAmount;
            uint DepositTime;
            uint investmentNum;
            uint unstakeTime;
            bool unstake;
            uint reward;


        }



        struct Data{

            mapping(uint=>allInvestments) investment;
            uint noOfInvestment;
            uint totalInvestment;
            uint totalWithdraw_reward;
            bool investBefore;

        }


          mapping(address=>Data) public user;


            mapping(address=>mapping(uint=>allInvestments)) public user_investments;

        constructor(){
            
            owner=msg.sender;              

            launchTime=block.timestamp;
            endTime=block.timestamp + 80 minutes;



        }



        function Stake(uint _investedamount) external  returns(bool success)
        {
            require(_investedamount > 0,"value is not greater than 0"); 
            require(Token(Staking_token).allowance(msg.sender,address(this))>=_investedamount,"allowance");
            require(block.timestamp < endTime,"staking is over" );

            require(stakeLimitof[msg.sender] >= (_investedamount * perTokenValue)/1 ether, "limit issue");
            stakeLimitof[msg.sender] = stakeLimitof[msg.sender]- ((_investedamount * perTokenValue)/1 ether);

            uint num = user[msg.sender].noOfInvestment;
            if(user[msg.sender].totalInvestment ==0 )
            {
                totalusers++;
            }

            uint temp=_investedamount;

            uint tax                     
                     /**
                      * @dev This function calculates the total reward for a user.
                      * @return Returns the total reward for the user.
                      */ = _investedamount * fee_percentage/100 ether;
            _investedamount -= tax;
            uint _day = (block.timestamp - launchTime)/per_day_divider;
            perDay_StakeAmount[_day] += _investedamount;
            user[msg.sender].investment[num].investedAmount =_investedamount;
            user[msg.sender].investment[num].DepositTime=block.timestamp;
            user[msg.sender].investment[num].investmentNum=num;
            user[msg.sender].totalInvestment+=_investedamount;
            user[msg.sender].noOfInvestment++;
            totalbusiness+=_investedamount;
            Token(Staking_token).transferFrom(msg.sender,address(this),temp);
            user[msg.sender].investBefore=true;

            return true;
            
        }

        function get_TotalReward() view public returns(uint){ 
            uint depTime;
            uint rew;
            uint temp = user[msg.sender].noOfInvestment;
            for( uint i = 0;i < temp;i++)
            {   
                if(user[msg.sender].investment[i].unstake)
                {
                    depTime =user[msg.sender].investment[i].unstakeTime - user[msg.sender].investment[i].DepositTime;

                }
                else if(block.timestamp > endTime )
                {
                    depTime = endTime - user[msg.sender].investment[i].DepositTime;

                }
                else
                {
                    depTime =block.timestamp - user[msg.sender].investment[i].DepositTime;

                }
                depTime=depTime/per_day_divider; //1 day
                if(depTime>0)
                {
                    uint  start= (user[msg.sender].investment[i].DepositTime -launchTime)/per_day_divider;
                    for(uint j = start ; j < (start+depTime);j++ )
                    {
                        uint supply = get_eachDayStake(j);
                        uint sharePercentage = (100 ether * user[msg.sender].investment[i].investedAmount) / supply;

                        rew  +=  ((perday_reward * sharePercentage )/ (100*10**18) );

                    }
                }
            }

            return rew;
        }

        function getReward_perInv(uint i, address add) view public returns(uint){ //this function is get the total reward balance of the investor
            uint depTime;
            uint rew;


                if(user[add].investment[i].unstake)
                {
                    depTime =user[add].investment[i].unstakeTime - user[add].investment[i].DepositTime;

                }
                else if(block.timestamp > endTime )
                {
                    depTime = endTime - user[add].investment[i].DepositTime;

                }
                else
                {
                    depTime =block.timestamp - user[add].investment[i].DepositTime;

                }

                depTime = depTime/per_day_divider; //1 day
                if(depTime>0)
                {
                    uint  start = (user[add].investment[i].DepositTime -launchTime )/per_day_divider;
                    for( uint j = start ; j < (start+depTime) ; j++ )
                    {
                        uint supply = get_eachDayStake(j);
                        uint sharePercentage = (100 ether * user[add].investment[i].investedAmount) /supply;

                        rew  +=  ((perday_reward * sharePercentage )/ (100*10**18) );

                    }
                }
            

            return rew;
        }



        function withdrawReward() external returns (bool success){

            uint Total_reward = get_TotalReward() - total_withdraw_reaward();
            require(Total_reward>0,"you dont have rewards to withdrawn");         
            Token(Reward_Token).transfer(msg.sender,Total_reward);                          
            user[msg.sender].totalWithdraw_reward+=Total_reward;

            return true;

        }



        function unStake(uint num) external  returns (bool success)
        {


            require(user[msg.sender].investment[num].investedAmount>0,"you dont have investment to withdrawn");            
            require(!user[msg.sender].investment[num].unstake ,"you have withdrawn");
            uint amount=user[msg.sender].investment[num].investedAmount;

            Token(Staking_token).transfer(msg.sender,amount);             
          
            user[msg.sender].investment[num].unstake =true;    
            user[msg.sender].investment[num].unstakeTime =block.timestamp;    

            user[msg.sender].totalInvestment-=user[msg.sender].investment[num].investedAmount;
            user_investments[msg.sender][num] = user[msg.sender].investment[num];


            return true;

        }

        function getTotalInvestment() public view returns(uint) {   //this function is to get the total investment of the ivestor
            
            return user[msg.sender].totalInvestment;

        }


        function getAll_investments() public view returns (allInvestments[] memory Invested)
        { 
            uint num = user[msg.sender].noOfInvestment;
            uint temp;
            uint currentIndex;
            
            for(uint i=0;i<num;i++)
            {
               if(!user[msg.sender].investment[i].unstake )
               {
                   temp++;
               }

            }
         
           allInvestments[] memory temp_arr =  new allInvestments[](temp) ;
            Invested =  new allInvestments[](temp) ;

            for(uint i=0;i<num;i++)
            {
               if( !user[msg.sender].investment[i].unstake ){

                   temp_arr[currentIndex]=user[msg.sender].investment[i];
                    temp_arr[currentIndex].reward=getReward_perInv(i,msg.sender);

                   currentIndex++;
               }

            }

            uint count=temp;
            for(uint i=0;i<temp;i++)
            {
                count--;
                Invested[i]=temp_arr[count];

            }

            return Invested;

        }

        function getAll_investments_forReward() public view returns (allInvestments[] memory Invested)
        { 
            uint num = user[msg.sender].noOfInvestment;
            uint currentIndex;
            
         
            allInvestments[] memory temp_arr =  new allInvestments[](num) ;
            Invested =  new allInvestments[](num) ;

            for(uint i=0;i<num;i++)
            {

                temp_arr[currentIndex]=user[msg.sender].investment[i];
                temp_arr[currentIndex].reward=getReward_perInv(i,msg.sender);

                currentIndex++;
               

            }

            uint count=num;
            for(uint i=0;i<num;i++)
            {
                count--;
                Invested[i]=temp_arr[count];

            }

            return Invested;

        }

  
        function transferOwnership(address _owner)  public
        {
            require(msg.sender==owner,"only Owner can call this function");
            owner = _owner;
        }

        function total_withdraw_reaward() view public returns(uint)
        {
            uint Temp = user[msg.sender].totalWithdraw_reward;
            return Temp;
        }

       function get_DepTime(uint i) public view returns(uint)
        {
            return user[msg.sender].investment[i].DepositTime;
        }

        function get_currTime() public view returns(uint)
        {
            return block.timestamp;
        }
        

        function get_eachDayStake(uint _day) public view returns(uint)
        {
            uint amount;
            for(uint i=0; i<=_day ;i++)
            {
              amount = amount + perDay_StakeAmount[i] ;
            }
            return amount;

        }
        
        function update_stakingLimit(address _add, uint _val) public returns(bool)
        {
            require(msg.sender==NFT_address);
            stakeLimitof[_add]+=_val;
            return true;

        }
        // function Find_perdayShare(uint _day,uint _amount) public view returns(uint)
        // {
        //     uint supply = Token(Staking_token).per_day_supply(_day);
        //     uint sharePercentage = 100 ether * _amount /supply;

        //     return sharePercentage;
        // }

        function get_StakeLimit() public view
        {

        }

       function withdrawFunds(uint _amount)  public
        {
            require(msg.sender==owner);
            uint bal = Token(Staking_token).balanceOf(address(this));
            require(bal>=_amount);

            Token(Staking_token).transfer(owner,_amount); 
        }


    }