//see https://www.npmjs.com/package/react-error-boundary, also https://www.commoninja.com/blog/handling-exceptions-in-react-best-practices

function ErrorMessage({ error, resetErrorBoundary }) {
    console.error(error)
    return (
        <div className="ErrorMessage">
            <p>An error occurred:</p>
            <pre>{error.message}</pre>
            <button onClick={() => resetErrorBoundary()}>Try Again?</button>
        </div>
    );
}

export default ErrorMessage
