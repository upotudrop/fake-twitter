import React, { useState, useCallback, FormEvent } from 'react';

interface IInputs {
    [key: string]: string;
};

interface IInputConfig {
    id: number;
    name: string;
};

export type TEvent = React.ChangeEvent<HTMLInputElement>;

export const useOperateInputs = (initialInputs: IInputs, inputConfig: IInputConfig[]) => {
    const [formInputs, setFormInputs] = useState<IInputs>(initialInputs);

    const inputHandler = useCallback((e: TEvent, inputName: string):void => {
        setFormInputs((prev: IInputs) => {
            return {...prev, [inputName]: e.target.value}
        });
    }, [inputConfig]);

    const resetInputs = () => setFormInputs(initialInputs);
    

  return {
    formInputs,
    inputHandler,
    resetInputs
  }
    
}