import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //es mutation y no query porque estamos haciendo una POST request
        login: builder.mutation({
            query: (data) => ({
                url: USERS_URL / auth,
                method: "POST",
                body: data
            }),
        }),
    }),
});

export const { useLoginMutation } = usersApiSlice;