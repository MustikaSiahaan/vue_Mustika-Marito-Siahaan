import gql from "graphql-tag";

export const ALL_TODOS_QUERY = gql`
    query {
        apps_todos {
            id
            todo
        }
    }
`;

export const ADD_TODO = gql`
    mutation insertQuery($todo: String) {
        insert_apps_todos(objects: [{ todo: $todo }]) {
            returning {
                id
            }
        }
    }
`;

export const DELETE_TODO = gql`
    mutation deleteQuery($id: Int) {
        delete_apps_todos(where: { id: { _eq: $id } }) {
            affected_rows
            returning {
                id
            }
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation updateQuery($id: Int, $todo: String) {
        update_apps_todos(where: { id: { _eq: $id } }, _set: { todo: $todo }) {
            returning {
                id
                todo
            }
        }
    }
`;

export const SUBSCRIPTION_TODO = gql`
    subscription subscriptionQuery {
        apps_todos {
            id
            todo
        }
    }
`;
