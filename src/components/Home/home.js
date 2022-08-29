import React from 'react';
import './sass/home.scss'
import filterForm from './filterRoute'
import Filter from './filter.js'
import Filterdata from './filterdata'
import FilterDataOlP from './filterdataolp'
import Search from './search'
import Searchdata from './serachdata'
import SerachDataOlp from './finalsearcholp';
function Home() {
  const{filter,data,f1,Inc,Dec,Inc1,Dec1,total2,product,formSubmit,inputSubmit}=filterForm()
  return (
    <div className='home-section'>
      
      <section className="filter">
        <Filter f1={f1}/>
      </section>
      
      <section className="filterdata">
        <Filterdata filter={filter} Inc={Inc}/>
      </section>
      
      
      <section className='search-section'>
      <article className='search'>
        <Search formSubmit={formSubmit} inputSubmit={inputSubmit}/>
      </article>
      <article className='searchdata'>
        <Searchdata product={product} Inc1={Inc1}/>
      </article>
      </section>
      
      
      <section className='finalolp'>
        <table>
          <thead>
            <tr className='bg bg-dark text-white'>
              <th>Items</th>
              <th>Qut</th>
              <th>Price</th>
            </tr>
          </thead>       
        <FilterDataOlP data={data} Inc={Inc} Dec={Dec}/>
        <SerachDataOlp product={product} Dec1={Dec1} Inc1={Inc1}/>
         <footer className='bg bg-dark text-white'>
          <section>
         <div><h5>Total</h5><h5>:</h5><h5>{total2} $</h5></div>
          <div>
            <span><input type="radio"/>Cash</span>
            <span><input type="radio"/>Debit</span>
            <span><input type="radio"/>Credit</span>
            <span><input type="radio"/>G-Pay</span>
          </div>
          </section>
          </footer>
        </table>
      </section>
    
    </div>
  );
}

export default Home;