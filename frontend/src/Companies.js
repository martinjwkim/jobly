import React, { useEffect, useState, useContext } from 'react';
import Search from './Search.js';
import CompanyCard from './CompanyCard';
import JoblyApi from "./JoblyApi";
import { Redirect } from "react-router-dom";
import UserContext from "./userContext";


function Companies() {
  const [companies, setCompanies] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getCompanies() {
      const c = await JoblyApi.getCompanies();
      setCompanies(c);
    }
    getCompanies();
  }, []);

  if (!user) return <Redirect to="/login" />

  const showCompanies = () => (
    companies.map(company => (
      <CompanyCard key={company.handle} company={company} companies={companies}/>
    ))
  )

  const search = async (term) =>{
    setCompanies(await JoblyApi.getCompanies(term));
  }
  return (
    <div className="container">
      <h3>List of Companies</h3>
      <Search search={search}/>
      {companies.length
      ? <div>{showCompanies()}</div>
      : <h5>Sorry, no results were found.</h5>
      }
    </div>
  );
}

export default Companies;
