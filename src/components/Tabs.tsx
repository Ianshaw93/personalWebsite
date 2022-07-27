import React from "react";
// import { Tabs, Tab } from 'react-bootstrap';
import MiningOs from "../pages/MiningOs";
// import Tabs from 'react-bootstrap/Tabs'
// window tabs to open other applications e.g. online store, internet search, maps, news, crypto prices

export default function TabComponent() {
	return (
		<>
			<Tabs
				defaultActiveKey="profile"
				id="uncontrolled-tab-example"
				className="mb-3"
			>
				<Tab eventKey="Mining" title="Mining">
					{/* Mining os */}
					<MiningOs />
				</Tab>
				<Tab eventKey="Store" title="Store">
					Store - buy ASICs etc
				</Tab>
				<Tab eventKey="Crypto Prices" title="Crypto Prices" disabled>
					charts of prices
				</Tab>
				<Tab eventKey="GlobeScan" title="GlobeScan" disabled>
					shows map with possible factory locations
				</Tab>
			</Tabs>
		</>
	);
}
