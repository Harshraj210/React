Context API

- if we want to send data to other components using props , if data is to be by many nested compo. keep passing props { props drilling}

- This Api solvs the problem where we directly put the values {data ,functions} and any componenets can directly access from there.

steps
{import { createContext } from "react";

export const UserContext = createContext();}

-in app.jsx we use usercontext.provider and the value which provides data to all componenets.

- for consuming data in components we usecontext with variable name of context api
