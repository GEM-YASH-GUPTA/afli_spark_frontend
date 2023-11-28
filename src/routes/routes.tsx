import React from 'react';
import {
	HashRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';

//shared components
import Header from '../components/layout';

// Pages
import LifestyleComponent from '../pages/lifestyle';
import MedicalHistoryPage from '../pages/medicalHistory';
import FamilyHistoryPage from '../pages/familyHistory';
import LifestylePage from '../pages/lifestyle';
import TravelResidencePage from '../pages/travelResidence';
import SummaryPage from '../pages/summary';
import OccupationPage from '../pages/occupation';

const RoutesComponent = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navigate to="/occupation" />
						</>
					}
				/>
				<Route element={<Header />}>
					<Route path="occupation" element={<OccupationPage />} />
					<Route path="lifestyle" element={<LifestyleComponent />} />
					<Route path="medical-history" element={<MedicalHistoryPage />} />
					<Route path="family-history" element={<FamilyHistoryPage />} />
					<Route path="juvenile-ques" element={<LifestylePage />} />
					<Route path="travel-residence" element={<TravelResidencePage />} />
					<Route path="summary" element={<SummaryPage />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default RoutesComponent;
