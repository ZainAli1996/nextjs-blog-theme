interface ErrorMessageProp {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProp) => (
    <div className="dg-container">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p className="its-error" role="alert">{message}</p>
            </div>
        </div>
    </div>
);

export default ErrorMessage;