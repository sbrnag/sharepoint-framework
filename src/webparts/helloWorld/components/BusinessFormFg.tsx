import * as React from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';

import { BusinessFormContext } from '../context/BusinessFormProvider';

import StakeHolders from './StakeHolders';
import ProjectDetails from './ProjectDetails';

interface IBusinessFormFgProps {
  contextProp: WebPartContext;
}

const BusinessFormFg: React.FC<IBusinessFormFgProps> = ({contextProp}) => {

  const { businessFormData, setBusinessFormData } = React.useContext(BusinessFormContext);
  console.log(`businessFormData : ${JSON.stringify(businessFormData)}`);
  console.log(`projectTitle : ${businessFormData.projectTitle}, submitedBy : ${businessFormData.submitedBy}`);

  return (
    <React.Fragment>
        
        <h1>BusinessForm FG</h1>

        <ProjectDetails />

        <StakeHolders contextProp={contextProp} />

    </React.Fragment>
  );
};

export default BusinessFormFg;
