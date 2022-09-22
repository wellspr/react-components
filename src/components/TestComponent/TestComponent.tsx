import "./index.css";
import React from "react";

export interface TestComponentProps {
    children?: React.ReactNode;
}

const TestComponent: React.FC<TestComponentProps> = ({ children }) => {
    return (
        <div className="wrapper">
            <p className="paragraph">Test Component</p>

            { children }
        </div>
    );
};

export default TestComponent;
