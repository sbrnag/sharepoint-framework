import * as React from 'react';

import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { Dropdown, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
import { TextField, ITextFieldStyles } from 'office-ui-fabric-react/lib/TextField';
import { useConstCallback } from '@uifabric/react-hooks';
import { DefaultButton } from 'office-ui-fabric-react';


import { BusinessFormContext } from '../context/BusinessFormProvider';


const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 200 } };
const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 200 } };

const roleDropdownOptions = [
    {key: '', text: 'Select an Option'},
    {key: 'Manager', text: 'Manager' },
    {key:'Director', text:'Director'},
    {key:'Finance HOD', text:'Finance HOD'},
    {key:'Legal', text:'Legal'},
    {key:'CFO', text:'CFO'},
    {key:'CEO', text:'CEO'}
];

interface IProps {
    contextProp: WebPartContext;
}

const StakeHolders: React.FC<IProps> = ({contextProp}) => {

  const { businessFormData, setBusinessFormData } = React.useContext(BusinessFormContext);

  const getPeoplePickerItems = (items: any[]): void => {
    console.log(`items : ${items}`);
  };

  const onChangeRole = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption, index: number): void => {
    let stakeHolders = businessFormData.stakeHolders;
    let stakeHolder = stakeHolders[index];
    stakeHolder['role'] = item.text;
    setBusinessFormData({...businessFormData, stakeHolders});
  };

  const onChangeContact = useConstCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string, index?: number) => {
      let stakeHolders = businessFormData.stakeHolders;
       let stakeHolder = stakeHolders[index];
      stakeHolder['contact'] = newValue;
      setBusinessFormData({...businessFormData, stakeHolders});
    },
  );

  const handleAddNew = (): void => {
    let stakeHolders = businessFormData.stakeHolders;
    stakeHolders.push({ ppkDetails : [], role : '', contact: '' });
    setBusinessFormData({...businessFormData, stakeHolders});
  };  

  const handleRemove = (index: number): void => {
    let stakeHolders = businessFormData.stakeHolders;
    stakeHolders.splice(index, 1);
    setBusinessFormData({...businessFormData, stakeHolders});
  };

  return (
      <div>
        <table>
            <tbody>
                <tr>
                    <td>STAKEHOLDER NAME</td>
                    <td>STAKEHOLDER ROLE</td>
                    <td>CONTACT INFO</td>
                    <td></td>
                </tr>
                {businessFormData.stakeHolders.map( (stakeHolder: any, index: number) => {
                    let selectedRole = stakeHolder.role;
                    let selectedContactName = stakeHolder.contact;
                    return (
                        <tr key={index}>
                            <td>
                                <PeoplePicker
                                context={contextProp}
                                personSelectionLimit={1}
                                groupName={""} 
                                showtooltip={true}
                                isRequired={true}
                                disabled={false}
                                selectedItems={getPeoplePickerItems}
                                showHiddenInUI={false}
                                principalTypes={[PrincipalType.User]}
                                resolveDelay={1000} /> 
                            </td>
                            
                            <td>
                                <Dropdown
                                    selectedKey={selectedRole ? selectedRole : undefined}
                                    onChange={(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption) => onChangeRole(event, item, index)}
                                    placeholder="Select an option"
                                    options={roleDropdownOptions}
                                    styles={dropdownStyles} />
                            </td>
                            
                            <td>
                                <TextField
                                    value={selectedContactName}
                                    onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => 
                                        onChangeContact(event, newValue, index)}
                                    styles={textFieldStyles}
                                />
                            </td>

                            <td>
                                { businessFormData.stakeHolders.length > 1 ? 
                                    (<DefaultButton text="Remove" onClick={() => handleRemove(index)} />  ) 
                                    : null
                                }
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <DefaultButton text="Add New" onClick={handleAddNew}  /> 
      </div>
  );
};

export default StakeHolders;
