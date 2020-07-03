import * as React from 'react';
import { TextField, ITextFieldStyles } from 'office-ui-fabric-react/lib/TextField';
import { useConstCallback } from '@uifabric/react-hooks';


import { BusinessFormContext } from '../context/BusinessFormProvider';

const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 200 } };

const ProjectDetails: React.FC<any> = () => {

    const { businessFormData, setBusinessFormData } = React.useContext(BusinessFormContext);

    const handleProjectTileChange = useConstCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            console.log(` handleProjectTileChange newValue : ${newValue}`);
            setBusinessFormData({...businessFormData, 'projectTitle' : newValue});
        },
    );

    const handleSubmitedByChange = useConstCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
           console.log(` handleSubmitedByChange newValue : ${newValue}`);
           setBusinessFormData({...businessFormData, 'submitedBy' : newValue});
        },
    );



    return (
        <table>
          <tbody>
          <tr>
            <td>Project Title</td>
            <td><TextField value={businessFormData.projectTitle} name="projectTilte" onChange={handleProjectTileChange} styles={textFieldStyles} required /></td>   
          </tr>
          <tr>
            <td>SUBMITTED BY</td>
            <td><TextField value={businessFormData.submitedBy} name="submitedBy" onChange={handleSubmitedByChange} styles={textFieldStyles} required/></td>
          </tr>
          {/* <td>PROJECT TYPE</td>
            <td><TextField value={this.state.ProjectType} onChanged={this.ProjectTypeOnchanged.bind(this)} required/></td>   
          </tr>
          <tr>
            <td>PHONE / EMAIL</td>
            <td><TextField onChanged={this.PhoneEmailOnchanged.bind(this)} value={this.state.PhoneEmail} /></td>
            <td>TOTAL ESTIMATED BUDGET
            </td>
            <td><TextField onChanged={this.TotalBudgetOnchanged.bind(this)} value={this.state.TotalBudget} required /></td>   
          </tr>
          <tr>
            <td>DATE OF PROPOSAL</td>
            <td><TextField onChanged={this.ProposalDateOnchanged.bind(this)} value={this.state.ProposalDate} required /></td>
            <td>REQUEST TYPE</td>
            <td><TextField onChanged={this.RequestTypeOnchanged.bind(this)} value={this.state.RequestType} required /></td>   
          </tr>
          <tr>
            <td>PROJECTED START DATE</td>
            <td><TextField onChanged={this.ProjStartDateOnchanged.bind(this)} value={this.state.ProjStatrtDate} required /></td>
            <td>PROJECTED COMPLETION DATE</td>
            <td><TextField onChanged={this.ProjEndDateOnchanged.bind(this)} value={this.state.ProjCompletionDate} required /></td>   */}
           </tbody> 
      </table>
    );
};

export default ProjectDetails;