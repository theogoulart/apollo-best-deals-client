import Link from 'next/link';

function OfferCard({ offer }) {
  return (
    <Link href="/about">
      <button className="card text-white mb-4 text-left">
        <div className="card-body" style={{padding: '9px'}}>
          <img className="mb-2" height="200" width="200" src={`https://i.promobit.com.br${offer.image}`} />
          <p>
            <strong style={{fontSize: '18px'}}>{offer.price}</strong>
            <img className="rounded-circle mx-2 mb-2" width="20" height="20" src={offer.store.image} alt={offer.store.title}/>
            <small>{offer.store.domain}</small>
          </p>
          <p style={{overflow: 'hidden', height: '38px', width: '200px'}}><small>{ offer.title }</small></p>
          <hr/>
          <p className="text-right">postado por <strong>{ offer.user.name }</strong></p>
        </div>
      </button>
    </Link>
  );
}

export default OfferCard;