import * as React from 'react';
import { TextField, ITextFieldStyles } from 'office-ui-fabric-react/lib/TextField';
import { useConstCallback } from '@uifabric/react-hooks';


import { BusinessFormContext } from '../context/BusinessFormProvider';

const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 200 } };

const ProjectDetails: React.FC<any> = () => {

    const { businessFormData, setBusinessFormData } = React.useContext(BusinessFormContext);

    const handleProjectTileChange = useConstCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            const newData = businessFormData;
            newData['projectTitle'] = newValue;
            setBusinessFormData({...businessFormData, ...newData});
        },
    );

    const handleSubmitedByChange = useConstCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            const newData = businessFormData;
            newData['submitedBy'] = newValue;
            setBusinessFormData({...businessFormData, ...newData});
        },
    );



    return (
        <table>
            <tbody>
                <tr>
                    <td>PROJECT TITLE</td>
                    <td>
                        <TextField value={businessFormData.projectTitle} name="projectTilte" onChange={handleProjectTileChange} styles={textFieldStyles}  />
                    </td>   
                </tr>
                <tr>
                    <td>SUBMITTED BY</td>
                    <td>
                        <TextField value={businessFormData.submitedBy} name="submitedBy" onChange={handleSubmitedByChange} styles={textFieldStyles} />
                    </td>
                </tr>
            </tbody> 
      </table>
    );
};

export default ProjectDetails;