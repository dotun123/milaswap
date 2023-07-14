// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { data } from "https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"

// export default function handler(req, res) {
//   res.status(200).json(data)
// }

export const getStaticProps = async () =>{
    // const res = await fetch('https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=1&interval=1m')
    const res = await fetch('https://api.pancakeswap.info/api/v2/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
    const data = await res.json()
    // const resToken = await fetch('https://api.pancakeswap.info/api/v2/tokens');
    // const dataToken = await resToken.json()
    console.log(data)
    if (!data ) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { bnb: data } // will be passed to the page component as props
  
    }
  }
  
  
  
  const Bnb = ({ bnb }) => {
    return (
      <div>
        {/* {bnb.updated_at} */}
        {bnb?.updated_at}
      </div>
    );
  
  }
  export default Bnb