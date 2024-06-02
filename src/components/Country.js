import React from "react";

const Country = (props) => {
	const handleCountry = (event) => {
		props.handleCountryChange(event.target.value);
	};

	const countries = [
		{ code: "ae", name: "United Arab Emirates" },
		// { code: "ar", name: "Argentina" },
		// { code: "at", name: "Austria" },
		{ code: "au", name: "Australia" },
		// { code: "be", name: "Belgium" },
		// { code: "bg", name: "Bulgaria" },
		// { code: "br", name: "Brazil" },
		{ code: "ca", name: "Canada" },
		{ code: "ch", name: "Switzerland" },
		// { code: "cn", name: "China" },
		// { code: "co", name: "Colombia" },
		// { code: "cu", name: "Cuba" },
		// { code: "cz", name: "Czech Republic" },
		// { code: "de", name: "Germany" },
		// { code: "eg", name: "Egypt" },
		// { code: "fr", name: "France" },
		{ code: "gb", name: "United Kingdom" },
		// { code: "gr", name: "Greece" },
		// { code: "hk", name: "Hong Kong" },
		// { code: "hu", name: "Hungary" },
		// { code: "id", name: "Indonesia" },
		// { code: "ie", name: "Ireland" },
		// { code: "il", name: "Israel" },
		{ code: "in", name: "India" },
		// { code: "it", name: "Italy" },
		// { code: "jp", name: "Japan" },
		// { code: "kr", name: "South Korea" },
		// { code: "lt", name: "Lithuania" },
		// { code: "lv", name: "Latvia" },
		// { code: "ma", name: "Morocco" },
		// { code: "mx", name: "Mexico" },
		{ code: "my", name: "Malaysia" },
		// { code: "ng", name: "Nigeria" },
		// { code: "nl", name: "Netherlands" },
		// { code: "no", name: "Norway" },
		// { code: "nz", name: "New Zealand" },
		// { code: "ph", name: "Philippines" },
		// { code: "pl", name: "Poland" },
		// { code: "pt", name: "Portugal" },
		// { code: "ro", name: "Romania" },
		// { code: "rs", name: "Serbia" },
		// { code: "ru", name: "Russia" },
		// { code: "sa", name: "Saudi Arabia" },
		// { code: "se", name: "Sweden" },
		{ code: "sg", name: "Singapore" },
		// { code: "si", name: "Slovenia" },
		// { code: "sk", name: "Slovakia" },
		{ code: "th", name: "Thailand" },
		// { code: "tr", name: "Turkey" },
		// { code: "tw", name: "Taiwan" },
		// { code: "ua", name: "Ukraine" },
		{ code: "us", name: "United States" },
		// { code: "ve", name: "Venezuela" },
		{ code: "za", name: "South Africa" },
	];

	return (
		<>
			<div className="container d-sm-inline-block d-lg-none">
				<label className="my-3 " htmlFor="countryDD">
					Select Country:
				</label>

				<select className="form-select" id="countryDD" onChange={handleCountry}>
					<option>Choose...</option>
					{countries.map((country) => (
						<option key={country.code} value={country.code}>
							{country.name}
						</option>
					))}
				</select>
			</div>

			<div className="container input-group mt-md-3 my-3 d-lg-flex d-none">
				<label className="input-group-text .select-dropdown" htmlFor="countryDD-lg">
					Select Country
				</label>
				<select className="form-select" id="countryDD-lg" onChange={handleCountry}>
					<option>Choose...</option>
					{countries.map((country) => (
						<option key={country.code} value={country.code}>
							{country.name}
						</option>
					))}
				</select>
			</div>
		</>
	);
};

export default Country;
