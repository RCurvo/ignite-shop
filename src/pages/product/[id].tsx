import { useRouter } from 'next/router'

export default function Product() {
    const { query } = useRouter()


    return (
        <div>Product: {JSON.stringify(query)}</div>
    )
}