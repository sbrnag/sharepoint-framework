import * as React from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';

import { BusinessFormContext } from '../context/BusinessFormProvider';

import StakeHolders from './StakeHolders';

interface IBusinessFormFgProps {
  contextProp: WebPartContext;
}

const BusinessFormFg: React.FC<IBusinessFormFgProps> = ({contextProp}) => {

  const { businessFormData, setBusinessFormData } = React.useContext(BusinessFormContext);
  console.log(`businessFormData : ${JSON.stringify(businessFormData)}`);

  return (
    <React.Fragment>
        <h1>BusinessForm FG</h1>

        <StakeHolders contextProp={contextProp} />

    </React.Fragment>
  );
};

export default BusinessFormFg;
