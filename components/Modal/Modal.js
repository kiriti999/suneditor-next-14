import React from 'react';

const Modal = ({
	title = '',
	description = '',
	showModal,

	buttonOneText = '',
	buttonOneType = 'secondary',
	buttonOneHandler,

	buttonTwoText = '',
	buttonTwoType = 'primary',
	buttonTwoHandler,

	closeHandler
}) => {
	if (!showModal) {
		return null;
	}

	return (
		<>
			<div className="modal" tabIndex="-1" style={{ display: 'block' }}>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{title}</h5>
							<button
								type="button"
								className="btn-close"
								aria-label="Close"
								onClick={closeHandler}
							></button>
						</div>
						<div className="modal-body">
							<p>{description}</p>
						</div>
						<div className="modal-footer">
							{buttonOneText && (
								<button
									type="button"
									className={`btn btn-${buttonOneType}`}
									onClick={buttonOneHandler}
								>
									{buttonOneText}
								</button>
							)}

							{buttonTwoText && (
								<button
									type="button"
									className={`btn btn-${buttonTwoType}`}
									onClick={buttonTwoHandler}
								>
									{buttonTwoText}
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="modal-backdrop"></div>
		</>
	);
};

export default Modal;