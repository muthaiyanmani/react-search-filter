import React, { useState } from 'react'

const Pagination = ({data,RenderComponent,title,pageLimit,dataLimit}) => {

    const [pages] = useState(Math.round(data.length/dataLimit))
    const [currentPage,setCurrentPage] = useState(1);

    const goToNextPage = () =>{
        setCurrentPage(prev => prev + 1)
    }
    const goToPreviousPage = () =>{
        setCurrentPage(prev => prev - 1)
    }
    const changePage = (e) =>{
        const pageNumber = Number(e.target.textContent)
        setCurrentPage(pageNumber)
    }
    const getPaginatedData = () =>{
        const startIndex = currentIndex * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex,endIndex)

    }
    const getPaginationGroup = () =>{
        let start = Math.floor((currentPage - 1)/pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    }
    return (
        <div>
            
        </div>
    )
}

export default Pagination
