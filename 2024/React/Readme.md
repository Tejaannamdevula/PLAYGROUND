# env

Env variable always cannot be accessed by process.evn.VariableName

it depends on way how we create a React app

create React App follows REACT_APP_VARIABLE_NAME \
Vite follows import.meta.env.VITE_VARIABLE_NAME\
Nextjs has inbuilt process.env support

Always check documentation before accessing env variable

A better way to manage environment variables is by creating a config.js file:

1. **Centralize Variables**: Keep all environment variables in one place for easier management.
2. **Typecasting & Validation**: Ensure proper types and validate variables at runtime to prevent runtime errors caused by missing or incorrect declarations.

```javascript
const config = {
  backendUrl: String(import.meta.env.VITE_BACKEND_URL),
};

export default config;
```

[YoutubeResource](https://youtu.be/fFHyqhmnVfs?si=O5tpzAwW7wLPGIRA)
