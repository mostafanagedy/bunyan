import { createContext, useContext } from "react";

const UsersFormContext = createContext(null);

export const UsersFormProvider = UsersFormContext.Provider;

export const useUsersForm = () => useContext(UsersFormContext);
