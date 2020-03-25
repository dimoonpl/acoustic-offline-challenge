import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { getErrorMessageForHttpStatusCode } from 'helpers/error-helpers';
import {ErrorMessage} from "components/error/ErrorMessage";

export const withRequestError = <T extends unknown>(requestPromise: Promise<AxiosResponse>) =>
  (WrappedComponent: React.ComponentType<T>): React.FC<T> =>
    (passedProps) => {
      const initialState = {
        hasErrors: false,
        errorMessage: '',
      };
      const [state, setState] = useState(initialState);

      useEffect(() => {
        requestPromise.catch((error) => {
          setState({
            hasErrors: true,
            errorMessage: getErrorMessageForHttpStatusCode(error.response.status),
          });
        });
      }, []);

      return (
        <React.Fragment>
          { !state.hasErrors
              ? <WrappedComponent {...passedProps }/>
              : <ErrorMessage
                  message={state.errorMessage}
                />
          }
        </React.Fragment>
      )
    };