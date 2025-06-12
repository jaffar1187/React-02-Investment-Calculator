import { useState } from "react";

import InputGroup from "./InputGroup";

export const UserInput = () => {
  const [userInputData, setUserInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  return (
    <section id="user-input">
      <InputGroup
        labelPlaceHolderArr={["Initial Investment", "Annual Investment"]}
        userInputData={userInputData}
      />
      <InputGroup
        labelPlaceHolderArr={["Expected Return", "Duration"]}
        userInputData={userInputData}
      />
    </section>
  );
};

export default UserInput;
