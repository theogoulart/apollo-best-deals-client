import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withApollo } from '../../lib/apollo'
import { useRouter } from 'next/router'

import Layout from '../../components/Layout/index';

const GET_OFFER = gql`
    query Offer($slug: ID!) {
        offer(slug: $slug) {
            id
            title
            image
            price
            store {
                domain
                image
            }
            user {
                id
                name
            }
        }
    }
`;

function Offer () {
    const router = useRouter();
    const { slug } = router.query;

    const { loading, error, data, fetchMore } = useQuery(GET_OFFER, {
        variables: { slug },
        notifyOnNetworkStatusChange: true
    });

    if (loading) {
        return <Layout>... Loading</Layout>;
    }

    return (
        <Layout>
            <div className="heading">
                <h1>
                    Oferta
                </h1>
            </div>
            <div className="weather__container">
                <div className="card text-white m-1 text-left">
                    <div className="card-body">
                        <div>
                            <img src={"https://i.promobit.com.br" + data.offer.image}/>
                        </div>
                        <div className="mx-4">
                            <p style={{fontSize: '32px'}}>{data.offer.title}</p>
                            <p style={{fontSize: '32px'}}>{data.offer.price}</p>
                        </div>
                        <div>
                            <img className="rounded-circle" width="40" height="40" src={data.offer.store.image}/>
                            <p>{data.offer.store.domain}</p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .heading {
                display: flex;
                justify-content: space-between;
                margin-bottom: 81px;
                width: 100%;
            }

            .weather__container, .card-body {
                display: flex;
                justify-content: center;
            }
            `}</style>
        </Layout>
    );
}

export default withApollo({ssr: true})(Offer);