import React from "react";

export interface TestComponentProps {
    children?: React.ReactNode;
}

const TestComponent: React.FC<TestComponentProps> = ({ children }) => {
    return (
        <div>
            <p>Test Component</p>

            { children }
        </div>
    );
};

export default TestComponent;