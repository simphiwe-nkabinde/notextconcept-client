import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";

export default function CountryPage() {

    const concepts = ['transport/travel', 'eating/food', 'apparel']

    const [country, setCountry] = useState({});
    const { countryCode } = useParams();

    useEffect(() => {
        fetch('https://restcountries.com/v2/alpha/' + countryCode)
            .then(res => res.json())
            .then(
                res => {
                    setCountry(res)
                }
            )
    })


    return (
        <main className="container">
            <Link to={"/survey/country"} className="text-decoration-none d-flex align-items-center">
                <i className="bi bi-caret-left-fill fs-3"></i>
                <span>Countries</span>
            </Link>
            <section className="text-center my-2">
                <h2>{country.name}</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. libero eaque. Doloremque nisi nostrum enim esse distinctio suscipit quasi dolores, rerum repellat voluptate nemo molestiae delectus.
                </p>
            </section>
            <hr/>
            <section className="d-flex flex-wrap">
                {
                    concepts.map((concept, index) => {
                        return (
                            <Link key={index} to={``} className="m-2 d-block text-light text-center col btn bg-secondary small rounded-pill">
                                {concept}
                            </Link>
                        )
                    })
                }
            </section>
        </main>
    )
}