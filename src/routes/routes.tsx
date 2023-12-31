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
import MedicalHistoryPage from '../pages/medicalHistory';
import FamilyHistoryPage from '../pages/familyHistory';
import LifestylePage from '../pages/lifestyle';
import TravelResidencePage from '../pages/travelResidence';
import SummaryPage from '../pages/summary';
import OccupationPage from '../pages/occupation';
import ButtonContainer from '../components/ButtonContainer';
import JuvenileQues from '../components/JuvenileQues';

const RoutesComponent = () => {
	return (
		<div className="bg-white-smoke min-h-screen">
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
						<Route path="lifestyle" element={<LifestylePage />} />
						<Route path="medical-history" element={<MedicalHistoryPage />} />
						<Route path="family-history" element={<FamilyHistoryPage />} />
						<Route path="juvenile-ques" element={<JuvenileQues />} />
						<Route path="travel-residence" element={<TravelResidencePage />} />
						<Route path="summary" element={<SummaryPage />} />
					</Route>
				</Routes>
				<div className="flex flex-col items-center justify-center p-8">
					<ButtonContainer />
				</div>
			</Router>
		</div>
	);
};

export default RoutesComponent;
