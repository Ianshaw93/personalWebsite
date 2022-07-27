import React from "react";

const FooterComponent = () => {
	return (
		<>
			{/* container should be bottom left of page */}
			<Container>
				<h1>Crypto Grid</h1>
				<h2>Game bio......</h2>
				<div>
					{/* <a href="https://medium.com/cryptogrid">
                    <img src="./mediumLogo.png" className="mediumIcon" />
                </a> */}
					<SocialIcon network="twitter" bgColor="black" />
					<SocialIcon network="medium" bgColor="black" />
					<SocialIcon network="discord" bgColor="black" />
				</div>
			</Container>
		</>
	);
};

export default FooterComponent;
