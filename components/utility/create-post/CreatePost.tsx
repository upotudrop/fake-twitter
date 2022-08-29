import React, { useState, FormEvent, useCallback, useEffect } from 'react'; 
import { IInputs, TEvent, TSupportedInputs, IPost, Inputs } from './types';
import { createPost } from '../../../reducers/postsReducer';
import { useDispatch  } from 'react-redux'; 
import { useOperateInputs } from '../../common/Input/hooks/useOperateInputs';
import Input from '../../common/Input/Input';

const initialInputs: IInputs = {
    author: "",
    creationDate: "",
    post: ""
};

const inputs = [
    {
        id: 0,
        name: "author"
    },
    {
        id: 1,
        name: "creationDate"
    },
    {
        id: 2,
        name: "post"
    } 
]

const CreatePost = () => {
    const { formInputs, inputHandler, resetInputs } = useOperateInputs(initialInputs, inputs);
    const dispatch = useDispatch();

    const submitNewPost = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newPost:IPost = {
            author: formInputs.author,
            creationDate: formInputs.creationDate,
            post: formInputs.post
        };

        dispatch(createPost(newPost));
        resetInputs();
    }

    return (
        <section>
            <form onSubmit={submitNewPost}>
                {inputs.map((input) => {
                    return (
                        <Input 
                        key={input.id}
                        inputName={input.name}
                        value={formInputs[input.name as keyof IInputs]}
                        onChange={inputHandler}
                        />
                    )
                })}
            
                <button type="submit">
                    Submit Post
                </button>

            </form>
        </section>
    )
}

export default CreatePost; 