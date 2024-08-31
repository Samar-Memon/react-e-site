import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formSubmitted = async() => {
    sessionStorage.setItem('E-react-user_name', name);
    sessionStorage.setItem('E-react-user_email', email);
    const userName = sessionStorage.getItem('E-react-user_name')
    const userEmail = sessionStorage.getItem('E-react-user_email')

      try {
        const docRef = await addDoc(collection(db, "users"), {
          userEmail,
          userName,
          createdAt: new Date().toLocaleDateString()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    navigate('/')
  }

  return (
    <>
    <Layout>
    <section className="bg-gray-50 h-[100vh] flex justify-center items-center">
  <div className="px-1 py-8 max-w-[500px] w-full lg:py-0">
    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-[#00a6bb] md:text-2xl">
          Create an account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={formSubmitted}>
        <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-[#00a6bb]"
            >
              User Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="User Name"
              required
              minLength={4}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#00a6bb]"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#00a6bb]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#00a6bb] hover:bg-transparent hover:text-[#00a6bb] border-2 border-[#00a6bb] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Create an account
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

    </Layout>
    </>
  )
}

export default SignIn