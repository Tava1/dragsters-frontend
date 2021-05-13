import ShowProducts from '../pages/products/show-products';
import { GetServerSideProps } from 'next'


export default function Index() {
  return (
    <>
      <ShowProducts />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { customer, token } = ctx.req.cookies;

  return {
    props: {
      token: String(token),
      customer: String(customer),
    }
  }
}