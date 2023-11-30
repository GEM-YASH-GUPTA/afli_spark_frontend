import React, { useState } from 'react';
import { Card, CardContent } from '@mui/material';
import AddDetailsInput from './shared/AddDetailsInput';

const MedicalHistory = () => {
	const [toggleChecked, setToggleChecked] = useState(false);

	const [personName, setPersonName] = React.useState<string[]>([]);

	const handleChange = (event: { target: { value: string } }) => {
		setPersonName([...personName, event.target.value]);
	};

	const onChange = () => {
		setToggleChecked(!toggleChecked);
	};
	return (
		<div className="flex flex-col items-center justify-center p-8 over overflow-x-hidden">
			<Card className="rounded-2xl shadow-none w-10/12 mt-5">
				<CardContent className="p-8">
					<div className="grid grid-cols-1">
						<div className="font-Montserrat font-semibold font-medium text-xl">
							Please tell us more about your past and current health
						</div>
					</div>

					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Have you gained or lost more than 5 kg weight in last one year
						other than weight loss program/pregnancy related?"
						></AddDetailsInput>
					</div>

					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Apart from minor ailments such as colds and flu have you received any treatment or have sign and symptom for which consulted with any doctor or specialist or undergone surgery or been hospitalized in the last 5 years?"
						></AddDetailsInput>
					</div>

					<div className="grid grid-cols-1 mt-10 mb-10">
						<div className="font-Montserrat  font-normal font-medium text-sm">
							Have you suffered from or are suffering from any of the following
							signs and symptoms or taken consultation or been advised to
							undergo regular medical consultation/investigations or treatment
							including hospitalization, surgery or advised regular treatment or
							awaiting medical for:
						</div>
					</div>

					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Diabetes/ Elevated Blood Sugar"
						></AddDetailsInput>
					</div>

					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Hogh Blood Pressure?"
						></AddDetailsInput>
					</div>

					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Stroke, Chest Pain, Heart Attack, or any Heart Disease"
						></AddDetailsInput>
					</div>

					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Asthma or any other respiratory disorder?"
						></AddDetailsInput>
					</div>

					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Epilepsy, paralysis, parkinson's disease, multiple sclerosis or any other Nervous Disorder?"
						></AddDetailsInput>
					</div>

					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Liver disease, gall bladder disease or any other digestive ?"
						></AddDetailsInput>
					</div>

					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Kidney/Bladder disease?"
						></AddDetailsInput>
					</div>
					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Anaemia, Thalassemia or any other Blood Disorder?"
						></AddDetailsInput>
					</div>
					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Thyroid or any other Endocrine disorder?"
						></AddDetailsInput>
					</div>
					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Tumor, abnormal cyst, any cancers?"
						></AddDetailsInput>
					</div>
					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Anxiety, Depression or any other Mental Disorder requiring treatment with antidepressant?"
						></AddDetailsInput>
					</div>
					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="You or your spouse ever been tested positive or received medical advice or treatment or considering
						to undergo test or awaiting test sults for HIV/AIDS, Hepatitis (Other than Hepatitis A and E), Alcoholic Liver Disease or any Sexually Transmitted Diseases?"
						></AddDetailsInput>
					</div>
					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Are there any other health conditions not mentioned above which you would like to inform
						us?"
						></AddDetailsInput>
					</div>
					<div>
						<AddDetailsInput
							toggleChecked={toggleChecked}
							onChange={onChange}
							handleChange={handleChange}
							question="Have you undergone or been advised to or considering to undergo any medical treatment/ surgical procedure/investigations/ awaiting test results for cancer, tumour, abnormal growth or heart disease like Blood tests, Ultrasound (USG), Colour Doppler, Cytology, Echocardiography, ECG, Treadmill/Stress Thallium/ Echo, CT Angio, MRI/ CT/PET-Scan, Holter test, Tumour markers,
						Endoscopy, PAP smear, Mammography, Colonoscopy, Biopsy/ FNAC, Angiography, Angioplasty, Bypass/ any Heart Surgery or X-ray etc. other than pre-employment/executive/routine health check up?"
						></AddDetailsInput>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default MedicalHistory;
