import React from 'react';
// import Itembox from './Itembox';
import sdhdata from '../../data/sdhdata.json'
import Category from './Category';
import Itembox from './Itembox';
import 'bootstrap/dist/css/bootstrap.min.css'

function Item() {
    return (
        <section id="itemTitle" className="mb80 mt80 wrap container">
            <h2 className="text-center"><a href="#closeTop" className="text-decoration-none scrollTop">지금 당장 술 담아보기</a></h2>
            <Category sdhdt={sdhdata.sdh_category}></Category>
            <Itembox sdhdata={sdhdata}></Itembox>
        </section>




    )
}

export default Item
