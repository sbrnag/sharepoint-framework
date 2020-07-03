
export interface IBusinessFormFG {
    stakeHolders?: any[];
    projectTitle?: string;
    submitedBy?:string;
};

export const BusinessFormInitialValue = {
    stakeHolders : [{ ppkDetails : [], role : '', contact: '' }],
    projectTitle: '',
    submitedBy: ''
};