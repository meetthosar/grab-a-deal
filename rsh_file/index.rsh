'reach 0.1';
'use strict';

export const main = Reach.App(() => {
  const Deployer = Participant('Deployer', {
    deadline: UInt,
    ready: Fun([], Null),
    token : Token,
    units : UInt,
    proposeOffer : Fun([],Tuple(Token, UInt)),
    seeApplicants : Fun([Address], Null)
  });

  const Applicant = API('Applicant', {
    applyTheOffer: Fun([Address], Bool),
    timesUp: Fun([], Bool),
  });
  init();

  Deployer.only(() => {
    const token = declassify(interact.token);
    const numOfParticipants = declassify(interact.units)
    // const [token, numOfParticipants] = declassify(interact.proposeOffer());
    const deadline = declassify(interact.deadline);
    check(numOfParticipants != 0)
  });
  Deployer.publish(token, numOfParticipants, deadline);
  
  commit();


  Deployer.pay([[numOfParticipants, token]]);
 
  
  // Deployer.interact.ready();
  // commit();
   
  const end = lastConsensusTime() + deadline;
  const applicantSets = new Set();

  const [ howMany ] =
    parallelReduce([numOfParticipants])
    .invariant(balance(token) ==  howMany)
    // .invariant(balance() == 0 && balance(token) == 0)
    .while( howMany > 0  )
    .api_(Applicant.applyTheOffer, (who) => {
      // check( who == Deployer, "you are the boss");
      check( !applicantSets.member(who), "You have Already received a token " );
      return [ [], (k) => {
        k(true);
        applicantSets.insert(who);
        transfer(1, token).to(who);
        Deployer.interact.seeApplicants(who);
        return [ howMany - 1 ];
      }];
    })
    .timeout( absoluteTime(end), () => {
      const [ [], k ] = call(Applicant.timesUp);
      k(true);
      return [ howMany ]
    }); 
  // const leftOvers = howMany;
  transfer(balance(token), token).to(Deployer); 
  transfer(balance()).to(Deployer);
  commit();
  exit();
});