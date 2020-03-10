import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Layout from '../components/Layout/index';
import OfferCard from '../components/OfferCard/index';

const GET_OFFERS = gql`
    query offers {
        offers {
            title
            storeDomain
            image
            price
            user {
                name
            }
            store {
                image
                domain
                title
            }
        }
    }
`;

function App () {
    const { loading, error, data, fetchMore } = useQuery(GET_OFFERS, {
        notifyOnNetworkStatusChange: true
    });

    if (loading) {
        return <Layout>... Loading</Layout>;
    }

    return (
        <Layout>
            <div className="heading">
                <h1>
                    <strong>Promobit</strong>
                </h1>
                <div style={{width: '200px'}}></div>
            </div>
            <div className="weather__container">
                { data.offers.map( (o, i) => (<OfferCard offer={o} key={i}></OfferCard>) ) }
            </div>
            <style jsx>{`
            .heading {
                display: flex;
                justify-content: space-between;
                margin-bottom: 81px;
                width: 100%;
            }

            .weather__container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            }
            `}</style>
        </Layout>
    );
}

export default App;