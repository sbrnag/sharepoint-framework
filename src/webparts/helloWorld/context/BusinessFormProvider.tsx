import * as React from 'react';

import { BusinessFormInitialValue } from '../model/businessFormFGModel';

export const BusinessFormContext = React.createContext<any>({});

function BusinessFormProvider(props: any) {

    const [businessFormData, setBusinessFormData] = React.useState<any>(BusinessFormInitialValue);

    
    return (
      <BusinessFormContext.Provider value={{ businessFormData, setBusinessFormData }}>
          {props.children}
      </BusinessFormContext.Provider>
    );
};

export default BusinessFormProvider;