import { AxiosResponse } from 'axios';
import { BeatLoader } from 'react-spinners';
import React, { useState, useEffect } from 'react';

type MapResponseToProps<T> = (response: any) => T;

interface IState {
  hasLoaded: boolean;
  mappedComponentProps: any;
}

export const withAsyncLoading = <T extends unknown>(requestPromise: Promise<AxiosResponse>) =>
  (mapResponseToProps: MapResponseToProps<T>) =>
    (WrappedComponent: React.ComponentType<T>): React.FC<T> =>
      (passedProps) => {
        const initialState: IState = {
          hasLoaded: false,
          mappedComponentProps: {}
        };
        const [state, setState] = useState(initialState);

        useEffect(() => {
          requestPromise.then((responseBody) => {
            setState({
              hasLoaded: true,
              mappedComponentProps: mapResponseToProps(responseBody),
            });
          });
        }, []);

        return (
          <React.Fragment>
            { state.hasLoaded
                ? <WrappedComponent {...passedProps} {...state.mappedComponentProps} />
                : <BeatLoader />
            }
          </React.Fragment>
        );
};