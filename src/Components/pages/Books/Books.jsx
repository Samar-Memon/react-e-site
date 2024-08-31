import React, { useEffect, useState } from 'react'
import '../../../App.css'
import{
  getFirestore,
  collection,
  addDoc,
  db,
  getDocs
} from '../../../FireBase/firebase'
import Card from '../../Card/Card';
import { useNavigate } from 'react-router-dom';

const Books = () => {

  const navigate = useNavigate()

  const [getBooksProduct, setGetBooksProduct] = useState([]);
  const [noData, setNoData] = useState(false);

  const getBooksDataFunc = async() => {
    const querySnapshot = await getDocs(collection(db, "all_product"));
    querySnapshot.forEach((doc) => {
      let filteredProducts = [];

    querySnapshot.forEach((doc) => {
      if (doc.data().productCategory === 'books') {
        filteredProducts.push(doc.data());
      } else {
        setNoData(true)
      }
    });

    // Update the state once with the complete list
    setGetBooksProduct(filteredProducts);
    });
  }

  useEffect(() => {
    getBooksDataFunc()
  }, [])

  return (
    <>
    <button className='border-2 border-[#00a6bb] text-white bg-[#00a6bb] py-2 px-6 rounded-md hover:bg-transparent hover:text-[#00a6bb] mt-3 ml-3' onClick={() => navigate('/')}><i className="fa-solid fa-arrow-left"></i> Back</button>
  <h1 className='text-3xl mt-10 mb-5 font-semibold text-[#00a6bb] text-center border-b-2 border-[#00a6bb] pb-5'>Books Items</h1>
    <div className='flex flex-wrap justify-evenly px-2 gap-y-5'>
    {
      getBooksProduct.length > 0 ? getBooksProduct.map((data, index) => {
        return(
          <Card key={index} image={data.productImageURL} title={data.productName} price={data.productPrice} desc={data.productDescription}/>
        )
      }) : noData ? <h1 className='text-2xl text-[#00a6bb] font-semibold'>No Data from Books Items</h1> : <div className="loader"></div>
    }
    </div>
    </>
  )
}

export default Books