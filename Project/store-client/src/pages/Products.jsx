import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../api/api'
import { Loader, Loader2, TriangleAlert } from 'lucide-react'

const Products = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [fitlerProduct, setFilterProduct] = useState([])
    async function fetchData() {
        try {
            const res = await getProducts()
            if (res.status === 200) {
                setProducts(res.data)
                setFilterProduct(res.data)
            }

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setQuery(query)

        if (products) {
            const filtered = products.filter((product) =>
                product.title.toLowerCase().includes(query)
            );
            setFilterProduct(filtered)
        }
    };


    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return (
            <>
                <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                    <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
                </div>
            </>
        )
    }
    // if (!products || products.length === 0) {
    //     return (
    //         <>
    //             <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
    //                 <TriangleAlert className='text-orange-400 h-12 w-12' />
    //                 <p>
    //                     No Products Available !
    //                 </p>
    //             </div>
    //         </>
    //     )
    // }

    // const img = "https://loremflickr.com/640/480/cats"
    // const name = "Bespoke Fresh Mouse"
    // const price = "101.00"
    return (
        <>
            {/* <div className='w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'> */}
            <div className='w-screen h-full flex flex-col justify-center items-center'>
                <div className='w-full h-[4rem] flex justify-center items-center'>
                    <input type="text" name="" id="" value={query} onChange={handleSearch} className='w-[50%] bg-[#f5f5f7] shadow-md border-b-2 border-transparent p-2 rounded-sm focus:shadow-purple-200 focus:outline-none focus:border-b-2 focus:border-purple-500' placeholder='Filter Products'/>
                </div>
                <div className='w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>

                {/* {products.map((product, index) => (
                    <ProductCard img={product.img} name={product.title} price={product.price} key={product._id} />
                ))
                } */}
             {(!fitlerProduct || fitlerProduct.length === 0) ? (
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <TriangleAlert className='text-orange-400 h-12 w-12' />
                            <p>
                                No Products Available !
                            </p>
                        </div>
                    ) : (
                        <>
                            {
                                fitlerProduct.map((product, index) => (
                                    <ProductCard img={product.img} name={product.title} price={product.price} key={product._id} /*pid={product._id} /*auth={auth} uid={uid} */ />
                                ))
                            }
                        </>
                    )
                    }
                </div>   
            </div>
        </>
    )
}

export default Products