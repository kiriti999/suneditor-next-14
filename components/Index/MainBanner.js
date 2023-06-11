import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const MainBanner = () => {
	const { t } = useTranslation("distance-learning");
	return (
		<div className="container pt-100">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-12 col-md-12">
						<div className="main-banner-content-style-two">
							<h1 className='text-center'>{t("bannertitle")}</h1>
							{/* <marquee direction="left" scrollmount="9" width="100%" className='text-center mr-0-auto'>{t("bannersubtitle")}</marquee> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainBanner;
