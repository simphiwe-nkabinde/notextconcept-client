import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryStyles from "./countries.page.module.css"
export default function CountriesPage() {

    const [allCountries, setAllCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(res => {
                setAllCountries(res);
                setFilteredCountries(res);
            })
    }, [])

    function filterCountries(e) {
        const filterString = e.target.value.toLowerCase()
        if (!filterString) return allCountries;
        let filtered = allCountries.filter(country => {
            if (country.name.toLowerCase().includes(filterString)) return true;
            if (country.alpha2Code.toLowerCase().includes(filterString)) return true;
            if (country.alpha3Code.toLowerCase().includes(filterString)) return true;
            if (country.cioc && country.cioc.toLowerCase().includes(filterString)) return true;
        })
        return setFilteredCountries(filtered);
    }


    return (
        <main className="container">
            <section className="text-center my-2">
                <h2>Countries</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. libero eaque. Doloremque nisi nostrum enim esse distinctio suscipit quasi dolores, rerum repellat voluptate nemo molestiae delectus.
                </p>
            </section>
            <section>
                <div>
                    <div className="mb-3">
                        <input onChange={filterCountries} type="text" className={`${CountryStyles.searchbar} mx-auto form-control`} id="searchInput" placeholder="search country" />
                    </div>
                </div>
                <div className="row">
                    {!filteredCountries.length ?
                        (
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        ) :
                        filteredCountries.map((country, index) => {
                            return (
                                <Link key={index} to={`/survey/country/${country.alpha2Code}`} className="m-2 text-center col btn">
                                    <img className="rounded-circle shadow-sm" src={country.flag} alt={`${country} flag`} width='60' height="60" />
                                    <p>{country.name.length > 15 ? `${country.name.slice(0, 15)}...` : country.name}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </section>

        </main>
    );
}