import { Spinner } from 'reactstrap'

export const LoadingSpinner = (message, status) => {
    return (
        <>
            <h3 className="loading-spinner text-center">
                <div className="d-table">
                    <div className="d-table-cell">
                        <Spinner color="success"> </Spinner>
                    </div>
                </div>
            </h3>
        </>
    )
}
