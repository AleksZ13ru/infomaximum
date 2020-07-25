import React, {Fragment} from "react";
import "./Account.css"
import {gql, useMutation, useQuery} from "@apollo/client";
import "./Account.css"
import FormCurrentUser from "./components/FormCurrentUser";

const GET_CURRENT_USER = gql`
    query currentUser{
        currentUser{
            id
            firstName
            secondName
            email
        }
    }
`;

const USER_EDIT_MUTATION = gql`
    mutation editUser($id:Int!, $firstName: String! , $secondName: String!, $email: String!, $password: String){
        editUser(id:$id, firstName:$firstName, secondName:$secondName, email:$email, password:$password){
            id
            firstName
            secondName
            email
        }
    }
`;

export default function Account() {
    const [saveBtnText, setSaveBtnText] = React.useState('Сохранить');
    const {loading: queryLoading, error: queryError, data, refetch} = useQuery(GET_CURRENT_USER, {
        onCompleted, onError
    });

    const [userEdit, {loading: mutationLoading, error: mutationError}] = useMutation(USER_EDIT_MUTATION, {
        onCompleted: onCompletedMutation, onError: onErrorMutation
    });

    function onCompleted(data) {
        // console.log(data)
    }

    function onError(error) {
        // console.log(error.message)
    }

    function onCompletedMutation() {
        refetch().then();
        setSaveBtnText('Сохранено');
        setTimeout(() => setSaveBtnText('Сохранить'), 3000);
    }

    function onErrorMutation(error) {
        console.log(error.message)
    }

    const handleSubmit = (values) => {
        console.log(values);
        userEdit({variables: values}).then()
    };

    if (queryLoading) return 'Loading...';
    if (queryError) return `Error! ${queryError.message}`;

    return (
        <div>
            <Fragment>
                <FormCurrentUser onSubmit={handleSubmit} initialValues={data.currentUser} saveBtnText={saveBtnText}/>
            </Fragment>
        </div>
    )
}

Account.propTypes = {};
