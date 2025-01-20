/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createContext } from "react";

const FormContext = createContext();

function FormProvider({ children }) {
  const [image, setImage] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [gitHubUsername, setGitHubUsername] = useState("");

  const [showTicket, setShowTicket] = useState(false);

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <FormContext.Provider
      value={{
        image,
        setImage,
        fullName,
        setFullName,
        emailAddress,
        setEmailAddress,
        gitHubUsername,
        setGitHubUsername,
        handleOnSubmit,
        showTicket,
        setShowTicket,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("FormContext was used outside the FormProvider");
  return context;
}

export { FormProvider, useForm };
