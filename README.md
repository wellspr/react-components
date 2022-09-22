# React Components

This is a template for creating a typescript based react components library for later publishing as a npm module.

## Getting started

### 1 . Clone project
At the root directory of your react project create a `packages` directory and `cd` into it and clone the project:

    git clone https://github.com/wellspr/react-components.git


### 2 . Install dependencies
Inside the newly created directory `react-components` install dependencies

    npm install

### 3 . Build project
Build project 
    
    npm run build

A `dist` directory will be created containing the library code and types.

### 4 . Install the package locally for testing
Now back into the root of the react project type 

    npm install packages/react-components

### 5 . Import the components to your project
Import components into your react app:

    import { TestComponent } from "@wellspr/react-components";

    const App = () => {
        return <TestComponent />
    };

    export default App;


## Creating your components

To create a new component called `Button`, add a new directory called `Button` under `packages/react-components/src/components`, and create inside of it the file `Button.tsx`, which will contain the component itself, for example,

    import React from "react";

    export interface ButtonProps {
        children?: React.ReactNode;
    };

    const Button: React.FC<ButtonProps> = ({ children }) => {
        return <button>
            { children }
        </button>
    };

    export default Button;

Also, create `index.ts`, and add 

    export { default } from "./Button";

which will export the component. The file structure will end up like so:

    Button
    |--Button.tsx
    |--index.ts

Now update the file `src/components/index.ts` with the declaration

    export { default as Button } from "./Button";


## Development
Inside `packages/react-components` run

    npm run dev

Changes made to the components will be reflected automatically to the react app.
