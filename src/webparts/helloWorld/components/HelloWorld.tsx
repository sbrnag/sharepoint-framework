import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import BusinessFormProvider from '../context/BusinessFormProvider';

import BusinessFormFg from './BusinessFormFg';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={ styles.helloWorld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <BusinessFormProvider>
                <BusinessFormFg contextProp={this.props.context as WebPartContext}/>
              </BusinessFormProvider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
